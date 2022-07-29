
<svelte:head>
  <title>Maintenace Daily Log</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<script>
  // @ts-ignore
  import DailyLogForm from '$lib/components/TysonCopy/DailyLog/DailyLogForm.svelte'
  import DailyLogViewer from '$lib/components/TysonCopy/DailyLog/DailyLogViewer.svelte'
  import {onMount} from 'svelte'
  import { fade, blur, fly, slide, scale } from "svelte/transition";

  export let session
  let MDLs = [
    {
      "ts": 1658864099000000,
      "data": {
        "department": "RKP",
        "equipName": "PICKER #3",
        "team": "Team-A",
        "downtimeMin": 0,
        "downtime": false,
        "ordered": false,
        "causingDept": "Maintenance",
        "WONum": 1020546253,
        "user": "Benjamin Bowers",
        "PONum": "",
        "Date": "2020-01-01",
        "description": "replace 1/2\" cap",
        "status": "Complete",
        "plant": "New Holland",
        "whys": {}
      }
    },
    {
      "ts": 1658864099000000,
      "data": {
        "department": "RKP",
        "equipName": "PICKER #3",
        "team": "Team-A",
        "downtimeMin": 0,
        "downtime": false,
        "ordered": false,
        "causingDept": "Maintenance",
        "WONum": 1020546253,
        "PONum": "",
        "Date": "2020-01-01",
        "description": "replace 1/2\" cap",
        "user": "Benjamin Bowers",
        "status": "Complete",
        "plant": "New Holland",
        "whys": {}
      }
    },
    {
      "ts": 1658864099000000,
      "data": {
        "department": "RKP",
        "equipName": "PICKER #3",
        "team": "Team-A",
        "downtimeMin": 0,
        "downtime": false,
        "ordered": false,
        "causingDept": "Maintenance",
        "WONum": 1020546253,
        "PONum": "",
        "user": "Benjamin Bowers",
        "description": "replace 1/2\" cap",
        "status": "Complete",
        "Date": "2020-01-01",
        "plant": "New Holland",
        "whys": {}
      }
    },
    {
      "ts": 1658864099000000,
      "data": {
        "department": "RKP",
        "equipName": "PICKER #3",
        "team": "Team-A",
        "downtimeMin": 0,
        "downtime": false,
        "ordered": false,
        "Date": "2020-01-01",
        "causingDept": "Maintenance",
        "WONum": 1020546253,
        "PONum": "",
        "description": "replace 1/2\" cap",
        "user": "Benjamin Bowers",
        "status": "Complete",
        "plant": "New Holland",
        "whys": {}
      }
    },
  ]
  function submit(event) {
    alert('NOT FUNCTIONAL')
  }

  //hello world function
  function helloWorld() {
    console.log("hello world")
  }


</script>

<div class="main">
  <h1>Maintenace Daily Log</h1>

  <div class="dailylog" in:fade='{{ duration: 250 }}'>
    <header>
      <h2>MDL Form</h2>
    </header>
    <DailyLogForm on:submit={submit}></DailyLogForm>
  </div>

  <div class="viewer">
    <header>
      <h2>MDL Viewer</h2>
    </header>
    <DailyLogViewer bind:MDLs></DailyLogViewer>
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
