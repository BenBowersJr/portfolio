

<script>

  import {onMount} from 'svelte'
  // @ts-ignore
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  export let MDLs
  // onMount(async () => {
  //   const req = await fetch('DailyLog.json')
  //   const res = await req.json()
  //   MDLs = (res.data)
  // })
</script>

<main>

  <!-- This displays data on first Load -->
  {#if MDLs}
    {#each MDLs as MDL, i}
      <div class="container" in:blur='{{duration: 500}}'>
        <small>{i+1}</small>
        <p class='team'>{MDL.data.team}</p>
        <p class='name'>{MDL.data.user}</p>
        <p class='WO'><span>Work Order:</span> {MDL.data.WONum}</p>
        <p class='downtime'>Downtime</p>
        <p class='date'>{MDL.data.Date}</p>
        <p class="equipment"><span>Equipment Name:</span> {MDL.data.equipName}</p>
        <p class="downtimeValue">{MDL.data.downtimeMin}</p>

        {#if MDL.data.status == 'Complete'}
          <p class="status">Status: <span style='color: green'>{MDL.data.status}</span></p>
        {:else if MDL.data.status == 'In Progress'}
        <p class="status">Status: <span style='color: orange'>{MDL.data.status}</span></p>
        {:else if MDL.data.status == 'Not Complete'}
        <p class="status">Status: <span style='color: red'>{MDL.data.status}</span></p>
        {/if}

        <p class='description'>{MDL.data.description}</p>
      </div>
    {/each}
  {:else}
      <h1>Loading</h1>
  {/if}
</main>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Nuosu+SIL&family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<style>

  .container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: 
      "team team team team name"
      "WO WO WO downtime date"
      "equipment equipment equipment downtimeValue status"
      "description description description description update";
    grid-row-gap: 5px;
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    /* margin: 5px; */
    background-color: whitesmoke;
    color: black;
    box-shadow: 5px 5px 5px rgb(88, 88, 88);
  }

  .container p {
    color: black;
  }

  img {
    width: 50px;
  }
  main {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: stretch;
    padding: 1em;

    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
    color: black;
  }

  p.downtimeValue {
    grid-area: downtimeValue;
    text-align: center;
    color: red;
  }
  .equipment {
    grid-area: equipment;
  }
  p.team {
    grid-area: team;
    color: darkblue;
    font-weight: bold;
  }

  .WO {
    grid-area: WO;
  }
  .name {
    grid-area: name;
    text-align: right;
  }

  .date {
    text-align: right;
    grid-area: date;
  }

  .downtime {
    grid-area: downtime;
    text-align: center;
  }



  .status {
    text-align: right;
    grid-area: status;
  }

  .update {
    grid-area: update;
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .description {
    /* margin-top: 10px; */
    grid-area: description;
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 7px;
    padding: .2em;
    height: 70px;
    overflow-y: scroll;
  }

  h3 {
    text-align: center;
    justify-items: center;
    margin: auto 0;
  }

  span {
    font-weight: bold;
  }
  small {
    position: absolute;
    top: -15px;
    left: 5px;
    font-size: .8em;
  }

  
</style>