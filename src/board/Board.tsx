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

export interface BoardProps {
    // Length of edges to create square board
    edgeLength: number;
}

// NOTE <Props, State>
export class Board extends Component<BoardProps, BoardState> {

    constructor(props: BoardProps) {
        super(props);
        this.state = {
            squares: new Array<string>(props.edgeLength * props.edgeLength).fill(null),
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

    renderSquare(id: number) {
        return (
            <Square
                owner={this.state.squares[id]}
                onClick={() => this.assignSquare(id)}
            />
        );
    }

    /**
     * Returns a row of square elements numSquares long
     * @param  {number} numSquares    Length of the row to render
     * @param  {number} posMultiplier Helper to determine the position identifier for the square
     * @return {[type]}               Row elements to be rendered
     */
    renderRow(numSquares: number, posMultiplier: number) {
        let row = [];
        for(let i = 0; i < numSquares; i++) {
            row.push(
                this.renderSquare(i + (posMultiplier * this.props.edgeLength))
            );
        }
        return row;
    }

  render() {
    // Being a little lazy so I can just map values
    let rowHelper = new Array<any>(this.props.edgeLength).fill(null);
    let boardRows = rowHelper.map((_, index) => {
        return (
            <div className="board-row">
                {this.renderRow(this.props.edgeLength, index)}
            </div>
        );
    });

    return (
        <div>
            <div className="status">{this.state.activePlayer}'s turn!</div>
            <div className="board">
                {boardRows}
            </div>
        </div>
    );
  }
}
