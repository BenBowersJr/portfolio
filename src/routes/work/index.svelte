<script>
// @ts-nocheck

  import {fade, fly} from 'svelte/transition'
</script>

<svelte:head>
  <title>My Work</title>
</svelte:head>

<main in:fade={{ duration: 2000 }}>
  <h1>Work Experience</h1>

  <div class="work-container">
    <div class="work">
      <header>
        <h3>Tyson Foods - <small>Maintenance Intern</small></h3> <p class="date">Feb 2022 - Present</p>
      </header>
  
      <img src="https://www.refrigeratedfrozenfood.com/ext/resources/RFF/2020-Web-Pics/Tyson/2021/Tyson-Logo.jpg?1630703215" alt="">
  
      <div class="content">
        <p>Here I was hired to expand upon Tysons Microsoft Powerapps platform. Mainly turning the internal paper forms that maintenance uses online. But there were multiple problems that I encountered that encumbered my performance. The only solutions required paying more money to Microsoft. I suggested that I make a website for them that would be much faster, do more things, and cost much less money. They agreed and I learned so much from this internship because of that. For the first time, I worked with SvelteKit and <abbr title="FaunaDB Query Language">FQL</abbr> which were used for the front-end and back-end of the app. <abbr title="FaunaDB Query Language">FQL</abbr> was admittedly not my first choice. I couldn't connect to a SQL Database because the firewall blocked all my connections. My solution was to entirely learn a new query language FaunaDB. It was rough at first, but as I got more used to it, I learned just how fast and efficient FQL could be and was happy to work with it. And I honestly couldn't be more pleased with Sveltekit. It was my first introduction to React/Vue/Angular type frameworks. It was very easy to learn and made development a lot of fun and easy to do.</p>
      </div>
    </div>
  
    <div class="work">
      <header>
        <h3 id='skills'>Skills</h3>
      </header>
  
      <div class="content">
        <div class="languages">
          <h3>Languages</h3>
          <h4>Advanced In</h4>
            <ul>
              <li>HTML/CSS/JS</li>
              <li>Python</li>
              <li>Java</li>
              <li>Git</li>
              <li>Svelte</li>
            </ul>

          <h4>Proficient In</h4>
            <ul>
              <li>SQL</li>
              <li>FQL</li>
              <li>PHP</li>
              <li>Dart</li>
            </ul>

          <h3>Frameworks / Libraries</h3>
          <ul>
            <li>SvelteKit</li>
            <li>Django</li>
            <li>Flask</li>
            <li>Laravel</li>
          </ul>
        </div>
      </div>
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

  .work {
    padding: 2em;
    width: 100%;
    border: 1px solid ;
    border-radius: 1em;
    box-shadow: 5px 5px 15px black;
    max-width: 600px;
    margin: 2em;
    height: min-content;
  }
  .work-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .content {
    /* text-indent: 3em; */
    text-align: justify;
  }

  h1 {
    font-family: 'Bangers';
    font-size: 3em;
    margin-bottom: 1em;
    text-decoration: underline;
  }

  h3 {
    text-decoration: underline;
    margin-bottom: .5em;
    margin-top: 25px;
    font-size: 1.5em;
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


  ul {
    margin-left: 1em;
  }

  li {
    padding: 1px;
  }
  #skills {
    width: 100%;
    text-align: center;
    font-size: 2em;
    text-decoration: underline;
  }

  @media only screen and (max-width: 850px) {
    .work-container {
      width: 90%;
      flex-direction: column;
      align-items: center;
    }

    .work {
      width: 90%;
    }
  }
</style>