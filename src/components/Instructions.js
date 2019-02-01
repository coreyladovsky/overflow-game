import React from 'react';
import '../css/Instructions.css';
export const Instructions = ({show}) => {
  if(!show) return null
  return(
    <div className="instructions">
      Every game begins with an upperleft active square. Clicking on
      any of the other squares will change the color or your active square to that color and all surrounding squares of that color will also become active.
      Try to change all the squares to one color in the least amount of clicks.
      Good luck!
    </div>
  )
}
