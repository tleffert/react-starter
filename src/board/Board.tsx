import React, { Component } from 'react';

import { Square } from '../square/Square';

export class Board extends Component {

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square owner="'-'"/>
            <Square owner="'-'"/>
            <Square owner="'-'"/>
        </div>
        <div className="board-row">
            <Square owner="'-'"/>
            <Square owner="'-'"/>
            <Square owner="'-'"/>
        </div>
        <div className="board-row">
            <Square owner="'-'"/>
            <Square owner="'-'"/>
            <Square owner="'-'"/>
        </div>
      </div>
    );
  }
}
