<script>
  import {fade} from 'svelte/transition'
</script>

<main in:fade={{ duration: 1000 }}>
  <h1>Contact Me</h1>
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
  }
</style>