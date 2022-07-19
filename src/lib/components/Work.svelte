<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function back() {
    dispatch('back')
  }
</script>

<main>
  <button on:click="{back}">Back</button>
  <h1>Testing</h1>
</main>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>