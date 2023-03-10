import { useEffect, useState } from "react";

type status = "play" | "pause" | "stop";
type audioActionType = {
  play: () => void;
  pause: () => void;
  stop: () => void;
  toggle: () => void;
  setVolume: (value: number) => void;
};
type OptionProp = {
  onEnded?: (action: audioActionType) => void;
  loop?: boolean;
};

export const useSound = (filePath: string, options?: OptionProp) => {
  const [audio, setAudio] = useState(new Audio(filePath));
  const [status, setStatus] = useState<status>("stop");

  audio.addEventListener("ended", () => {
    setStatus("stop");
    if (options && options.onEnded) options.onEnded(audioAction);
    if (options && options.loop) audioAction.play();
  });

  useEffect(() => {
    return () => {
      if (status == "play") audioAction.stop();
    };
  }, []);

  const audioAction: audioActionType = {
    play: function () {
      audio.play().then(() => {
        setStatus("play");
      });
    },
    stop: function () {
      audio.currentTime = 0;
      audio.pause();
      setStatus("stop");
    },
    pause: function () {
      console.log("pause");
      console.log(audio);
      audio.pause();
      setStatus("pause");
    },
    toggle: function () {
      if (status == "play") {
        this.pause();
      } else {
        this.play();
      }
    },
    setVolume: function (value) {
      audio.volume = value;
    },
  };
  return {
    status,
    ...audioAction,
  };
};
