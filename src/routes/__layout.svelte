<script>
  import {page} from '$app/stores'
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Roboto&family=Rubik+Glitch&display=swap" rel="stylesheet"> 
</svelte:head>

<main>
  <nav>
    <ul>
      <li class:active={$page.url.pathname == '/'}><a href="/">Home</a></li>
      <li class:active={$page.url.pathname == '/work'}><a href="/work">Work</a></li>
      <li class:active={$page.url.pathname == '/projects'}><a href="/projects">Projects</a></li>
      <li class:active={$page.url.pathname == '/contact'}><a href="/contact">Contact</a></li>
    </ul>
  </nav>

  <slot></slot>
</main>

<style>
  :global(body) {
    background-color: #403F4C;
    font-family: sans-serif;
  }
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    display: flex;
    width: 100%;
    height: 100%;
  }
  nav {
    position: sticky;
    top: 0;
    display: flex;
    width: 4vw;
    min-width: 50px;
    height: 100vh;
    background-color: #E84855;
    flex-direction: column;
    z-index: 10000;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    font-family: sans-serif;
  }

  li {
    padding: 1em;
    transform: rotate(-90deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li a {
    color: inherit;
    text-decoration: none;
  }

  .active {
    color: whitesmoke;
    text-decoration: underline;
    font-size: larger;
    text-align: center;
  }

  @media only screen and (max-width: 850px) {
  main {
    flex-direction: column;
    justify-content: space-between;
  }
  nav {
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    min-width: 100vw;
    margin-bottom: 2em;
  }
  li {
    transform: none;
  }

  ul {
    width: 100%;
    flex-direction: row;
    align-items: space-evenly;
    justify-content: space-evenly;
    border: 1px solid ;
  }
}
</style>