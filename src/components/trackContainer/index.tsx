import React, { useState } from "react";
import { TrackProvier, TypeMode } from "./soundPlayContext";
import Badge from "../Badge";
import ButtonList from "./buttonList";
import MusicList from "./musicList";

const TrackContainer = () => {
  const [playMode, setPlayMode] = useState<TypeMode>("list");
  const [selectTrack, setSelectTrack] = useState(0);

  return (
    <TrackProvier
      value={{
        playMode,
        activeTrack: selectTrack,
        updateMode(value) {
          setPlayMode(value);
        },
        updateTrack(value) {
          setSelectTrack(value);
        },
      }}
    >
      <div>
        <div className="flex justify-between items-center mb-10">
          <Badge title="sound" classNameIcon="ri-disc-line" />
          <div>
            <ButtonList />
          </div>
        </div>
        <MusicList />
      </div>
    </TrackProvier>
  );
};

export default TrackContainer;
