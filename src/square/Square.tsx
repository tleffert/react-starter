import React, { Component } from 'react';

import './Square.scss';

export interface SquareProps {
    owner: string;
    onClick: any;
    disabled: boolean;
}

// Declaring a Square component with an interface and an intended state structure
export class Square extends Component<SquareProps> {

    constructor(props: SquareProps) {
        super(props);
    }

    render() {
        return (
            <button className="square"
                // Prevents the square to be chose if already selected
                disabled={this.props.owner !== null || this.props.disabled}
                onClick={() => { this.props.onClick()}}
            >
                <span className="assigned-player">{this.props.owner}</span>
            </button>
        );
    }
}
