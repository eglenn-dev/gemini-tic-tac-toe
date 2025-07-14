<script lang="ts">
  import { theme } from './theme';

  function toggleTheme() {
    theme.update(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  }
</script>

<button on:click={toggleTheme}>
  {$theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
</button>

<style lang="scss">
  button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 8px 12px;
    background-color: var(--button-bg);
    color: var(--button-text);
    border: 1px solid var(--border-color);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: var(--button-hover-bg);
    }
  }
</style>
