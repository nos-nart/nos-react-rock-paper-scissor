import React from 'react'
import thinking from '../assets/images/thinking.svg';
import { useDispatch, useSelector } from 'react-redux';

export const Computer = () => {
  const started = useSelector(state => state.game.started);

  return (
    <div className="flex flex-col items-center">
      <div>
        <img className="w-20 h-20" src={thinking} alt="thinking" />
      </div>
      <div className="mt-6">
        {!started ? <p className="text-xs">super duper mega ultra intelligent!</p> : <p>Thinking...</p>}
      </div>
    </div>
  )
}
