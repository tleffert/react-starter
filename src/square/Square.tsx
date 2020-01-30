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

    render() {
        return (
        <button className="square"
            onClick={() => this.setState({owner: 'X'})}
        >
            <span>{this.state.owner}</span>
        </button>
        );
    }
}
