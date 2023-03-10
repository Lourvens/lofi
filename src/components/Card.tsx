import React, { useEffect, useState } from "react";
import { trackType } from "./trackContainer/trackListdata";
import { useSound } from "../hook/use-sound";

interface CardProp extends trackType {
  active: boolean;
  askForPlaying: boolean;
}

const Card = ({
  title,
  bg,
  active,
  soundURl: url,
  askForPlaying,
}: CardProp) => {
  const audio = useSound(url);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (!active && audio.status == "play") {
      audio.stop();
    }
    if (!active) setShowButton(false);
  }, [active]);

  return (
    <div
      onClick={() => {
        audio.toggle();
        setShowButton(false);
      }}
      className={`${
        active ? "ring-cyan-500" : "scale-95 ring-transparent"
      } ring-4 relative cursor-pointer shrink-0 bg-white w-[220px] h-[200px] rounded-lg overflow-hidden transform transition-all duration-300`}
    >
      <img src={bg} alt="" className="w-full h-full object-cover" />
      {showButton ? (
        <button className="absolute flex items-center justify-center text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white bg-opacity-30 rounded-full">
          {askForPlaying ? <i className="ri-play-fill"></i> : null}
        </button>
      ) : null}
      <div className="absolute bg-primary-900 bg-opacity-30 w-full bottom-0 px-4 py-2">
        <h1 className="font-bold text-lg capitalize">{title}</h1>
      </div>
    </div>
  );
};

export default Card;
