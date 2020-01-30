import React, { Component } from 'react';

import { Square } from '../square/Square';

export interface BoardState {
    squares: Array<string>;
}

// <Props, State>
export class Board extends Component<{}, BoardState> {

    constructor(props: BoardState) {
        super(props);
        this.state = {
            squares: new Array<string>(9).fill(null)
        }
    }

    assignSquare(pos: number) {
        const squares = this.state.squares.slice();
        squares[pos] = 'X';
        this.setState({squares: squares});
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
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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
