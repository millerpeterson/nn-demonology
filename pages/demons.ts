import { StaticImageData } from "next/image";

import seepus1 from "public/images/seepus/1725011535_18th_century_woodcut__evil__red_highlights__blind_eyes.png";

import gannon1 from "public/images/gannon/820996830_18th_century_linocut__nightmare__web__red_highlights.png";

import febroth1 from "public/images/febroth/1064519723_18th_century__woodcut__starvation__demon.png";
import febroth2 from "public/images/febroth/645116527_18th_century_woodcut__demon__evil.png";
import febroth3 from "public/images/febroth/1075302491_18th_century_woodcut__demon__evil.png";
import febroth4 from "public/images/febroth/1702754172_18th_century_woodcut__demon__evil.png";
import febroth5 from "public/images/febroth/2353161219_18th_century_woodcut__demon__evil.png";
import febroth6 from "public/images/febroth/2438544600_18th_century_woodcut__demon__evil.png";
import febroth7 from "public/images/febroth/2909171049_18th_century_woodcut__demon__evil.png";

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
    images: [
      febroth1,
      febroth2,
      febroth3,
      febroth4,
      febroth5,
      febroth6,
      febroth7,
    ],
    name: "Febroth",
    title: "Sower of Data Famine",
    backgroundColor: "rgb(216, 197, 159)",
  },
  {
    url: "gannon",
    rank: 3,
    images: [gannon1],
    name: "Gannon",
    title: "The Vanishing Gradient",
    backgroundColor: "rgb(198, 188, 174)",
  },
];

export default demonPages;
