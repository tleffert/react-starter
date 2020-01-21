import React, { Component } from 'react';

import './Square.scss';

export interface SquareProps {
    owner: string;
}

// Declaring a Square component with an interface and an intended state structure
export class Square extends Component<SquareProps, SquareProps> {

    constructor(props: SquareProps) {
        super(props);
        this.state = {...props};
    }

    handleClick = () => {
        console.log("I got clicked", this.state.owner);
    }

  render() {
    return (
      <button className="square"
        onClick={this.handleClick}
      >
      I'm a button
      </button>
    );
  }
}
