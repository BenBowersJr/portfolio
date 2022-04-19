<script>
  import {fade} from 'svelte/transition'
</script>

<main in:fade={{ duration: 1000 }}>
  <h1>Projects</h1>
</main>

<style>
  main {
    width: 100%;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>