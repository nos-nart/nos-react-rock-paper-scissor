import React from 'react'
import thinking from '../assets/images/thinking.svg';
import { useSelector } from 'react-redux';

import rock from '../assets/images/rockhand.svg';
import paper from '../assets/images/paperhand.svg';
import scissor from '../assets/images/scissorhand.svg';

const PICK = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSOR: 'scissor'
}

export const Computer = () => {
  const {computerPick} = useSelector(state => state.game);

  return (
    <div className="flex flex-col items-center">
      <div className="w-60 h-60 flex justify-center">
        {computerPick && computerPick.length !== ''
          ? (
            <div class="flex flex-col items-center w-full">
              {computerPick === PICK.ROCK && <img src={rock} alt="rock-hand"/>}
              {computerPick === PICK.PAPER && <img src={paper} alt="paper-hand"/>}
              {computerPick === PICK.SCISSOR && <img src={scissor} alt="scissor-hand"/>}
              <p>Computer pick {computerPick}</p>
            </div>
          )
          : <div className="flex flex-col items-center">
              <img className="w-20 h-20" src={thinking} alt="thinking" />
              <p className="text-xs mt-6">super duper mega ultra intelligent!</p>
            </div>
        }
      </div>
    </div>
  )
}
