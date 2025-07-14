
export type Player = 'X' | 'O';
export type Board = (Player | null)[];
export type GameMode = 'PvP' | 'PvC';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface GameState {
  board: Board;
  currentPlayer: Player;
  gameMode: GameMode;
  difficulty: Difficulty;
  winner: Player | 'draw' | null;
  gameOver: boolean;
}
