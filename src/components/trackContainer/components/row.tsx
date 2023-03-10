import React, { useContext, useState } from "react";
import { tracks } from "../trackListdata";
import { RadioGroup } from "@headlessui/react";
import Card from "./Card";
import { AudioPlayerProvider } from "react-use-audio-player";
import trackContext from "../soundPlayContext";

const Row = () => {
  const { activeTrack, updateActiveTrack, playNext } = useContext(trackContext);

  return (
    <>
      <RadioGroup value={activeTrack} onChange={updateActiveTrack}>
        <div className="flex gap-5 overflow-x-auto p-3 scrollbar">
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

      <button
        onClick={() => {
          playNext();
        }}
        className="flex items-center gap-2 px-4 py-3 my-3 bg-cyan-600 text-blue-100 rounded-lg hover:bg-opacity-90 focus:outline focus:outline-cyan-200"
      >
        <span>Play next</span>
        <i className="ri-play-circle-fill text-2xl"></i>
      </button>
    </>
  );
};

export default Row;
