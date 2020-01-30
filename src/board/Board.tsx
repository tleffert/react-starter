import React, { Component } from 'react';

import { Square } from '../square/Square';

export interface BoardState {
    // Array holding state of the selected boxes
    squares: Array<string>;
    // Current turn number
    turnNumber: number;
    // Current active player taking thier turn
    activePlayer: string;
}

// NOTE <Props, State>
export class Board extends Component<{}, BoardState> {

    constructor(props: BoardState) {
        super(props);
        this.state = {
            squares: new Array<string>(9).fill(null),
            turnNumber: 0,
            activePlayer: 'X'
        }
    }

    // Assigns the select square to the current active player
    // and advances the turn state with updated active player
    assignSquare(pos: number) {
        const squares = this.state.squares.slice();
        squares[pos] = this.state.activePlayer;

        this.setState({
            squares: squares,
            turnNumber: this.state.turnNumber+1,
            activePlayer: this.state.turnNumber % 2 !== 0 ? 'X' : 'O'
        });
    }

    renderSquare(pos: number) {
        return (
            <Square
                owner={this.state.squares[pos]}
                onClick={() => this.assignSquare(pos)}
            />
        );
    }

  render() {
    return (
      <div>
        <div className="status">{this.state.activePlayer}'s turn!</div>
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
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
