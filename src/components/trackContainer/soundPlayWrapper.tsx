import React, { useState } from "react";
import { trackProp, TrackProvier, TypeMode } from "./soundPlayContext";
import { tracks } from "./trackListdata";

const SoundPlayProviderWrapper: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [playMode, updateMode] = useState<TypeMode>("list");
  const [activeTrack, updateActiveTrack] = useState(0);

  const playNext = () => {
    console.log("play next");
    if (playMode == "list") {
      updateActiveTrack((value) => {
        if (value < tracks.length - 1) {
          return value + 1;
        } else {
          return 0;
        }
      });
    } else if (playMode == "random") {
      const randomValue = Math.floor(Math.random() * tracks.length);
      updateActiveTrack(randomValue);
    }
  };

  const options: trackProp = {
    playMode,
    updateMode,
    playNext,
    activeTrack,
    updateActiveTrack,
    amountTracks: tracks.length,
  };

  return <TrackProvier value={options}>{children}</TrackProvier>;
};

export default SoundPlayProviderWrapper;
