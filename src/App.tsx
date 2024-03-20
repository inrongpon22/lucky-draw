import { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";
// chart lib
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ArcElement);

type Reward = {
  id: number;
  title: string;
  quantity: number;
  segmentWidth: number; // if it much, width is more little
  color: string;
  top: number;
  right: number;
  transform: number;
};

const list: Reward[] = [
  {
    id: 1,
    title: "Apple Watch ⌚️",
    quantity: 1,
    color: "#8BC349",
    segmentWidth: 1,
    top: 48.5,
    right: 65,
    transform: -45,
  },
  {
    id: 2,
    title: "Thank you 😋",
    quantity: Infinity,
    color: "#FF9800",
    segmentWidth: 2,
    top: 64,
    right: 65,
    transform: 30,
  },
  {
    id: 3,
    title: "Thank you 🙏",
    quantity: Infinity,
    color: "#F44336",
    segmentWidth: 4,
    top: 64,
    right: 65,
    transform: -30,
  },
  {
    id: 4,
    title: "Vacuum cleaner 🧹",
    quantity: 1,
    color: "#9B27B0",
    segmentWidth: 1,
    top: 64,
    right: 65,
    transform: -30,
  },
  {
    id: 5,
    title: "Money 💸",
    quantity: Infinity,
    color: "#3E51B5",
    segmentWidth: 3,
    top: 64,
    right: 65,
    transform: -30,
  },

  {
    id: 6,
    title: "Thank you 😱",
    quantity: Infinity,
    color: "#01A9F4",
    segmentWidth: 2,
    top: 64,
    right: 65,
    transform: -30,
  },
  {
    id: 7,
    title: "Thank you 🫣",
    quantity: Infinity,
    color: "#009588",
    segmentWidth: 2,
    top: 64,
    right: 65,
    transform: -30,
  },
];

const Pin = () => {
  return (
    <div className="absolute w-1/12 h-1/12 top-80 z-50">
      <svg
        // width="85"
        // height="106"
        viewBox="0 0 85 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_81_67)">
          <path
            d="M77 42.4498C77 61.4758 65.7875 71.3014 43.3625 98C21.3688 71.3014 8 61.4758 8 42.4498C8 23.4237 23.4462 8 42.5 8C61.5538 8 77 23.4237 77 42.4498Z"
            fill="white"
          />
          <path
            d="M74.5 42.4498C74.5 51.3418 71.9234 58.0704 66.5291 65.9334C62.6379 71.6055 57.392 77.7214 50.6597 85.5704C48.4014 88.2032 45.9758 91.0311 43.378 94.1026C39.1978 89.0956 35.3489 84.6969 31.882 80.7348C31.394 80.1771 30.9136 79.6281 30.4409 79.0872C26.0866 74.105 22.4168 69.8498 19.438 65.8536C13.5351 57.9345 10.5 51.2375 10.5 42.4498C10.5 24.8078 24.8235 10.5 42.5 10.5C60.1765 10.5 74.5 24.8078 74.5 42.4498Z"
            stroke="white"
            strokeWidth="5"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_81_67"
            x="0"
            y="0"
            width="85"
            height="106"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_81_67"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_81_67"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

function App() {
  let chartInstance = null;
  const [rewards] = useState(list); //,setRewards

  const shuffle = (array: any) => {
    let currentIndex = array.length;
    // let randomIndex = 0;

    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[currentIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const spin = () => {
    console.log("spin");
    // wheel.play();
    const box: any = document.getElementById("pie-circle-container");
    const element = document.getElementById("pie-circle");
    let SelectedItem = "";

    let Watch = shuffle([1740, 2110, 2470]);
    let Vacc = shuffle([1810, 2170, 2530]);
    let Money = shuffle([1630, 1990, 2350]);
    let Thank1 = shuffle([1570, 1930, 2290]);
    let Thank2 = shuffle([1890, 2250, 2610]);
    let Thank3 = shuffle([1840, 2210, 2570]);
    let Thank4 = shuffle([1770, 2130, 2490]);

    let results = shuffle([
      Watch[0],
      Vacc[0],
      Money[0],
      Thank1[0],
      Thank2[0],
      Thank3[0],
      Thank4[0],
    ]);

    if (Watch.includes(results[0])) SelectedItem = "Apple Watch ⌚️";
    if (Vacc.includes(results[0])) SelectedItem = "Vacuum cleaner 🧹";
    if (Money.includes(results[0])) SelectedItem = "Money 💸";
    if (Thank1.includes(results[0])) SelectedItem = "Thank you 😋";
    if (Thank2.includes(results[0])) SelectedItem = "Thank you 😱";
    if (Thank3.includes(results[0])) SelectedItem = "Thank you 🙏";
    if (Thank4.includes(results[0])) SelectedItem = "Thank you 🫣";

    box?.style.setProperty("transition", "all ease 5s");
    box!.style.transform = `rotate(1570deg)`; //rotate(" + results[0] + "deg)
    element?.classList.remove("animate");

    setTimeout(function () {
      element?.classList.add("animate");
    }, 500);

    setTimeout(function () {
      // alert
      console.log(SelectedItem);
      //   Swal.fire({
      //     title: "Sweet!",
      //     html: `You won ${SelectedItem}`,
      //     imageUrl: "logo",
      //     imageWidth: 400,
      //     imageHeight: 200,
      //     imageAlt: "image",
      //     confirmButtonText: "Close",
      //     confirmButtonColor: "#000",
      //   }).then(async (result) => {
      //     if (result.isConfirmed) {
      //       box?.style.setProperty("transition", "initial");
      //       box!.style.transform = "rotate(90deg)";
      //     }
      //   });
    }, 5500);

    setTimeout(() => {
      box?.style.setProperty("transition", "initial");
      box!.style.transform = "rotate(90deg)";
    }, 6000);
  };

  const data: any = {
    // maintainAspectRatio: false,
    responsive: true,
    labels: rewards.map((item: any) => item.title),
    datasets: [
      {
        label: rewards.map((item: any) => item.title),
        data: rewards.map((item: any) => item.segmentWidth),
        backgroundColor: rewards.map((item: any) => item.color),
      },
    ],
  };

  const pieOptions: any = {
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
          size: 18,
          weight: "bold",
        },
        formatter: (value: any, context: any) => {
          // const rotation = context.dataIndex * 30;
          return context.chart.data.labels[context.dataIndex];
        },
        rotation: (context: any) => {
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
      },
    },
  };

  return (
    <main className="flex flex-col items-center mt-28">
      <Pin />
      <h1 className="text-2xl sm:text-8xl font-extrabold text-center">
        Which reward you will get?
      </h1>
      <div id="pie-circle-container" className="pie-circle-container mt-10">
        <div id="pie-circle" className="pie-circle">
          <div className="h-[390px] w-[390px] sm:h-[600px] sm:w-[600px]">
            <Pie
              data={data}
              options={pieOptions}
              plugins={[ChartDataLabels]}
              ref={(input) => {
                chartInstance = input;
              }}
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        id="spin-button"
        className="lg:text-3xl bg-[#FFFFFF] hover:bg-[#eeee] hover:border-red-700 mt-10 w-2/3"
        onClick={spin}
      >
        Spinnnn !
      </button>
    </main>
  );
}

export default App;
