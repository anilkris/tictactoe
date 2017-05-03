import React, { Component }  from 'react';
import Square from './Square.js';

class Board extends Component {
    renderSquare(i) {
        return <Square />

        }
    render() {
        const status ='Next player : X';
        return (
            <div>
                <div className="status">
                {status}
                </div>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
              <div className="board-row">
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}
                </div>
 
            </div>



        );
    }

}

export default Board;
