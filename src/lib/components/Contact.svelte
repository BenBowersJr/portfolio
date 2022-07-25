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

  button {
    position: relative;
    top: 30px;
    left: -20px;
    padding: 10px 25px;
    background: none;
    animation: gradient 15s ease infinite;
    border: #ffffff 2px solid;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    width: 150px;
  }
</style>