
import type { Board, Player } from './types';

export function computerMove(board: Board, difficulty: 'Easy' | 'Medium' | 'Hard'): number {
  switch (difficulty) {
    case 'Easy':
      return easyMove(board);
    case 'Medium':
      return mediumMove(board);
    case 'Hard':
      return hardMove(board);
  }
}

function easyMove(board: Board): number {
  let move;
  do {
    move = Math.floor(Math.random() * 9);
  } while (board[move]);
  return move;
}

function mediumMove(board: Board): number {
  // Medium AI: Win if possible, otherwise block, otherwise random
  const winningMove = findWinningMove(board, 'O');
  if (winningMove !== null) return winningMove;

  const blockingMove = findWinningMove(board, 'X');
  if (blockingMove !== null) return blockingMove;

  return easyMove(board);
}

function hardMove(board: Board): number {
    // Hard AI: Minimax algorithm
    const bestMove = minimax(board, 'O').index;
    return bestMove;
}

function findWinningMove(board: Board, player: Player): number | null {
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const newBoard = [...board];
      newBoard[i] = player;
      if (checkWinner(newBoard) === player) {
        return i;
      }
    }
  }
  return null;
}

function minimax(newBoard: Board, player: Player): { score: number; index: number } {
    const availSpots = newBoard.map((val, idx) => val === null ? idx : null).filter(val => val !== null);

    if (checkWinner(newBoard) === 'X') {
        return { score: -10, index: -1 };
    } else if (checkWinner(newBoard) === 'O') {
        return { score: 10, index: -1 };
    } else if (availSpots.length === 0) {
        return { score: 0, index: -1 };
    }

    const moves: { score: number; index: number }[] = [];
    for (let i = 0; i < availSpots.length; i++) {
        const move: { score: number; index: number } = { score: 0, index: -1 };
        move.index = availSpots[i] as number;
        newBoard[availSpots[i] as number] = player;

        if (player === 'O') {
            const result = minimax(newBoard, 'X');
            move.score = result.score;
        } else {
            const result = minimax(newBoard, 'O');
            move.score = result.score;
        }

        newBoard[availSpots[i] as number] = null;
        moves.push(move);
    }

    let bestMove = 0;
    if (player === 'O') {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
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
