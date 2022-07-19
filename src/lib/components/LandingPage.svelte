<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function work() {
    dispatch('work', {
      text: 'text'
    })
  }
  function contact() {
    dispatch('contact', {
      text: 'text'
    })
  }
</script>

<main>
  <h1>Benjamin Bowers</h1>
  <small>Software Engineer & Video Game Enthusiast</small>

  <div class="buttons">
    <button on:click="{work}">Projects / Work</button>
    <button on:click="{contact}">Contact</button>
  </div>
</main>

<style>

  h1 {
    font-family: 'Barcelony';
    color: whitesmoke;
    font-size: 6em;
  }

  main {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none
  }
  /* main {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg, #7a0045, #16007a, #160024, #2b0344, #16007a, #7a0045);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  } */

  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }

  small {
    font-family: Arial, Helvetica, sans-serif;
    color:  white;
  }

  button {
    position: relative;
    top: 30px;
    left: -20px;
    padding: 10px 25px;
    background: none;
    animation: gradient 15s ease infinite;
    border: #000 2px solid;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    width: 150px;
  }

  .buttons {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

</style>