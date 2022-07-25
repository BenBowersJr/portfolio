<script>
  import { createEventDispatcher } from 'svelte';
  import { blur } from "svelte/transition";
  import TysonImages from '$lib/components/TysonImages.svelte';
  const dispatch = createEventDispatcher();

  function back() {
    dispatch('back')
  }

  let currentProject = 0

  $: console.log(currentProject)

  function nextProject() {
    let old = currentProject
    currentProject = -1
    setTimeout(() => {
      if (old == 1) {
        currentProject = 0
      } else {
        currentProject = old + 1
      }
    }, 1000);
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,400;0,8..144,500;0,8..144,600;0,8..144,700;1,8..144,400&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <button class="buttonL" on:click="{back}">Home</button>
  
  {#if currentProject == 0}
    <div class="project" transition:blur="{{ duration: 1000 }}">
      <h1>Tyson Maintenance Website</h1>

      <div class="TysonImages">
        <TysonImages></TysonImages>
      </div>

      <p>This website was my Internship and Full-Time project at Tyson Foods. I Developed this as a better replacement to their Microsoft PowerApps application. At two plants, The maintenance team rely on this site every day to fill out their daily forms and yearly training. Handles complex interactions between the different management and team members. Made mostly with SvelteKit and FaunaDB.</p>
    </div>
  {:else if currentProject == 1}
    <div class="project" transition:blur="{{ duration: 1000 }}">
      <h1>Platformer Game</h1>

      <iframe src="https://benbowersjr.github.io/platformer-game/" title="game project"></iframe>
      <p id="platformer">This was one of my projects at Thaddeus Stevens College of Technology that me and my classmate Joshua Remlinger made using p5.js. You can play it now! Use wasd to move and esc to pause, not mobile compatable. Code for the project can be found <a href="https://github.com/BenBowersJr/platformer-game" target="_blank">here.</a></p>
    </div>
  {/if}


  <button class="buttonR" on:click="{nextProject}">Next Project</button>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,400;0,8..144,500;0,8..144,600;0,8..144,700;1,8..144,400&display=swap');

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    height: 100%;
  }

  .buttonL {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 10px 15px;
    background: none;
    animation: gradient 15s ease infinite;
    border: #ffffff 2px solid;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    width: 100px;
  }
  .buttonR {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px 15px;
    background: none;
    animation: gradient 15s ease infinite;
    border: #ffffff 2px solid;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    width: 140px;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  iframe {
    width: 1005px;
    height: 640px;
    overflow: hidden;
    border: none;
    margin-bottom: -20px;
  }

  .TysonImages {
    margin-bottom: 20px;
  }

  p {
    width: 50%;
    max-width: 1000px;
    text-align: justify;
    font-family: 'Roboto Serif';
  }

  .project {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  a {
    color: aqua;
  }

  #platformer {
    width: 50%;
  }
</style>