<script>
  import {createEventDispatcher} from 'svelte'
  import {onMount} from 'svelte'
  // @ts-ignore


  
  let gettingSignature = false
  export let authorizer, safetyBrief, conditionChange, areaCondition

  export let maintenanceManagerlvl, productionManagerlvl, maintenanceManager, productionManager, teamMember
  let selectedSuper, personellNum, msg
  


</script>

<main>
  <div class="box-container">
    <h2>Safety Briefing: Group Discussion and Job Assignment</h2>

    <p class="description">All team members must be present for the Safety Brief exposure review. List each Hourly Team Member and tasks they are performing.</p>

    <textarea bind:value='{safetyBrief}' placeholder="Safety Briefing" required></textarea>

    <div class="signature">
      <input bind:value="{authorizer}" type="text" placeholder="Authorizer Signature" disabled>
      <button type="button" on:click="{() => {gettingSignature = true}}">Sign</button>
    </div>
  </div>

  <div class="box-container">
    <h2>Maintenance Work Permit Conditions</h2>

    <p class="description">To be completed if parts, equipment, tools are unavailable or change in the work scope. Management confirms equipment is properly tagged out of service and work space is managed. Permit expires for the following conditions: shift change, work completed, or becomes planned and scheduled</p>

    <textarea bind:value='{conditionChange}' placeholder="Reason for Condition Change"></textarea>
  
    <textarea  bind:value='{areaCondition}' placeholder="Condition of equipment and work area"></textarea>
  </div>

  {#if gettingSignature}
    <div class="signature-overlay">
      <form on:submit|preventDefault="{submitSignature}">
        <!-- Supervisor select HTML -->
        {#if supervisors}
          <select bind:value='{selectedSuper}' required>
            <option value="{undefined}" selected hidden required>-- SELECT USER --</option>
            {#each supervisors.data as supervisor}
              <option value="{supervisor.data}">{supervisor.data.username}</option>
            {/each}
          </select>
        {:else}
          <p>...Error...</p>
        {/if}

        <input type="password" placeholder="Personell Number" bind:value="{personellNum}" required>

        <div class="buttons">
          <input type="submit" value="Submit">
          <button type="submit" on:click="{()=> gettingSignature = false}">Cancel</button>
        </div>

        {#if msg}
          <p class="msg">{msg}</p>
        {/if}
      </form>
    </div>
  {/if}
</main>

<style>

  .msg {
    color: red;
  }

  .signature {
    height: 50px;
  }
  .signature input {
    width: 90%;
    height: 40px;
  }

  .signature button {
    width: 9%;
    height: 40px;
  }

  .signature-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .signature-overlay form {
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    background-color: lightgray;
    color: black;
  }

  .signature-overlay select {
    margin: 1em;
  }
  .signature-overlay input {
    height: 30px;
  }

  .signature-overlay .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 200px;
    height: 30px;
    margin-top: 1em;
  }
  .buttons input {
    height: 30px;
  }

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 87vh;
  }

  .box-container {
    display: flex;
    flex-direction: column;
    margin: 3em;
    width: 50%;
    height: 70%;

    border: 3px solid;
  }

  .box-container p {
    padding: 1em;
    border-bottom: 3px solid #000;
  }

  textarea {
    height: 100%;
    padding: 10px;
    resize: none;
  }

  input {
    height: 50px;
  }

  h2 {
    text-align: center;
    border-bottom: 3px solid #000;
    padding: .3em;
  }

</style>