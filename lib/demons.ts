import { StaticImageData } from "next/image";

import seepus1 from "public/images/seepus/1725011535_18th_century_woodcut__evil__red_highlights__blind_eyes.png";
import seepus2 from "public/images/seepus/1293531161_18th_century_woodcut__evil__red_highlights__bound.png";
import seepus3 from "public/images/seepus/1465224003_18th_century_woodcut__evil__red_highlights__bound.png";
import seepus4 from "public/images/seepus/2059808928_18th_century_woodcut__evil__red_highlights__bound.png";
import seepus5 from "public/images/seepus/2203825272_18th_century_woodcut__evil__red_highlights__bound.png";
import seepus6 from "public/images/seepus/2493195800_18th_century_woodcut__evil__red_highlights__bound.png";
import seepus7 from "public/images/seepus/3227169635_18th_century_woodcut__evil__red_highlights__bound.png";

import gannon1 from "public/images/gannon/820996830_18th_century_linocut__nightmare__web__red_highlights.png";
import gannon2 from "public/images/gannon/986633662_18th_century_woodcut__evil__red_highlights__bound.png";
import gannon3 from "public/images/gannon/1262751533_18th_century_woodcut__evil__red_highlights__bound.png";
import gannon4 from "public/images/gannon/1461521998_18th_century_woodcut__evil__red_highlights__bound.png";
import gannon5 from "public/images/gannon/3427281522_18th_century_woodcut__evil__red_highlights__bound.png";
import gannon6 from "public/images/gannon/3836509100_18th_century_woodcut__evil__red_highlights__bound.png";
import gannon7 from "public/images/gannon/4072736594_18th_century_woodcut__evil__red_highlights__bound.png";

import febroth1 from "public/images/febroth/1064519723_18th_century__woodcut__starvation__demon.png";
import febroth2 from "public/images/febroth/645116527_18th_century_woodcut__demon__evil.png";
import febroth3 from "public/images/febroth/1075302491_18th_century_woodcut__demon__evil.png";
import febroth4 from "public/images/febroth/1702754172_18th_century_woodcut__demon__evil.png";
import febroth5 from "public/images/febroth/2353161219_18th_century_woodcut__demon__evil.png";
import febroth6 from "public/images/febroth/2438544600_18th_century_woodcut__demon__evil.png";
import febroth7 from "public/images/febroth/2909171049_18th_century_woodcut__demon__evil.png";

import stoch1 from "public/images/stoch/444147928_18th_century_woodcut__colorful__demon__electricity.png";

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
    images: [seepus1, seepus2, seepus3, seepus4, seepus5, seepus6, seepus7],
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
    images: [gannon1, gannon2, gannon3, gannon4, gannon5, gannon6, gannon7],
    name: "Gannon",
    title: "The Vanishing Gradient",
    backgroundColor: "rgb(198, 188, 174)",
  },
  {
    url: "stoch",
    rank: 4,
    images: [stoch1],
    name: "Stoch",
    title: "The Annealer",
    backgroundColor: "rgb(243, 226, 182)",
  },
];

export default demonPages;
