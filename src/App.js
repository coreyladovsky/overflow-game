import React, { Component } from 'react';
import Game from './components/Game';
import { Instructions } from './components/Instructions';
import './App.css';

class App extends Component {
  state = {
    showInstructions: false
  }

  toggleInstructions = () => {
    this.setState({showInstructions: !this.state.showInstructions})
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">OVERFLOW!</h1>
        <div className="main">
        <div>
        <button className="button-toggle" onClick={this.toggleInstructions}>{!this.state.showInstructions ? "Click To See Instructions" : "Hide Instructions"}</button>
        <Instructions show={this.state.showInstructions}/>
        </div>
        <Game />
        </div>
      </div>
    );
  }
}

export default App;
