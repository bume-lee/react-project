import { useEffect } from 'react';
import { addKeyObserver } from '../util/keyboard';

export default function userMoveTile() {
  useEffect(() => {
    addKeyObserver('up', () => {
      console.log('up');
      //   keyboardToString();
    });

    addKeyObserver('down', () => {
      console.log('down');
      //   keyboardToString();
    });

    addKeyObserver('left', () => {});
    addKeyObserver('right', () => {});
  });
}
