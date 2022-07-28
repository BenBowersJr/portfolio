
<script>
  import {onMount} from 'svelte'
  import {createEventDispatcher} from 'svelte'
  const dispatch = createEventDispatcher()

  export let data

  let status=undefined, WONum, PONum, downtimeMin, description, equipName

  let why1, why2, why3 , why4, why5
  
  function submit() {
    let whys = {why1, why2, why3 , why4, why5}
    let formData = {
      status,
      equipName,
      downtimeMin,
      WONum,
      PONum,
      description,
      whys
    }
    status=undefined, WONum=undefined, downtimeMin=undefined, description=undefined, equipName=undefined, whys = undefined
    dispatch('editLog', {formData})
  }
</script>

<main>
  <h2>Update Daily Log</h2>
  <form on:submit|preventDefault="{submit}">
    <div class="input">
      <p>Status: </p>
      <select >
        <option value="{undefined}" disabled hidden selected>-- Select new Status --</option>
        <option value="In Progress">In Progress</option>
        <option value="Complete">Complete</option>
        <option value="Not Complete">Not Complete</option>
      </select>
    </div>
    

    <div class="input">
      <p>Equipment Name:</p>
      <input  type="text" placeholder="{data.equipName}">
    </div>
    
    {#if downtimeMin > 15}
      <div class="input">
        <p>Downtime: </p>
        <input type="number" placeholder="5 Whys needed">
      </div>
      <div class="why-container">
        <div class="input">
          <p>Why 1:</p>
          <textarea bind:value="{why1}" required type="text"></textarea>
        </div>

        <div class="input">
          <p>Why 2:</p>
          <textarea bind:value="{why2}" required type="text"></textarea>
        </div>

        <div class="input">
          <p>Why 3:</p>
          <textarea bind:value="{why3}" required type="text"></textarea>
        </div>

        <div class="input">
          <p>Why 4:</p>
          <textarea bind:value="{why4}" required type="text"></textarea>
        </div>

        <div class="input">
          <p>Why 5:</p>
          <textarea bind:value="{why5}" required type="text"></textarea>
        </div>
      </div>
    {:else}
      <div class="input">
        <p>Downtime: </p>
        <input bind:value='{downtimeMin}' type="number" placeholder="{data.downtimeMin}">
      </div>
    {/if}

    <div class="input">
      <p>Work Order:</p>
      <input bind:value='{WONum}' type="number" placeholder="{data.WONum}">
    </div>

    <div class="input">
      <p>Purchase Order:</p>
      <input bind:value='{PONum}' type="number" placeholder="{data.PONum}">
    </div>

    <div class="input">
      <p>Description</p>
      <textarea bind:value="{description}" placeholder="{data.description}"></textarea>
    </div>
  
    <button>Update Daily Log</button>
  </form>
</main>

<style>
  main {
    border: 1px solid black;
    border-radius: 10px;
    padding: 1em;
    width: 500px;
  }
  h2 {
    text-align: center;
    text-decoration: underline;
    margin-bottom: 1em;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  p {
    display: flex;
    justify-content: space-between;
    text-decoration: underline;
    font-weight: bold;
    padding: .5em;
  }
  input {
    margin-left: 2em;
    text-decoration: none;
  }
  button {
    margin-top: 1em;
    height: 50px;
  }

  textarea {
    width: 300px;
    height: 50px;
  }

  .input {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
  }

  .why-container {
    margin-left: .5em;
    display: flex;
    flex-direction: column;
  }
  .why-container p {
    margin: 0;
    padding: 0;
  }
</style>