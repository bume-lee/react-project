import React from 'react';
import AboveGame from './component/AboveGame';
import Game from './component/Game';
import Headers from './component/Header';

export default function App() {
  return (
    <div className="container">
      <Headers />
      <AboveGame />
      <Game />
    </div>
  );
}
