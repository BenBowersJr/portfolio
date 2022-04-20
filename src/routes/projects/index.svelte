<script>
  import {fade} from 'svelte/transition'
  import { goto } from '$app/navigation';
  import platformer from '$lib/assets/platformer.png'
  import hiro from '$lib/assets/hiro.png'
  import simon2 from '$lib/assets/simon2.png'
  import sins from '$lib/assets/sins.png'
</script>

<main in:fade={{ duration: 1000 }}>
  <h1>Projects</h1>


  <div class="project-container">
    <h2>Platformer Game</h2>

    <a target='_blank' href="https://benbowersjr.github.io/platformer-game/">
      <img class="image" src="{platformer}" alt="">
    </a>

    <p class="description">This was a Project from school where both my classmate Joshua Remlinger and I created a game. Were both very proud with how it came out. We came up with a clever map creation system and struggled with the physics and collision detection for awhile before we figured it out.</p>
  </div>

  <div class="project-container">
    <h2>PHP Sophmore Project</h2>

    <a href="https://github.com/jrremlinger/SophomoreProject">
      <div class="image"></div>
    </a>

    <p class="description">This was for one of our Software Project classes. me and 3 other classmates are given a project for 6 weeks to work on. This time it was a mock-up retirement home app. This app would take care of regular hostipal duties, and have multiple types of users like Doctors, Nurses, Caretakers, and Patients.</p>
  </div>

  <div class="project-container">
    <h2>Discord Bots</h2>

    <div class="discord-icons">
      <img src="{hiro}" alt="hiro bot" class="small-image">

      <div class="container">
        <img src="{sins}" alt="mr sins" class="small-image">
        <div class="overlay">
          <div class="text">The server name is "The Casting Couch"</div>
          <div class="text"></div>
        </div>
      </div>

      <img src="{simon2}" alt="simon bot" class="small-image">
    </div>

    <p class="description">Me and my friends use discord practically everyday while we play games together. When a popular discord bot called Rythum was shutdown by youtube. I wanted to see if I could make my own music bot in Python with <a href="https://github.com/Rapptz/discord.py">Discord.py</a> and <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#readme">Youtube-dl</a>. That was the beginning of me creating 3 seperate bots for my friends servers.      </p>
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
    padding: 10px 0px;
  }
  
  h2 {
    font-family: 'Bangers';
    /* margin-bottom: 2em; */
    font-size: 3em;
    
  }

  a {
    color: aliceblue;
  }

  


  .project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    width: 90vw;
    max-width: 700px;
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
    width: 100%;
    height: 100%;
    max-height: 300px;
    background-color: lightgray;
    margin-bottom: 3em;
  }


  .small-image {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin: 1em;
    margin-bottom: 3em;
    background-color: lightgray;
  }

  .discord-icons {
    display: flex;
    justify-content: space-evenly;
  }


  /* Copied from w3 */
  .container {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 210px;
  width: 90%;
  opacity: 1;
  transition: .3s ease;
  background-color: darkgrey;
  border-radius: 100px;
  margin-top: 10px;
  margin-left: 10px;
}

.container:hover .overlay {
  opacity: 0;
}

.text {
  display: flex;
  width: 175px;
  height: 200px;
  align-items: center;
  text-align: center;
  margin: 1em;
  font-size: 1.1em;
} 

span {
  display: inline-block;
}

@media only screen and (max-width: 850px) {
  .discord-icons {
    flex-direction: column;
  }
}

</style>