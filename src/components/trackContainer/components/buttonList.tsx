import React, { useEffect, useState, SetStateAction, useContext } from "react";
import { RadioGroup } from "@headlessui/react";
import trackContext, { TypeMode } from "../soundPlayContext";

const ButtonList = () => {
  const loopMode = [
    { name: "list", iconClassName: "ri-play-list-line" },
    { name: "random", iconClassName: "ri-shuffle-line" },
    { name: "loop", iconClassName: "ri-refresh-line" },
  ];

  const { playMode, updateMode } = useContext(trackContext);

  return (
    <RadioGroup
      value={playMode}
      onChange={updateMode}
      className="flex items-center gap-2"
    >
      <RadioGroup.Label className="text-cyan-400 font-semibold">
        Play mode
      </RadioGroup.Label>
      {loopMode.map(({ name, iconClassName }) => (
        <RadioGroup.Option value={name} as="button" key={name}>
          {({ checked }) => (
            <div
              className={`${
                checked
                  ? "text-cyan-500 bg-cyan-500 bg-opacity-10"
                  : "hover:bg-white hover:bg-opacity-10"
              }
               flex items-center gap-2 justify-center w-8 h-8 lg:w-auto lg:px-4 rounded-full transition duration-300`}
            >
              <i className={iconClassName}></i>
              <span className="hidden capitalize lg:block">{name}</span>
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default ButtonList;
