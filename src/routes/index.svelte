<script>
  import {fade} from 'svelte/transition'
</script>

<main in:fade={{ duration: 1000 }}>
  <h1>
    Benjamin M. Bowers Jr.
  </h1>
  <small>Jr. Software Engineer</small>

  <div class="aboutme">
    <h2>About Me</h2>
    <p class='aboutmetxt'>I got my introduction to software in my highschool robotics class where I quickly learned that I love to work with computers. Every year I would retake Honors Robotics to work with the schools robots, 3D printers, and Laser Engraver, really anything I could get my hands on that the school had at the time.</p>
    <p>Now im graduating from Thaddeus Stevens College of Technology with a Associates of Computer Science. Excited to start my career and see what I can accomplish and learn from whats to come.</p>
  </div>
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

  small {
    font-style: italic;
  }

  :global(h1) {
    font-family: 'Bangers', cursive;
    font-size: 3em;
    font-style: italic;
    justify-self: start;
  }

  :global(h2) {
    text-align: center;
    font-size: 2em;
    font-family: 'Bangers', cursive;
  }

  .aboutme {
    margin: 2em;
  }

  .aboutmetxt {
    margin-bottom: 1em;
  }

  p {
    text-align: justify;
    width: 750px;
    font-size: 1.3em;
    font-family: 'Roboto';
  }
</style>