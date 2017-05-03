import React, { Component } from 'react';
import Board from './Board.js';

class Game extends Component {
    render() {
        return (
            <div>
            <div className ="game">
                <Board />
            </div>
            <div className ="game-info">
                <div> {/* */} </div>
            </div>
            </div>
        );
    }
    
}
export default Game;
