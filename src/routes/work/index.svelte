<script>
// @ts-nocheck

  import {fade, fly} from 'svelte/transition'
</script>

<main in:fade={{ duration: 2000 }}>
  <h1>Work Experience</h1>

  <div class="work-container">
    <header>
      <h3>Tyson Foods - <small>Maintenance Intern</small></h3> <p class="date">Feb 2022 - Present</p>
    </header>

    <img src="https://www.refrigeratedfrozenfood.com/ext/resources/RFF/2020-Web-Pics/Tyson/2021/Tyson-Logo.jpg?1630703215" alt="">

    <div class="content">
      <p>Here I was tasked to expand upon their Microsoft Powerapps platform. But there were multiple problems that I encountered that severely encumbered my performance. I suggested that I make a website for them that would be much faster and cost them much less money. They agreed and I learned so much from this internship because of that. For the first time, I worked with SvelteKit and <abbr title="FaunaDB Query Language">FQL</abbr> which were used for the front-end and back-end of the app. <abbr title="FaunaDB Query Language">FQL</abbr> was admittedly not my first choice. I couldn't connect to a SQL Database because the firewall blocked all my connections and they wouldn't allow me though. My solution was to entirely learn a new query language that would work as an API and not get blocked by the firewall. Sveltekit was incredible to use from the start and made the development process easy and painful.  </p>
    </div>
  </div>
</main>

<style>
  main {
    position: relative;
    width: 100%;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .work-container {
    padding: 2em;
    width: 50vw;
    border: 1px solid ;
    border-radius: 1em;
    box-shadow: 5px 5px 15px black;
  }

  .content {
    text-indent: 3em;
    text-align: justify;
  }

  h1 {
    font-family: 'Bangers';
    font-size: 3em;
    margin-bottom: 1em;
    text-decoration: underline;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
  }

  img {
    width: 100%;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 850px) {
    .work-container {
      width: 90%;
    }
  }
</style>