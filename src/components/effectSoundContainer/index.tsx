import React from "react";
import Badge from "../Badge";
import Card from "./card";
import { sounds } from "./soundData";

const EffectSoundContainer = () => {
  return (
    <div className="my-10">
      <Badge title="effect" classNameIcon="ri-bubble-chart-line" />
      <div className="mt-2 p-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {sounds.map((value) => (
          <Card key={value.name} {...value} />
        ))}
      </div>
    </div>
  );
};

export default EffectSoundContainer;
