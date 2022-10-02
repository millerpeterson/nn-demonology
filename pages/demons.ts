import { StaticImageData } from "next/image";

import seepus1 from "public/images/seepus/1725011535_18th_century_woodcut__evil__red_highlights__blind_eyes.png";

export interface Demon {
  rank: number;
  url: string;
  images: Array<StaticImageData>;
  name: string;
  title: string;
  backgroundColor: string;
}

const demonPages: Array<Demon> = [
  {
    url: "seepus",
    rank: 1,
    images: [seepus1],
    name: "Seepus",
    title: "The Serial Shepherd",
    backgroundColor: "rgb(234, 213, 164)",
  },
  {
    url: "febroth",
    rank: 2,
    images: [],
    name: "Febroth",
    title: "Sower of Data Famine",
    backgroundColor: "white",
  },
  {
    url: "gannon",
    rank: 3,
    images: [],
    name: "Gannon",
    title: "The Vanishing Gradient",
    backgroundColor: "white",
  },
];

export default demonPages;
