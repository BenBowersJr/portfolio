<script>
  import { createEventDispatcher } from 'svelte';
  import { browser, dev, prerendering } from '$app/env';
  import { draw } from "svelte/transition";
  import Name from "$lib/components/name.svelte";
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

  

  /**
  * @type {HTMLElement | null}
  */
  let text
  let txtList = ['Guitar Player', 'Video Game Enthusiast', 'Skateboarder', 'Web Developer', 'Professional Idiot']
  
  var i = 0, speed = 75, currentText = 0;
  async function typeWriter() {
    if (text == null) {
      return
    }
    if (i < txtList[currentText].length) {
      text.innerHTML += txtList[currentText].charAt(i);
      i++;
      setTimeout(typeWriter, speed);

      if (i == txtList[currentText].length) {
        // await 1 sec promise
        await new Promise(resolve => setTimeout(resolve, 1000));
        let test = await deleteText()
        if (test == undefined) {
          // start next string of Text
          setTimeout(function() {
            text.innerHTML = '';
            i = 0;
            currentText = (currentText + 1) % txtList.length;
            typeWriter();
          }, 1750);
        }
      }
    }
  }

  // starts the typewriter
  if (browser) {
    setTimeout(() => {
      typeWriter()
    }, 10);
  }

  async function deleteText() {
    //animate deleting text
    if (text.innerHTML.length != 0) {
      setTimeout(function() {
        let len = text.innerHTML.length;
        text.innerHTML = text.innerHTML.substring(0, len - 1);
        deleteText()
      }, speed);
    } else {
      return true
    }
  }

</script>

<main>
  <!-- <Name></Name> -->

  <h1>Benjamin Bowers Jr.</h1>
  <small>Passionate <em>Software Engineer</em> & <b bind:this="{text}" class="text"></b> <br> Looking to start my career and further my degree</small>

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
    color:  white;
    margin-top: 10px;
    text-align: center;
    font-family: 'Roboto Serif';
  }

  svg text {
    font-family: 'Bacelony';
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

  em {
    text-decoration: underline;
    font-weight: bold;
    color: rgb(206, 4, 206);
  }

  .buttons {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .text::after {
    content: "|";
  }

</style>