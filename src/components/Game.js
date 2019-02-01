import React from "react";
import { DisplayRow } from "./DisplayRow";

export default class Game extends React.Component {
  state = { grid: [] };

  componentDidMount() {
    this.newGrid();
  }

  newGrid() {
    let grid = [];
    for (let i = 0; i < 12; i++) {
      let row = [];
      for (let j = 0; j < 12; j++) {
        if (!j && !i) {
          row.push(this.createObj(true, [i, j]));
        } else {
          row.push(this.createObj(false, [i, j]));
        }
      }
      grid.push(row);
    }
    this.setState({ grid });
  }

  createObj(active, location) {
    let colors = ["blue", "red", "yellow", "green", "orange"];
    let color = colors[Math.floor(Math.random() * colors.length)];
    return { color, active, location, id: location.toString() };
  }

  render() {
    let DisplayGrid = this.state.grid.map(row => {
      return <DisplayRow tileRow={row} />;
    });
    return <div className="board">{DisplayGrid}</div>;
  }
}
