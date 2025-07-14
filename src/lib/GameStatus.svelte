<script lang="ts">
  import { game } from './game';
  import type { GameState } from './types';

  let gameState: GameState;
  game.subscribe(value => {
    gameState = value;
  });
</script>

<div class="status">
  {#if gameState.winner}
    {#if gameState.winner === 'draw'}
      <h2>It's a draw!</h2>
    {:else}
      <h2>Player {gameState.winner} wins!</h2>
    {/if}
  {:else}
    <h2>Current Player: {gameState.currentPlayer}</h2>
  {/if}
</div>

<style lang="scss">
  .status {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
</style>
