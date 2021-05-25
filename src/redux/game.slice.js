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

const randomPick = picks => picks[Object.keys(picks)[Math.floor(Math.random() * Object.keys(picks).length)]];
const checkWin = (user, computer) => {
  let computer_score = 0,
      player_score = 0,
      winner = '';

  if (user === computer) {
    computer_score = 0;
    player_score = 0;
    winner = 'Tie game';
    return {
      computer_score,
      player_score,
      winner
    };
  }

  if (user === COMPUTER.PICK.ROCK) {
    if (computer === COMPUTER.PICK.SCISSOR) {
      player_score += 1;
      winner = 'You win!';
    } else if (computer_score === COMPUTER.PICK.PAPER) {
      computer_score += 1;
      winner = 'You lose!';
    }
  }
  if (user === COMPUTER.PICK.PAPER) {
    if (computer === COMPUTER.PICK.ROCK) {
      player_score += 1;
      winner = 'You win!';
    } else if (computer_score === COMPUTER.PICK.SCISSOR) {
      computer_score += 1;
      winner = 'You lose!';
    }
  }
  if (user === COMPUTER.PICK.SCISSOR) {
    if (computer === COMPUTER.PICK.PAPER) {
      player_score += 1;
      winner = 'You win!';
    } else if (computer_score === COMPUTER.PICK.ROCK) {
      computer_score += 1;
      winner = 'You lose!';
    }
  }
  return {
    computer_score,
    player_score,
    winner
  };
}

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    // expenses: [],
    playerScore: 0,
    computerScore: 0,
    winner: '',
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
      const randomComputerPick = randomPick(COMPUTER.PICK);
      const { computer_score, player_score, winner } = checkWin(picked, randomComputerPick);

      return {
        ...state,
        winner,
        playerPick: picked,
        computerPick: randomComputerPick,
        computerScore: state.computerScore + computer_score,
        playerScore: state.playerScore + player_score
      };
    }
  }
});

export const GameActions = gameSlice.actions;
export const GameReducer = gameSlice.reducer;
