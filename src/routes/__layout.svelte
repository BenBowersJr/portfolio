<script>
  export let activePage = 'Home'
</script>

<main>
  <slot {activePage}></slot>
</main>

<style>

  @font-face {
    font-family: 'Barcelony';
    src: url('fonts/Barcelony.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Hahmlet';
    src: url('fonts/Hahmlet.ttf') format('truetype');
  }
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  main {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(-45deg, #7a0045, #16007a, #160024, #2b0344, #16007a, #7a0045);
    background-size: 400% 400%;
    animation: gradient 30s ease infinite;
    color: white;
  }

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
</style>