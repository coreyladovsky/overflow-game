import React from 'react';
import '../css/Tile.css';
export const Tile = ({tile}) => {
  return(
    <div className={"tile " + tile.color} id={tile.id}>
    </div>
  )
}
