import React from 'react';
import { Player, Computer, Score, ButtonOutline } from './components';

function App() {
  return (
    <div className="font-gloria w-screen h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-red-200">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold mt-12 text-gray-500">Rock-paper-scissor</span>
        <Score />
        <div className="flex justify-between w-40rem">
          <div className="flex items-center">
            <Player/>
          </div>
          <span className="self-center">vs</span>
          <div className="flex items-center">
            <Computer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
