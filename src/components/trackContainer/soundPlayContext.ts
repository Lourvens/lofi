import React from "react";

export type TypeMode = "list" | "loop" | "random";

export type trackProp = {
  activeTrack: number;
  playMode: TypeMode;
  amountTracks: number;
  updateMode: (value: TypeMode) => void;
  playNext: () => void;
  updateActiveTrack: (value: number) => void;
};

const initialState: trackProp = {
  activeTrack: 0,
  playMode: "list",
  amountTracks: 0,
  updateMode() {},
  playNext() {},
  updateActiveTrack() {},
};

const trackContext = React.createContext<trackProp>(initialState);

export const TrackProvier = trackContext.Provider;
export default trackContext;
