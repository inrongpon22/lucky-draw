import { useState } from "react";
// styled & alert
import Swal from "sweetalert2";
import "./App.css";
// chart lib
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, ChartOptions, ChartData } from "chart.js";
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ArcElement);
// components
import Pin from "./components/Pin";
// utils
import { list } from "./utils/rewards";

function App() {
  const [rewards, setRewards] = useState<any>(list);
  const [rotating, setRotating] = useState(false);

  const spin = async () => {
    const box: any = document.getElementById("pie-circle-container");
    const cong = document.getElementById("congrats");

    const newArr: number[] = [];
    let SelectedId = 0;

    await rewards.map((item: any) => {
      //push only object's quantity more than 0
      if (item.quantity > 0) {
        newArr.push(...item.deg);
      } else {
        return { ...item, color: "#404040" }; // if less than 1 change color to dark
      }
    });

    const randomIndex: number = Math.floor(Math.random() * newArr.length); // random index, for random data

    await rewards.find((item: any) => {
      if (item.deg.includes(newArr[randomIndex])) {
        SelectedId = item.id;
      }
    });

    // animate rotate wheel
    box?.style.setProperty("transition", "all ease 5s");
    box!.style.transform = `rotate(${newArr[randomIndex]}deg)`;
    setRotating(true);

    // wait until rotate completed
    setTimeout(function () {
      const matched: any = rewards.find((item: any) => item.id === SelectedId);

      if (matched.id == 1 || matched.id == 4 || matched.id == 5) {
        // if won show congrats
        cong?.classList.remove("hidden");
      }
      // alert
      Swal.fire({
        title: matched.title
          ? `Congratulation!<br/>You got ${matched.title}`
          : "Thank you",
        color: "#ffff",
        width: "400px",
        background: "#A73121",
        imageUrl: matched.image ?? "",
        imageWidth: 185,
        imageHeight: 185,
        confirmButtonText: "Close",
        confirmButtonColor: "#000",
        allowOutsideClick: false,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await setRewards(
            // decrease quantity and if less than 1 set #404040 color and filter from array
            rewards.map((item: any) => {
              if (item.id === SelectedId) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                  color: item.quantity === 1 ? "#404040" : item.color,
                };
              } else {
                return item;
              }
            })
          );
          // reset initial after success
          await setRotating(false);
          box?.style.setProperty("transition", "initial");
          box!.style.transform = "rotate(90deg)";
          cong?.classList.add("hidden");
        }
      });
    }, 5500);
  };

  // handle chart
  const data: ChartData<any> = {
    // data lebel in the chart
    labels: rewards.map((item: any) => item.dataLabel),
    datasets: [
      {
        data: rewards.map((item: any) => item.segmentWidth), // segment's width depends on item.segmentWidth, more value more width
        backgroundColor: rewards.map((item: any) => item.color), // set background color for each segment
      },
    ],
  };

  const pieOptions: ChartOptions<any> = {
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      datalabels: {
        display: true, // Set to true to display data labels
        color: "#fff", // Label text color
        font: {
          size: 16,
          weight: "bold",
        },
        formatter: (_value: any, context: any) => {
          return context.chart.data.labels[context.dataIndex];
        },
        rotation: (context: any) => {
          // each segment have to rotate different deg
          const newIndex = context.dataIndex + 1;
          switch (newIndex) {
            case 1:
              return 100;

            case 2:
              return 140;

            case 3:
              return 220;

            case 4:
              return -90;

            case 5:
              return -40;

            case 6:
              return 15;

            case 7:
              return 65;
          }
        },
        align: "end",
        padding: {
          right: -150,
        },
      },
    },
  };

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-[430px] h-[932px]">
        <Pin />
        <span className="text-[28px] font-extrabold text-center">
          Which reward you will get?
        </span>

        {/* starts:: wheel */}
        <div id="pie-circle-container" className="pie-circle-container mt-10">
          <div id="pie-circle" className="pie-circle">
            <div className="w-[400px] h-[400px]">
              <Pie
                data={data}
                options={pieOptions}
                plugins={[ChartDataLabels] as any}
              />
            </div>
          </div>
        </div>
        {/* ends:: wheel */}

        {/* starts:: draw button */}
        <button
          type="button"
          id="spin-button"
          disabled={rotating}
          className={`float-center lg:text-3xl bg-[#FFFFFF] mt-5 w-5/6 ${
            rotating ? "bg-gray-500" : "hover:bg-[#eeee] hover:border-red-700"
          }`}
          onClick={spin}
        >
          Spinnnn !
        </button>
        {/* start:: draw button */}
      </div>

      {/* starts:: congrats animation */}
      <div
        id="congrats"
        className="congrats hidden absolute w-full h-screen bg-cover z-50"
      ></div>
      {/* ends:: congrats animation */}
    </main>
  );
}

export default App;
