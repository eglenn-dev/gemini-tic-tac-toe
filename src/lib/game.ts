
import { writable } from 'svelte/store';
import type { GameState, Player, Board, GameMode, Difficulty } from './types';
import { computerMove } from './computerPlayer';

const initialState: GameState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  gameMode: 'PvP',
  difficulty: 'Easy',
  winner: null,
  gameOver: false,
};

function createGame() {
  const { subscribe, set, update } = writable<GameState>(initialState);

  const makeMove = (index: number) => {
    update(state => {
      // Ignore clicks if the game is over, the cell is already taken,
      // or if it's the computer's turn in PvC mode.
      if (state.gameOver || state.board[index] || (state.gameMode === 'PvC' && state.currentPlayer === 'O')) {
        return state;
      }

      // Player's move
      const boardAfterPlayerMove = [...state.board];
      boardAfterPlayerMove[index] = state.currentPlayer;

      let winner = checkWinner(boardAfterPlayerMove);
      let gameOver = winner !== null || !boardAfterPlayerMove.includes(null);

      if (gameOver) {
        return { ...state, board: boardAfterPlayerMove, winner, gameOver };
      }

      // If PvP, switch to the other player
      if (state.gameMode === 'PvP') {
        return {
          ...state,
          board: boardAfterPlayerMove,
          currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
        };
      }

      // If PvC, it's the computer's turn.
      // The computer move is calculated and applied in the same update for atomic state changes.
      const computerMoveIndex = computerMove(boardAfterPlayerMove, state.difficulty);
      const boardAfterComputerMove = [...boardAfterPlayerMove];
      boardAfterComputerMove[computerMoveIndex] = 'O';

      winner = checkWinner(boardAfterComputerMove);
      gameOver = winner !== null || !boardAfterComputerMove.includes(null);

      return {
        ...state,
        board: boardAfterComputerMove,
        currentPlayer: 'X', // After computer moves, it's always the human's turn
        winner,
        gameOver,
      };
    });
  };

  const resetGame = () => {
    update(state => {
        return {
            ...initialState,
            // Keep the selected game mode and difficulty
            gameMode: state.gameMode,
            difficulty: state.difficulty,
        }
    });
  };

  const setGameMode = (mode: GameMode) => {
    update(state => ({ ...state, gameMode: mode }));
    resetGame();
  };

  const setDifficulty = (difficulty: Difficulty) => {
    update(state => ({ ...state, difficulty }));
    resetGame();
  };

  return {
    subscribe,
    makeMove,
    resetGame,
    setGameMode,
    setDifficulty,
  };
}

function checkWinner(board: Board): Player | 'draw' | null {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    if (board.every(cell => cell !== null)) {
        return 'draw';
    }

    return null;
}


export const game = createGame();
