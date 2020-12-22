import React from 'react'
import styles from './Player.module.css';
import { useDispatch, useSelector } from 'react-redux';
import rock from '../assets/images/rockhand.svg';
import paper from '../assets/images/paperhand.svg';
import scissor from '../assets/images/scissorhand.svg';
import { motion } from 'framer-motion';

const PICK = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSOR: 'scissor'
}

export const Player = () => {
  const playerPick = useSelector(state => state.game.playerPick);

  return (
    <div className="flex flex-col items-center">
      <div className="w-60">
       {playerPick === PICK.ROCK && <img src={rock} alt="user-hand"/>}
       {playerPick === PICK.PAPER && <img src={paper} alt="user-hand"/>}
       {playerPick === PICK.SCISSOR && <img src={scissor} alt="user-hand"/>}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          className={`${styles.playerOptions} ${playerPick === PICK.ROCK ? styles.active : ''}`}
          type="button">
          <img src={rock} alt="user-hand"/>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          className={`${styles.playerOptions} ${playerPick === PICK.PAPER ? styles.active : ''}`}
          type="button">
          <img src={paper} alt="user-hand"/>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          className={`${styles.playerOptions} ${playerPick === PICK.SCISSOR ? styles.active : ''}`}
          type="button">
          <img src={scissor} alt="user-hand"/>
        </motion.button>
      </div>
    </div>
  )
}
