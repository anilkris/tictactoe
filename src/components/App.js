import React, { Component } from 'react';
import Game  from './Game.js';

class App extends Component {
  render() {
    return (
        <div className="App">

            <h1>            tic- tac- toe </h1>
            <Game />
      </div>
    );
  }
}

export default App;
