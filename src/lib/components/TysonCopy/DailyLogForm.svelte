<script>
  // @ts-ignore
  import {session} from '$app/stores'
  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()
  let ordered = false, downtime = false
  let department, equipName, team, downtimeMin=0, causingDept, WONum="", date, description, status, PONum=""
  let why1, why2, why3, why4, why5, whymsg, userResponsible, correctiveAction
  // @ts-ignore
  let plant
  let msg

  $: checkdowntime(downtime)
  function checkdowntime(x) {
    if(!x) {
      downtimeMin = 0
    }
  }
  let canSubmit = true
  
</script>

<main>
  <form>
    {#if plant == 'New Holland FP'}
      <select  id="" required class="department">
        <option value="" disabled hidden selected>-- Select Department --</option>
        <option value="Cookside">Cookside</option>
        <option value="Packside">Pack Side</option>
        <option value="Clean room">Clean Room</option>
      </select>
    {:else}
      <select  id="" required class="department">
        <option value="" disabled hidden selected>-- Select Department --</option>
        <option value="Live Receiving">Live Receiving</option>
        <option value="RKP">RKP</option>
        <option value="Evis">Evis</option>
        <option value="Hearts & Livers">Hearts & Livers</option>
        <option value="Debone">Debone</option>
        <option value="CVP">CVP</option>
        <option value="Cookside">Cookside</option>
        <option value="Packside">Pack Side</option>
        <option value="Clean room">Clean Room</option>
        <option value="WWTP">WWTP</option>
        <option value="Pump House">Pump House</option>
      </select>
    {/if}


    <input  type="text" placeholder="Equipment Name" class="equipment-name" required>

    <select id="" required class="team">
      <option value="" disabled hidden selected>-- Select Team --</option>
      <option value="Team-1S">Team-1S</option>
      <option value="Team-2S">Team-2S</option>
      <option value="Team-3S">Team-3S</option>
      <option value="Team-A">Team-A</option>
      <option value="Team-B">Team-B</option>
      <option value="Team-C">Team-C</option>
      <option value="Team-D">Team-D</option>
    </select>

    <fieldset class="downtime">
      <label>
        <input type="checkbox">
        <span>Any Downtime?</span>
      </label>
      
      {#if downtime}
        <input  type="number" placeholder='Downtime in Minutes' min='0' max='9999' required>
      {:else}
        <input  type="number" placeholder='Downtime in Minutes' min='0' max='9999' disabled>
      {/if}
    </fieldset>

    <select  name="" required class="department-causing">
      <option value="" disabled hidden selected>-- Select Causing Dept --</option>
      <option value="Maintenance">Maintenance</option>
      <option value="Ops Driven">Ops Driven</option>
      <option value="Sanitation">Sanitation</option>
    </select>

    <fieldset class='ordered'>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>
        {#if ordered}
          <input type="checkbox" disabled>
        {:else}
          <input type="checkbox">
        {/if}
        <span>Have parts been ordered?</span>
      </label>

      {#if ordered}
        <div class="ordered-container">
          <fieldset class='PONum'>
            <input  type="number" placeholder='Work Order Number' min='1000000000' max='9999999999'>
            <input  type="number" placeholder='Purchase Order Number' min='1000000000' max='9999999999' required>
          </fieldset>
        </div>
      {:else}
        <input  type="number" placeholder='Work Order Number' min='1000000000' max='9999999999'>
      {/if}
    </fieldset>
      

    <div class="datetime">
      <input  type="date" required>
    </div>  

    <textarea  id="description" placeholder="Description of Job/Repair" required />

    <select  id="status" required>
      <option value="" disabled hidden selected>-- Select Status --</option>
      <option value="Complete">Complete</option>
      <option value="In Progress">In Progress</option>
      <option value="Not Complete">Not Complete</option>
    </select>

    {#if downtimeMin > 30}
      <div class="whys">
        <h2>All Logs with over 30mins of downtime must explain 5 reasons why</h2>
        <div class="inputs">
          <label>Why 1:
            <textarea  required></textarea>
          </label>
          <label>Why 2:
            <textarea  required></textarea>
          </label>
          <label>Why 3:
            <textarea  required></textarea>
          </label>
          <label>Why 4:
            <textarea  required></textarea>
          </label>
          <label>Why 5: 
            <textarea  required></textarea>
          </label>
  
          <label >Team Member Responsible:
            <textarea  required></textarea>
          </label>
          <label id="correctiveAction">Corrective Action:
            <textarea  required></textarea>
          </label>
        </div>
      </div>
    {/if}

    {#if canSubmit}
      <button>Submit</button>
    {:else}
      <button disabled>Submit</button>
    {/if}
  </form>
</main>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Nuosu+SIL&family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<style>

  
  p {
    grid-area: error;
    text-align: center;
  }

  /* .ordered-container {
    display: flex;
    flex-direction: column;
  } */

  form {
    display: grid;
    place-items: stretch;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "department team"
    "department-causing status"
    "equipment-name date"
    "downtime downtime"
    "ordered ordered"
    "textbox textbox"
    "whys whys"
    "error error"
    "submit submit";
    overflow: auto;
    height: 60vh;

    column-gap: 1em;
    row-gap: 2em;
    width: 100%;
  }
  
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
  
  fieldset {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5em;
    border: 0;
  }
  
  input {
    text-align: center;
    height: 40px;
  }
  input[type=number] {
    width: 49%;
  }
  input[type=checkbox] {
    margin-right: 1em;
  }
  input[type=date] {
    text-align: center;
    width: 100%;
  }

  select {
    text-align: center;
    height: 40px;
    /* outline: auto; */
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size:1.2em;
  }

  textarea {
    text-align: center;
    height: 4em;
  }

  .whys {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    grid-area: whys;
    width: calc(100%);
    /* outline: auto; */
  }
  .downtime {
    grid-area: downtime;
    height: 30px;
  }

  .PONum {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-area: PONum;
  }
  .PONum input {
    width: 235px;
  }
  .ordered {
    grid-area: ordered;
    height: 30px;
    width: 100%;
  }

  .ordered-container input {
    width: 100%;
  }

  .ordered-container {
    width: 49%;
  }
  .datetime {
    grid-area: date;
    width: 100%;
  }

  .equipment-name {
    grid-area: equipment-name;
  }

  .team {
    grid-area: team;
  }

  .department {
    grid-area: department;
    /* height: 30px; */
  }

  #status {
    grid-area: status;
    /* height: 2em; */
    /* place-self: center; */
    width: 100%;
  }

  #description {
    width: 100%;
    height: 5em;
    margin-bottom: 0;
    grid-area: textbox;
  }

  button {
    grid-area: submit;
    width: 200px;
    padding: 10px;
    justify-self: center;
  }

  textarea {
    width: 100%;
    height: 4em;
    margin-bottom: 1em;
    align-self: center;
  }

  h2 {
    margin-bottom: 1em;
    padding-top: 1em;
    border-top: 2px solid black;
  }

  .inputs {
    /* width: 500px; */
    width: 100%;
    /* outline: auto; */
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .inputs label {
    display: flex;
    flex-direction: column;
    align-items: start;
    /* border: 1px solid black; */
    padding: 10px;
  }

  #correctiveAction {
    grid-column: span 2;
  }

</style>