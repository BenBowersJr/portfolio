<script>
  import mdl from '$lib/assets/mdl.png'
  import mwp from '$lib/assets/MWP.png'
  import fridge from '$lib/assets/refridge.png'
  import vid from '$lib/assets/tysonmms.mp4'
  import { fade, fly } from 'svelte/transition'


  /*
  ! SWITCH TO VIDEO
  */



  let activeImg = 0
  let imgs = [mdl, mwp, fridge]

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
  
  
  {#if vid}
  <video src="{vid}" width="500" autoplay loop>Video not Loaded</video>
  {:else}
  <button on:click="{back}">Back</button>
    {#if activeImg == 0}
      <img rel="preload" in:fly|local="{{ duration: 500, x: -250 }}" out:fly|local="{{ duration: 500, x: 250 }}" src="{mdl}" alt="">
    {:else if activeImg == 1}
      <img rel="preload" in:fly|local="{{ duration: 500, x: -250 }}" out:fly|local="{{ duration: 500, x: 250 }}" src="{mwp}" alt="">
    {:else if activeImg == 2}
      <img rel="preload" in:fly|local="{{ duration: 500, x: -250 }}" out:fly|local="{{ duration: 500, x: 250 }}" src="{fridge}" alt="">
    {/if}
    <button id="buttonR" on:click="{next}">Next</button>
  {/if}




</main>

<style>

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  img, video {
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