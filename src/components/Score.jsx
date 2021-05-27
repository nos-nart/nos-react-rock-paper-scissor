import React from 'react';
import { useSelector } from 'react-redux';

export const Score = () => {
  const { computerScore, playerScore, winner } = useSelector(state => state.game);

  return (
    <div className="my-20 flex flex-col items-start">
      <span>You: {playerScore}</span>
      <span>Computer: {computerScore}</span>
      <p className="text-center mt-4 text-xl">{ winner }</p>
    </div>
  )
}
