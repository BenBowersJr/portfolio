<script>
  import MWPHazards from '$lib/components/MWPHazards.svelte'
  import { onMount } from 'svelte'
  // @ts-ignore
  import {page} from '$app/stores'

  let risklvl = 'low'
  let updateData
  onMount(async()=> {
    let id = $page.params.id
    const req = await fetch(id + '.json')
    const res = await req.json()

    updateData = {...res.data}
  })
</script>

<main>
  <h1>Updating MWP</h1>

  {#if updateData}
    <MWPHazards {risklvl} {updateData}></MWPHazards>
  {/if}
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 19px;
    overflow-y: auto;
  }
</style>