type Reward = {
  id: number;
  title: string;
  quantity: number;
  segmentWidth: number; // if it much, width is more wide
  color: string;
  image?: string;
  deg: object; // a chance depends on length in the array, many for more chance
};

export const list: Reward[] = [
  {
    id: 1,
    title: "Apple Watch ⌚️",
    quantity: 1,
    color: "#8BC349",
    segmentWidth: 1,
    image: "./src/assets/apple-watch_preview.png",
    deg: [1615, 1960, 2330],
  },
  {
    id: 2,
    title: "Thank you 😋",
    quantity: Infinity,
    color: "#FF9800",
    segmentWidth: 2,
    image: "",
    deg: [2310],//1570, 1910, 2310
  },
  {
    id: 3,
    title: "Thank you 🙏",
    quantity: Infinity,
    color: "#F44336",
    segmentWidth: 4,
    image: "",
    deg: [2610],//1820, 2230, 2610
  },
  {
    id: 4,
    title: "Vacuum cleaner 🧹",
    quantity: 2,
    color: "#9B27B0",
    segmentWidth: 1,
    image: "./src/assets/vacc_preview.png",
    deg: [1795, 2150, 2530],
  },
  {
    id: 5,
    title: "Money 💸",
    quantity: Infinity,
    color: "#3E51B5",
    segmentWidth: 3,
    image: "./src/assets/money_preview.png",
    deg: [2500],//1740, 2110, 2500
  },

  {
    id: 6,
    title: "Thank you 😱",
    quantity: Infinity,
    color: "#01A9F4",
    segmentWidth: 2,
    image: "",
    deg: [2570],//1680, 2410, 2570
  },
  {
    id: 7,
    title: "Thank you 🫣",
    quantity: Infinity,
    color: "#009588",
    segmentWidth: 2,
    image: "",
    deg: [2710],//1650, 2000, 2710
  },
];
