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
import stoch2 from "public/images/stoch/25893781_18th_century_woodcut_demon.png";
import stoch3 from "public/images/stoch/436189172_18th_century_woodcut_demon.png";
import stoch4 from "public/images/stoch/645457516_18th_century_woodcut_demon.png";
import stoch5 from "public/images/stoch/1186555761_18th_century_woodcut_demon.png";
import stoch6 from "public/images/stoch/1300575422_18th_century_woodcut_demon.png";
import stoch7 from "public/images/stoch/2013509266_18th_century_woodcut_demon.png";

import baeyasul1 from "public/images/baeyasul/76845061_18th_century_woodcut__demon__flowing_rapids__red_highlights.png";
import baeyasul2 from "public/images/baeyasul/1015745367_18th_century_woodcut__demon__flowing_rapids__red_highlights.png";
import baeyasul3 from "public/images/baeyasul/1590248119_18th_century_woodcut__demon__flowing_rapids__red_highlights.png";
import baeyasul4 from "public/images/baeyasul/2085037179_18th_century_woodcut__demon__flowing_rapids__red_highlights.png";
import baeyasul5 from "public/images/baeyasul/2144170813_18th_century_woodcut__demon__flowing_rapids__red_highlights.png";
import baeyasul6 from "public/images/baeyasul/2204403836_18th_century_woodcut__demon__flowing_rapids__red_highlights.png";
import baeyasul7 from "public/images/baeyasul/2975403784_18th_century_woodcut__demon__flowing_rapids__red_highlights.png";

import lasser1 from "public/images/lasser/703644009_18th_century_woodcut__demon_echoes__twisting_long_infinite_hallway_of_mirrors__red_highlights.png";
import lasser2 from "public/images/lasser/853068126_18th_century_woodcut__demon_s_reflection__hall_of_mirrors__red_highlights.png";
import lasser3 from "public/images/lasser/1205369192_18th_century_woodcut__demon_echoes__twisting_long_infinite_hallway_of_mirrors__red_highlights.png";
import lasser4 from "public/images/lasser/1221283560_18th_century_woodcut__demon_echoes__twisting_long_infinite_hallway_of_mirrors__red_highlights.png";
import lasser5 from "public/images/lasser/1569035931_18th_century_woodcut__demon_echoes__twisting_long_infinite_hallway_of_mirrors__red_highlights.png";
import lasser6 from "public/images/lasser/1944130944_18th_century_woodcut__demon_echoes__twisting_long_infinite_hallway_of_mirrors__red_highlights.png";
import lasser7 from "public/images/lasser/2658231189_18th_century_woodcut__demon_echoes__twisting_long_infinite_hallway_of_mirrors__red_highlights.png";

import umbric1 from "public/images/umbric/2246516728_18th_century_woodcut__red_highlights__demon_shadow_at_the_end_of_a_long_hallway(1).png";
import umbric2 from "public/images/umbric/251472731_18th_century_woodcut__ominous__evil_spirit.png";
import umbric3 from "public/images/umbric/1083836237_18th_century_woodcut__ominous__evil_spirit.png";
import umbric4 from "public/images/umbric/1749467535_18th_century_woodcut__ominous__evil_spirit.png";
import umbric5 from "public/images/umbric/2944417434_18th_century_woodcut__ominous__evil_spirit.png";
import umbric6 from "public/images/umbric/3023418986_18th_century_woodcut__ominous__evil_spirit.png";
import umbric7 from "public/images/umbric/3378682056_18th_century_woodcut__demon__evil__ominous.png";

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
    images: [stoch1, stoch2, stoch3, stoch4, stoch5, stoch6, stoch7],
    name: "Stoch",
    title: "The Annealer",
    backgroundColor: "rgb(243, 226, 182)",
  },
  {
    url: "baeyasul",
    rank: 5,
    images: [
      baeyasul1,
      baeyasul2,
      baeyasul3,
      baeyasul4,
      baeyasul5,
      baeyasul6,
      baeyasul7,
    ],
    name: "Baeyasul",
    title: "Sieve of Excessive Fit",
    backgroundColor: "#EDDFC4",
  },
  {
    url: "lasser",
    rank: 6,
    images: [lasser1, lasser2, lasser3, lasser4, lasser5, lasser6, lasser7],
    name: "Lasser",
    title: "The Collapsing Glass",
    backgroundColor: "#D5A891",
  },
  {
    url: "umbric",
    rank: 7,
    images: [umbric1, umbric2, umbric3, umbric4, umbric5, umbric6, umbric7],
    name: "Umbric",
    title: "Shadow of the Trainer",
    backgroundColor: "#F5D5AA",
  },
];

export function randomDemonImageIndex(demon) {
  return Math.floor(Math.random() * demon.images.length);
}

export function demonLink(demon: Demon | null, imageIndex: number): string {
  if (demon === null) {
    return "";
  }
  return `/${demon.url}/${imageIndex}`;
}

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII"];

export function rankRomanNumeral(rank: number): string {
  return romanNumerals[rank - 1];
}

export function demonNameRank(demon: Demon | null): string {
  if (demon === null) {
    return "";
  }
  return `${rankRomanNumeral(demon.rank)}. ${demon.name}`;
}

export default demonPages;
