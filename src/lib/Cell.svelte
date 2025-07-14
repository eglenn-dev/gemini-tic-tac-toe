<script lang="ts">
  export let value: 'X' | 'O' | null = null;
  export let onClick: () => void;
</script>

<button class="cell" on:click={onClick}>
  {#if value}
    <span class="marker marker-{value.toLowerCase()}">{value}</span>
  {/if}
</button>

<style lang="scss">
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--button-bg);
    border: 2px solid var(--border-color);
    cursor: pointer;
    font-size: 3rem;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--button-hover-bg);
    }
  }

  .marker {
    &.marker-x {
      color: #ff4136;
    }
    &.marker-o {
      color: #0074d9;
    }
  }
</style>
