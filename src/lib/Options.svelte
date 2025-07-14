<script lang="ts">
  import { game } from './game';
  import type { GameMode, Difficulty } from './types';

  let gameMode: GameMode = 'PvP';
  let difficulty: Difficulty = 'Easy';

  function setGameMode(mode: GameMode) {
    gameMode = mode;
    game.setGameMode(mode);
  }

  function setDifficulty(level: Difficulty) {
    difficulty = level;
    game.setDifficulty(level);
  }
</script>

<div class="options">
  <div class="option-group">
    <h3>Game Mode</h3>
    <button class:active={gameMode === 'PvP'} on:click={() => setGameMode('PvP')}>Player vs Player</button>
    <button class:active={gameMode === 'PvC'} on:click={() => setGameMode('PvC')}>Player vs Computer</button>
  </div>

  {#if gameMode === 'PvC'}
    <div class="option-group">
      <h3>Difficulty</h3>
      <button class:active={difficulty === 'Easy'} on:click={() => setDifficulty('Easy')}>Easy</button>
      <button class:active={difficulty === 'Medium'} on:click={() => setDifficulty('Medium')}>Medium</button>
      <button class:active={difficulty === 'Hard'} on:click={() => setDifficulty('Hard')}>Hard</button>
    </div>
  {/if}
</div>

<style lang="scss">
  .options {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;

    .option-group {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        margin-bottom: 10px;
        color: var(--text-color);
      }

      button {
        background-color: var(--button-bg);
        color: var(--button-text);
        border: 1px solid var(--border-color);
        padding: 8px 16px;
        cursor: pointer;
        transition: background-color 0.2s, color 0.2s;

        &.active {
          background-color: #0074d9;
          color: white;
        }

        &:hover:not(.active) {
          background-color: var(--button-hover-bg);
        }
      }
    }
  }
</style>
