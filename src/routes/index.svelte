<script>
  import {fade, fly} from 'svelte/transition'
</script>

<svelte:head>
  <title>Benjamin Bowers</title>
</svelte:head>

<main in:fade={{ duration: 500 }}>
  <h1>
    Benjamin Bowers Jr.
  </h1>
  <small>Software Engineer</small>

  <div class="aboutme">
    <h2>About Me</h2>
    <p class='aboutmetxt'>My first exposure to software was in my high school robotics class. We learned how to link the programming languages we learned, to the robots we created, and how to make them do complex tasks. After quickly getting ahead and finishing all the robot challenges and assignments I was given, I was free to work on anything I wanted. Every year I retake the class to work with the school's robots, 3D printers, Laser Engraver, and anything I could get my hands on that the school had at the time. Most of my projects are still being used there today. It motivated me to build my computer and work on my own projects in my free time, and ultimately pursue a degree in higher education in the subject.</p>

    <p>I am graduating from Thaddeus Stevens College of Technology with an Associate of Computer Science in spring 2022. I look forward to starting a career in software engineering and continuing my growth in the field.</p>


    <h2>Goals</h2>
    <p>My current goal is to start my career in software engineering in a job with a culture that supports and fosters an environment of continuous learning. I hope to continue to refine my ability to work as a full-stack engineer, so I am flexible on what I work on early in my career as I value all of the experiences along the way. I believe work experience will help me develop a greater vision for my career goals beyond this.</p>
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

  h2 {
    margin-top: 2em;
    margin-bottom: 10px;
    text-decoration: underline;
  }

  :global(h1) {
    font-family: 'Rubik Glitch', cursive;
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
  @media only screen and (max-width: 850px) {
    p {
      width: 90vw;
    }

    h1 {
      font-size: 2.5em;
    }

  }
</style>