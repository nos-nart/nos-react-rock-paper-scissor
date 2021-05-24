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
    playerScore: 0,
    computerScore: 0,
    playerPick: '',
    computerPick: '',
    message: 'Hello folks!',
  },
  reducers: {
    startGame: (state, action) => {
      return {
        ...state,
        computerPick: COMPUTER.THINKING,
        started: true
      }
    },
    onPlayerPick: (state, action) => {
      const { picked } = action.payload;
      return { ...state, playerPick: picked };
    }
  }
});

export const GameActions = gameSlice.actions;
export const GameReducer = gameSlice.reducer;
