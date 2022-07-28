<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import MWPHazards from '$lib/components/MWPHazards.svelte'

  let risklvl = ''
  let pagetwo = false
  let updateData = undefined
</script>

<main>
  
  <!-- Risk Cards -->
  {#if risklvl == '' && !pagetwo}
    <div class="riskcard-container" in:fade='{{ duration: 1500 }}'>
      <div class="riskcard lowrisk" on:click="{() => (risklvl = 'low')}">
        <div>
          <h2>Low Risk</h2>
          <span>When task involves any of the following: </span>
        </div>
        <p class="description"> All unplanned work or any non-routine job that does not qualify as medium or high</p>
        <p></p>
      </div>
      <div class="riskcard mediumrisk" on:click="{() => (risklvl = 'medium')}">
        <div>
          <h2>Medium Risk</h2>
          <span>When task involves any of the following: </span>
        </div>
        <p class="description"> Maintenance techs with (less than 6 months experience working alone), breaking safety plane, fall restraint/arrest, moving components over 150 pounds, handling sharp objects, and/or robotic systems.</p>
        <p class="endcard">Equipment Incident Class: <span class='orange'>ORANGE</span></p>
      </div>
      
      <div class="riskcard highrisk" on:click="{() => (risklvl = 'high')}">
        <div>
          <h2>High Risk</h2>
          <span>When task involves any of the following:</span>
        </div>
        <p class="description"> More than two team memebrs performing work, hazardous chemicals, extreme pressure/heat, unsafe body or hand placement without visibility that pose a potential risk, working under equipment with a crush hazard, permit required (hot work, confined space, hazardous energy, energized (electrical) work, line break, etc.). </p>
        <p class='endcard'>Equipment incident class: <span class='red'>RED</span></p>
      </div>
    </div>
  {/if}

  <!-- Actual MWP form -->
  {#if risklvl != ''}
    <div class="hazard-container" in:fade='{{ duration: 1500}}'>

      <MWPHazards {risklvl} {updateData}></MWPHazards>
    </div>
  {/if}
</main>


<style>
  main {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;

  }


  p {
    color: black;
  }

  /* HARZARD STYLES */

  .riskcard-container {
    display: flex;
    width: 100%;
    height: 87vh;
    justify-content: space-around;
    align-items: center;
  }

  .riskcard {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid;
    width: 20vw;
    height: 50vh;
    padding: 2em;
    overflow: auto;
  }


  .riskcard h2 {
    align-self: start;
  }

  .lowrisk {
    border: 2px solid blue;
  }

  .mediumrisk {
    border: 2px solid orange;
  }

  .highrisk {
    border: 2px solid red
  }

  .description {
    text-align: justify;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  p.endcard {
    text-align: center;
    margin-top: 0.3em;
  }

  h2 {
    text-align: center;
  }

  span {
    font-weight: bold;
    margin-bottom: 10px;
  }

  span.red {
    color: red;
  }
  span.orange {
    color: orange
  }
</style>