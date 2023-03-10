import track1 from "../../assets/sound/effect/forest.mp3";
import forestSound from "../../assets/sound/effect/forest.mp3";
import rainSound from "../../assets/sound/effect/rain.mp3";
import waveSound from "../../assets/sound/effect/ocean-wave.mp3";
import urbanSound from "../../assets/sound/effect/urban.mp3";
import nightFallSound from "../../assets/sound/effect/nightFall.mp3";
import fireSound from "../../assets/sound/effect/fire.mp3";

import forestImg from "../../assets/backgroud/forest.jpg";
import nightImg from "../../assets/backgroud/nightfall.jpg";
import oceanImg from "../../assets/backgroud/ocean_wave.jpg";
import urbanImg from "../../assets/backgroud/urbain.jpg";
import rainImg from "../../assets/backgroud/rainthunder.jpg";
import fireImg from "../../assets/backgroud/fire.jpg";

export type SoundProp = {
  name: string;
  url: string;
  img: string;
};

export const sounds = [
  {
    name: "ocean wave",
    url: waveSound,
    img: oceanImg,
  },
  {
    name: "forest",
    url: forestSound,
    img: forestImg,
  },
  {
    name: "urbain",
    url: urbanSound,
    img: urbanImg,
  },
  {
    name: "nightfall",
    url: nightFallSound,
    img: nightImg,
  },
  {
    name: "rain and thunder",
    url: rainSound,
    img: rainImg,
  },
  {
    name: "fire",
    url: fireSound,
    img: fireImg,
  },
];
