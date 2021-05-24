import React from 'react'
import styles from './Player.module.css';
import { useDispatch, useSelector } from 'react-redux';
import rock from '../assets/images/rockhand.svg';
import paper from '../assets/images/paperhand.svg';
import scissor from '../assets/images/scissorhand.svg';
import ghost from '../assets/images/giphy.gif';
import { motion } from 'framer-motion';
import { useInterval } from '../hooks/useInterval'; 
import { GameActions } from '../redux/game.slice';

const PICK = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSOR: 'scissor'
}

const OPTIONS = [
  {
    image: rock,
    name: PICK.ROCK,
    alt: 'rock-hand'
  },
  {
    image: paper,
    name: PICK.PAPER,
    alt: 'paper-hand',
  },
  {
    image: scissor,
    name: PICK.SCISSOR,
    alt: 'scissor-hand'
  }
]

export const Player = () => {
  const dispatch = useDispatch();
  const {playerPick} = useSelector(state => state.game);

  const handleUserPick = (item) => {
    dispatch(GameActions.onPlayerPick({ picked: item.name }));
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-60 h-60 flex justify-center">
        {playerPick === '' && <img class="w-40 h-40" src={ghost} alt="empty" /> }
        {playerPick === PICK.ROCK && <img src={rock} alt="rock-hand"/>}
        {playerPick === PICK.PAPER && <img src={paper} alt="paper-hand"/>}
        {playerPick === PICK.SCISSOR && <img src={scissor} alt="scissor-hand"/>}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {OPTIONS.map((o, index) => (
          <motion.button
            key={index}
            whileHover={{
              scale: 1.1,
            }}
            className={`${styles.playerOptions} ${playerPick === o.name ? styles.active : ''}`}
            onClick={() => handleUserPick(o)}
            type="button">
            <img src={o.image} alt={o.alt} />
          </motion.button>
        ))}
      </div>
    </div>
  )
}
