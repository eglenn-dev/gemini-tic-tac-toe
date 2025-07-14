<script lang="ts">
  import { game } from './game';
  import Cell from './Cell.svelte';
  import type { Board } from './types';

  export let board: Board;
</script>

<div class="board">
  {#each board as value, i}
    <Cell {value} onClick={() => game.makeMove(i)} />
  {/each}
</div>

<style lang="scss">
  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    width: 300px;
    height: 300px;
    margin: 20px auto;

    @media (max-width: 400px) {
      width: 90vw;
      height: 90vw;
    }
  }
</style>
