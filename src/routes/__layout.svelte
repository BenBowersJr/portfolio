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
    height: 100vh;
    background-color: #E84855;
    flex-direction: column;
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
    background-color: #3185fc;
    border-radius: 30px;
    text-align: center;
    height: 20px;
  }
</style>