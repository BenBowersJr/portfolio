
<script>
  import Page1 from '$lib/components/TysonCopy/refrigeration/Page1.svelte';
  import Page2 from '$lib/components/TysonCopy/refrigeration/Page2.svelte';
  import Page3 from '$lib/components/TysonCopy/refrigeration/Page3.svelte';
  import Page4 from '$lib/components/TysonCopy/refrigeration/Page4.svelte';
  
  // @ts-ignore
  import { session } from "$app/stores";
  import { get as getStore } from "svelte/store";
  let sessionData = getStore(session)
  
  let page1Array, page2Array, page3Array, page4Array, submitting, msg
  async function submit() {
    alert('NOT FUNCTIONAL')
  }

  let formBind
  async function resetForm(){
    if (confirm("Are you sure you want to reset the form?")) {
      console.log("reseting form data")
      
      localStorage.removeItem("page1FormData")
      localStorage.removeItem("page2FormData")
      localStorage.removeItem("page3FormData")
      localStorage.removeItem("page4FormData")
  
      page1Array = {}
      page2Array = {}
      page3Array = {}
      page4Array = {}
  
      formBind.reset()
    }
  }
</script>

<svelte:head>
  <title>Refrigeration</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <h1>Refrigeration Daily Inspection</h1>
  <small>all fields outlined in red are required</small>

  <div class="buttons">
    <button type="button" on:click="{resetForm}">Reset Form</button>
  </div>

  <form on:submit|preventDefault="{submit}" bind:this="{formBind}">

    <Page1 bind:page1Array></Page1>
    <Page2 bind:page2Array></Page2>
    <Page3 bind:page3Array></Page3>
    <Page4 bind:page4Array></Page4>

    {#if msg}
      <p>{msg}</p>
    {:else}
      <p></p>
    {/if}
    <div class="buttons">
      {#if submitting}
        <button disabled>Submit</button>
        <button type="button" on:click="{resetForm}">Reset Form</button>
      {:else}
        <button>Submit</button>
        <button type="button" on:click="{resetForm}">Reset Form</button>
      {/if}
    </div>

  </form>
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    overflow-y: auto;
    height: 100%;
    padding-bottom: 5em;
    background-color: whitesmoke;
    color: black;
    font-family: 'Roboto Serif';
    font-size: 14px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto Serif';
    font-size: 15px;
  }

  button {
    width: 200px;
    height: 40px;
  }

  .buttons {
    display: flex;
    width: 700px;
    justify-content: space-evenly;
    margin: 20px;
    /* outline: 1px solid; */
  }

  h1 {
    /* margin-top: 100px; */
    text-align: center;
    text-decoration: underline;
    justify-self: flex-start;

    font-family: 'Lora';
    font-weight: 700;
  }

  small {
    color: crimson;
    margin-bottom: 20px;
    text-decoration: underline;
  }

  /* .reset {
    padding: 15px;
    padding-bottom: 30px;
    margin-bottom: 10px;

    text-align: center;
  } */
</style>