<script lang="ts">
  import { game } from './lib/game';
  import Board from './lib/Board.svelte';
  import GameStatus from './lib/GameStatus.svelte';
  import Options from './lib/Options.svelte';
  import ThemeToggle from './lib/ThemeToggle.svelte';
  import { theme } from './lib/theme';
  import './app.scss';
</script>

<main class={$theme}>
  <ThemeToggle />
  <div class="container">
    <h1>Svelte Tic-Tac-Toe</h1>
    <Options />
    <GameStatus />
    <div class="game-area">
      <Board board={$game.board} />
      <button on:click={game.resetGame}>Reset Game</button>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    min-height: 100vh;
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
    text-align: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .game-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    color: var(--text-color);
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #ff4136;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #e03126;
    }
  }
</style>
