

<script>

  import {onMount} from 'svelte'
  // @ts-ignore
  import svgImage from '$lib/assets/edit.svg'
  import { fade, blur, fly, slide, scale } from "svelte/transition";
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
</script>

<main>

  <!-- This displays data on first Load -->
  {#if MDLs}
    {#each MDLs as MDL, index}
      <div class="container" in:blur='{{duration: 500}}'>
        <small>{index+1}</small>
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
  {/if}

  <!-- If Data is back from a POST request Display new data -->
  <!-- {#if MDL_Data}
    {#each MDL_Data.data as MDL, i}
      <div class="container" in:blur="{{ duration: 500 }}">
        <small>{i+1}</small>
        <p class='team'>{MDL.data.team}</p>
        <p class='name'>{MDL.data.user}</p>
        <p class='WO'><span>Work Order:</span> {MDL.data.WONum}</p>
        <p class='downtime'>Downtime</p>
        <p class='date'>{MDL.data.date['@date']}</p>
        <p class="equipment"><span>Equipment Name:</span> {MDL.data.equipName}</p>

        {#if MDL.data.downtimeMin == undefined}
          <p class="downtimeValue">0</p>
        {:else}
          <p class="downtimeValue">{MDL.data.downtimeMin}</p>
        {/if}

        {#if MDL.data.status == 'Complete'}
          <p class="status">Status: <span style='color: green'>{MDL.data.status}</span></p>
        {:else if MDL.data.status == 'In Progress'}
          <p class="status">Status: <span style='color: orange'>{MDL.data.status}</span></p>
        {:else if MDL.data.status == 'Not Complete'}
          <p class="status">Status: <span style='color: red'>{MDL.data.status}</span></p>
        {/if}
        
        <p class='description'>{MDL.data.description}</p>

        <div class="update">
          <a href="DailyLog/{MDL.ref['@ref'].id}">
            <img src="{svgImage}" alt="Click Here to Edit">
          </a>
        </div>
      </div>
    {/each}
  {/if}

  {#if !MDL_Data && !MDLs}
    <h3>...Loading Data</h3>
  {/if} -->
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
    z-index: 1;
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