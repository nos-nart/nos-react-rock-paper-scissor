import {
  createSlice
} from '@reduxjs/toolkit';

const COMPUTER = {
  THINKING: 'thinking',
  PICK: {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSOR: 'scissor'
  }
}

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    // expenses: [],
    score: 0,
    playerPick: 'rock',
    computerPick: '',
    started: false,
    message: 'Hello folks!',
  },
  reducers: {
    // example: (state, action) => {
    //   return {
    //     ...state,
    //     expenses: [...action.payload]
    //   };
    // },
    startGame: (state, action) => {
      return {
        ...state,
        computerPick: COMPUTER.THINKING
      }
    }
  }
});

export const GameActions = gameSlice.actions;
export const GameReducer = gameSlice.reducer;
