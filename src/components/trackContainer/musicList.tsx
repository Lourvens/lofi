import React, { useState } from "react";
import { tracks } from "./trackListdata";
import { RadioGroup } from "@headlessui/react";
import Card from "../Card";
import { AudioPlayerProvider } from "react-use-audio-player";

const MusicList = () => {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <RadioGroup value={activeCard} onChange={setActiveCard}>
      <div className="flex gap-5 overflow-x-scroll lg:overflow-x-hidden p-3">
        {tracks.map((value, index) => (
          <RadioGroup.Option value={index} key={`card-${index}`}>
            {({ checked }) => (
              <AudioPlayerProvider>
                <Card {...value} active={checked} askForPlaying={checked} />
              </AudioPlayerProvider>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default MusicList;
