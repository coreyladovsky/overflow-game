import React from 'react';
import '../css/Title.css';
export const Title = ({tile}) => {
  return(
    <div className={"tile " + tile.color}>
    </div>
  )
}
