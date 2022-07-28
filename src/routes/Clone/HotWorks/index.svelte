<script>
  import HotWorkPermit from "$lib/components/HotWorkPermit.svelte";
</script>

<svelte:head>
  <title>Hot Work Permit</title>
</svelte:head>

<main>
  <h1>Hot Work Permit</h1>

  <div class="hwp-container">
    <HotWorkPermit></HotWorkPermit>
  </div>
</main>

<style>
  main {
    margin-top: 19px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* overflow-y: auto; */
    /* margin-bottom: 100px; */

  }

  h1 {
    text-align: center;
    font-size: 2.5em;
    text-decoration: underline;
    font-family: 'Lora';
    margin-top: 15px;
    padding-bottom: 25px;
  }

  .hwp-container {
    height: 100%;
    /* padding-bottom: 100px; */
    overflow-y: auto;
  }
</style>