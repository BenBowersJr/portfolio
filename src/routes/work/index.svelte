<script>
  import {fade} from 'svelte/transition'
</script>

<main in:fade={{ duration: 1000 }}>
  <h1>Work Experience</h1>

  <div class="work-container">
    <header>
      <h3>Tyson Foods - <small>Maintenance Intern</small></h3> <p class="date">Feb 2022 - Present</p>
    </header>
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

  .work-container {
    width: 50vw;
  }

  header {
    display: flex;
    justify-content: space-between;
  }
</style>