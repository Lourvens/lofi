import React from "react";

export type TypeMode = "list" | "loop" | "random";

type trackProp = {
  activeTrack: number;
  playMode: TypeMode;
  updateMode: (value: TypeMode) => void;
  updateTrack: (value: number) => void;
};

const initialState: trackProp = {
  activeTrack: 0,
  playMode: "list",
  updateMode() {},
  updateTrack() {},
};

const trackContext = React.createContext<trackProp>(initialState);

export const TrackProvier = trackContext.Provider;
export default trackContext;
