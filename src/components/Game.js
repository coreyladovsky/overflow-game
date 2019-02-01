import React from "react";
import { DisplayRow } from "./DisplayRow";

export default class Game extends React.Component {
  state = {
    grid: [],
    count: 0
  };

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
    this.setState(
      { grid, activeColor: grid[0][0].color },
      this.activateAllConnected,
      this.updateActiveColors
    );
  }

  createObj(active, location) {
    let colors = ["blue", "red", "yellow", "green", "orange"];
    let color = colors[Math.floor(Math.random() * colors.length)];
    return { color, active, location, id: location.toString() };
  }

  updateActiveColors() {
    let copyBoard = [...this.state.grid.map(row => [...row])];
    let grid = copyBoard.map((row, i) => {
      return row.map((tile, j) => {
        if (tile.active) {
          tile.color = this.state.activeColor;
        }
        return tile;
      });
    });
    this.setState({ grid });
  }

  activateAllConnected() {
    let copyBoard = [...this.state.grid.map(row => [...row])];
    let grid = copyBoard.map((row, i) => {
      return row.map((tile, j) => {
        if (this.checkNeighbors([i, j], copyBoard)) {
          tile.active = true;
        }
        return tile;
      });
    });
    this.setState({ grid });
  }

  checkNeighbors(pos, board) {
    let [first, last] = pos;
    if (last > 0) {
      let temp = board[first][last - 1];
      if (
        temp.active &&
        this.state.activeColor === board[first][last].color
      ) {
        return true;
      }
    }
    if (last < 11) {
      let temp = board[first][last + 1];
      if (
        temp.active &&
        this.state.activeColor === board[first][last].color
      ) {
        return true;
      }
    }
    if (first > 0) {
      let temp = board[first - 1][last];
      if (
        temp.active &&
        this.state.activeColor === board[first][last].color
      ) {
        return true;
      }
    }
    if (first < 11) {
      let temp = board[first + 1][last];
      if (
        temp.active &&
        this.state.activeColor === board[first][last].color
      ) {
        return true;
      }
    }
    return false;
  }

  handleClick = e => {
    let pos = e.target.id.split(",").map(num => +num);
  };

  render() {
    console.log(this.state);
    let DisplayGrid = this.state.grid.map((row, i) => {
      return <DisplayRow tileRow={row} key={i} />;
    });
    return (
      <div className="board" onClick={this.handleClick.bind(this)}>
        {DisplayGrid}
      </div>
    );
  }
}
