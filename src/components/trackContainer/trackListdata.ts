import track_img1 from "../../assets/backgroud/1.gif";
import track_img2 from "../../assets/backgroud/2.gif";
import track_img3 from "../../assets/backgroud/3.gif";
import track_img4 from "../../assets/backgroud/4.gif";
import track_img5 from "../../assets/backgroud/5.gif";

import silentWoodSound from "../../assets/sound/track/silent-wood.mp3";
import lostAndFoundSound from "../../assets/sound/track/Lost-and-Found.mp3";
import celestiaSound from "../../assets/sound/track/Ghostrifter-Official-Celestia.mp3";
import otjanbirdSound from "../../assets/sound/track/Otjanbird-Pt.-II.mp3";
import crescentMoodSound from "../../assets/sound/track/Crescent-Moon.mp3";

const soundsPathUrl = [
  "/sound/track/silent-wood.mp3",
  "/sound/track/Lost-and-Found.mp3",
  "/sound/track/Ghostrifter-Official-Celestia.mp3",
  "/sound/track/Otjanbird-Pt.-II.mp3",
  "/sound/track/Crescent-Moon.mp3",
];

export type trackType = { title: string; bg: string; soundURl: string };

export const tracks: trackType[] = [
  {
    title: "silent wood",
    bg: track_img1,
    soundURl: silentWoodSound,
  },
  {
    title: "lost and found",
    bg: track_img2,
    soundURl: lostAndFoundSound,
  },
  {
    title: "celestia",
    bg: track_img3,
    soundURl: celestiaSound,
  },
  {
    title: "otjanbird",
    bg: track_img4,
    soundURl: otjanbirdSound,
  },
  {
    title: "crescent mood",
    bg: track_img5,
    soundURl: crescentMoodSound,
  },
];
