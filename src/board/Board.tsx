import React, { Component } from 'react';

import { Square } from '../square/Square';

export interface BoardState {
    // Array holding state of the selected boxes
    squares: Array<string>;
    // Current turn number
    turnNumber: number;
    // Current active player taking thier turn
    activePlayer: string;
    winner: string;

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
            activePlayer: 'X',
            winner: null
        }
    }

    // Assigns the select square to the current active player
    // and advances the turn state with updated active player
    private assignSquare(pos: number) {
        const squares = this.state.squares.slice();
        squares[pos] = this.state.activePlayer;
        let currentActive = this.state.activePlayer;

        // Set new state then checkfor a player win
        this.setState({
            squares: squares,
            turnNumber: this.state.turnNumber+1,
            activePlayer: this.state.turnNumber % 2 !== 0 ? 'X' : 'O'
        }, () => {
            let hasWinner = this.checkForPlayerWin(currentActive);
            if(hasWinner) {
                this.setState({
                    winner: currentActive
                })
            }
        });
    }

    private checkForPlayerWin(player: string): boolean {
        // TODO Check  both diagonal
        for(let i = 0; i < this.props.edgeLength; i++) {
            if(this.checkColWin(i, player)) {
                return true;
            }

            if(this.checkRowWin(i, player)) {
                return true;
            }

        }
    }

    /**
     * Checks the provided row for a win
     * @type {boolean}
     */
    private checkRowWin(row: number, player: string): boolean {
        let score = 0;
        for(let i = 0; i < this.props.edgeLength; i++) {
            score += this.checkSquareMatches(i + (row * this.props.edgeLength), player);
        }
        // TODO make score to win dynamic
        return score === 3;
    }

    /**
     * Checks the provided col for a win
     * @type {boolean}
     */
    private checkColWin(col: number, player: string): boolean {
        let score = 0;
        for(let i = 0; i < this.props.edgeLength; i++) {
            score += this.checkSquareMatches(col + (i * this.props.edgeLength), player);
        }
        // TODO make score to win dynamic
        return score === 3;
    }

    private checkSquareMatches(pos: number, owner: string) {
        return owner === this.state.squares[pos] ? 1 : 0;
    }

    /**
     * Returns <Square> element to be rendered with associated id
     * @param  {number} id id to associate with the square
     * @return {[type]}    Square element to be rendered
     */
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
                // posMultiplier * edgeLength will give you what row number to start at
                // + i will give you the column of the square (when thinking in 2d array)
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
            {
                this.state.winner ? (<div className="winner">{this.state.winner} IS WIN!</div>) : null
            }
            <div className="status">{this.state.activePlayer}'s turn!</div>
            <div className="board">
                {boardRows}
            </div>
        </div>
    );
  }
}
