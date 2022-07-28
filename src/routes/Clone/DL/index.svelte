
<svelte:head>
  <title>Maintenace Daily Log</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<script>
  // @ts-ignore
  import DailyLogForm from '$lib/components/TysonCopy/DailyLogForm.svelte'
  import DailyLogViewer from '$lib/components/TysonCopy/DailyLogViewer.svelte'
  import {onMount} from 'svelte'
  import { fade, blur, fly, slide, scale } from "svelte/transition";

  export let session


</script>

<div class="main">
  <h1>Maintenace Daily Log</h1>

  <div class="dailylog" in:fade='{{ duration: 250 }}'>
    <header>
      <h2>MDL Form</h2>
    </header>
    <DailyLogForm></DailyLogForm>
  </div>

  <div class="viewer">
    <header>
      <h2>MDL Viewer</h2>
    </header>
    <DailyLogViewer></DailyLogViewer>
  </div>
</div>


<style>
  h1 {
    grid-area: header;
    text-align: center;
    margin: 1em;
    text-decoration: underline;
    font-family: 'Lora';
    font-weight: 700;
    font-size: 2.5em;
  }

  h2 {
    font-family: 'Lora';
  }

  /* header {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: space-between;
  } */
  .main {
    /* position: relative; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 5fr;
    grid-template-areas: "header header"
                        "dailylog viewer";
    width: 100%;
    min-height: 100%;
    color: black;
    background-color: whitesmoke;
  }

  .dailylog {
    border-right: 5px solid black;
    padding: 0 2em;
    grid-area: dailylog;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* overflow-y: auto; */
  }
  .viewer {
    grid-area: viewer;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* border: 1px solid red; */

    max-height: 79vh;
    max-width: 100%;
  }
</style>
