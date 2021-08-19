import React, { useState } from 'react';
import times from 'lodash/times';
import { MAX_POS } from '../constant';
import { getInitialTileList } from '../util/tile';
import userMoveTile from '../hook/userMoveTile';

export default function Game() {
  const [tileLIst, setTileLIst] = useState(getInitialTileList);
  //up,down,lef,right

  userMoveTile(); //hook

  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, () => (
          <div className="grid-row">
            {times(MAX_POS, () => (
              <div className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>

      <div className="tile-container">
        {tileLIst.map((item) => (
          <div
            className={`tile tile-${item.value} tile-position-${item.x}-${item.y}`}
          >
            <div className="tile-inner">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
