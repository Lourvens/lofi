import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { SoundProp } from "./soundData";
import { useSound } from "../../hook/use-sound";

const Card = ({ name, url: mp3Url, img }: SoundProp) => {
  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useState(50);

  const audio = useSound(mp3Url, {
    loop: true,
  });
  useEffect(() => {
    audio.setVolume(volume / 100);
  }, [volume]);
  useEffect(() => {
    if (isActive) {
      audio.play();
    } else {
      audio.stop();
    }
  }, [isActive]);

  return (
    <Switch checked={isActive} onChange={setIsActive} as="div">
      {({ checked }) => (
        <div
          className={`${
            checked ? "ring-2" : "ring-0"
          } relative bg-cyan-900 h-36 rounded overflow-hidden ring-yellow-400 cursor-pointer transition-all`}
        >
          {checked ? (
            <div className="z-10 flex items-center justify-center absolute bg-yellow-400 w-20 h-10 -right-6 -top-5 transform rotate-[30deg]">
              <div className="absolute bottom-2 left-11 w-2 h-2 bg-white rounded-full ring-[1px] ring-white ring-offset-2 ring-offset-yellow-400"></div>
            </div>
          ) : null}
          <div className="relative w-full h-full">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-center">
            <h3 className="text-center font-bold capitalize px-2 py-1 bg-purple-200 bg-opacity-60 rounded-full text-blue-700">
              {name}
            </h3>
          </div>

          {checked ? (
            <div
              onClick={(e) => {
                e.preventDefault();
              }}
              className="z-20 bottom-2 absolute w-full flex items-center justify-between px-1 text-lg"
            >
              <i className="ri-volume-down-fill"></i>
              <input
                type="range"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-2/3 accent-yellow-400 cursor-pointer"
              />
              <i className="ri-volume-up-fill"></i>
            </div>
          ) : null}
        </div>
      )}
    </Switch>
  );
};

export default Card;

type CardProp = {
  active: boolean;
};
