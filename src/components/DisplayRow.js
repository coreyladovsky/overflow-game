import React from "react";
import { Tile } from "./Tile";

export const DisplayRow = ({ tileRow }) => {
  let showRow = tileRow.map(tile => {
    return <Tile tile={tile} key={tile.id} />;
  });
  return <div>{showRow}</div>;
};
