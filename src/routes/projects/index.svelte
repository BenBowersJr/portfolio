<script>
  import {fade} from 'svelte/transition'
  import { goto } from '$app/navigation';
  import platformer from '$lib/assets/platformer.png'
</script>

<main in:fade={{ duration: 1000 }}>
  <h1>Projects</h1>


  <div class="project-container">
    <h2>Platformer Game</h2>

    <a target='_blank' href="https://benbowersjr.github.io/platformer-game/"><img src="{platformer}" alt=""></a>

    <p class="description">This was a Project from school where both my classmate Joshua Remlinger and I created a game. Were both very proud with how it came out. We came up with a clever map creation system and struggled with the physics and collision detection for awhile before we figured it out.</p>
  </div>

  <div class="project-container">
    <h2>PHP Sophmore Project</h2>

    <div class="image"></div>

    <p class="description">This was for one of our Software Project classes. me and 3 other classmates are given a project for 6 weeks to work on. This time it was a mock-up retirement home app. It would take care of patient data and have multiple types of users like Doctors, Nurses, Caretakers, and Patients.</p>
  </div>
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

  h1 {
    font-family: 'Bangers';
    text-decoration: underline;
    font-size: 4em;
    margin: 50px;
  }
  
  h2 {
    font-family: 'Bangers';
    /* margin-bottom: 2em; */
    font-size: 3em;
    
  }

  img {
    width: 600px;
    height: auto;
    margin: 25px;

  }


  .project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    width: 1000px;
    border: 1px solid ;
    border-radius: 1em;
    box-shadow: 5px 5px 15px black;
    margin: 25px;
  }

  .description {
    font-size: larger;
    text-align: justify;
  }

  .image {
    width: 600px;
    height: 300px;
    margin: 25px;
    background-color: lightgray;
  }

</style>