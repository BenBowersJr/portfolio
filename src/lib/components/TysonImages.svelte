<script>
  import mdl from '$lib/assets/mdl.png'
  import mwp from '$lib/assets/MWP.png'
  import fridge from '$lib/assets/refridge.png'
  import gif from '$lib/assets/tyson-mms.gif'
  import { fade, fly } from 'svelte/transition'

  let activeImg = 0
  let imgs = [mdl, mwp, fridge, gif]

  function next() {
    let old = activeImg
    activeImg = 999
    setTimeout(() => {
      activeImg = old + 1
      if (activeImg == imgs.length) {
        activeImg = 0
      }
    }, 490);
  }

  function back() {
    let old = activeImg
    activeImg = 999
    setTimeout(() => {
      activeImg = old - 1
      if (activeImg <= 0) {
        console.log("length" + imgs.length)
        activeImg = imgs.length-1
      }
    }, 490);
  }
</script>

<main>
  <button on:click="{back}">Back</button>

  {#if activeImg == 0}
    <img in:fly|local="{{ duration: 500, x: -250 }}" out:fly|local="{{ duration: 500, x: 250 }}" src="{gif}" alt="">
  {:else if activeImg == 1}
    <img in:fly|local="{{ duration: 500, x: -250 }}" out:fly|local="{{ duration: 500, x: 250 }}" src="{mwp}" alt="">
  {:else if activeImg == 2}
    <img in:fly|local="{{ duration: 500, x: -250 }}" out:fly|local="{{ duration: 500, x: 250 }}" src="{fridge}" alt="">
  {:else if activeImg == 3}
    <img in:fly|local="{{ duration: 500, x: -250 }}" out:fly|local="{{ duration: 500, x: 250 }}" src="{mdl}" alt="">
  {/if}

  <button id="buttonR" on:click="{next}">Next</button>
</main>

<style>

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  img {
    width: 100%;
    max-width: 1200px;
    margin: 0 20px;
  }

  button {
    padding: 5px;
    margin: 10px;
    background: none;
    animation: gradient 15s ease infinite;
    border: #ffffff 2px solid;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    width: 75px;
    font-weight: bold;
    font-size: larger;
  }

  
</style>