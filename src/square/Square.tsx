import React, { Component } from 'react';

import './Square.scss';

export interface SquareProps {
    owner: string;
    onClick: any;
}

// Declaring a Square component with an interface and an intended state structure
export class Square extends Component<SquareProps> {

    constructor(props: SquareProps) {
        super(props);
    }

    render() {
        return (
            <button className="square"
                onClick={() => { this.props.onClick()}}
            >
                <span>{this.props.owner}</span>
            </button>
        );
    }
}
