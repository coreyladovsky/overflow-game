import React from "react";
import { Tile } from "./Tile";
import '../css/DisplayRow.css';

export const DisplayRow = ({ tileRow }) => {
  let showRow = tileRow.map(tile => {
    return <Tile tile={tile} key={tile.id} />;
  });
  return <div className="row">{showRow}</div>;
};
