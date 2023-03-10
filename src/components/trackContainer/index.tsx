import React from "react";
import Badge from "../Badge";
import ButtonList from "./components/buttonList";
import Row from "./components/row";
import SoundPlayProviderWrapper from "./soundPlayWrapper";

const TrackContainer = () => {
  return (
    <SoundPlayProviderWrapper>
      <div>
        <div className="flex justify-between items-center mb-10">
          <Badge title="sound" classNameIcon="ri-disc-line" />
          <div>
            <ButtonList />
          </div>
        </div>
        <Row />
      </div>
    </SoundPlayProviderWrapper>
  );
};

export default TrackContainer;
