<script context='module'>
  export async function load({session}) {
    if (!session.authed) {
      return {
        status: 301,
        redirect: '/login'
      }
    } else {
      return {
        props: {
          session: session
        }
      }
    }
  }
</script>

<script>
  // @ts-ignore
  import {onMount} from 'svelte'
  // @ts-ignore
  import {goto} from '$app/navigation'
  export let session
  let data
  onMount(async ()=> {
    const req = await fetch('feed.json', {
      method: "POST",
      body: JSON.stringify({
        onMount: true,
        plant: session.user.plant
      })
    })
    const res = await req.json()
    data = res

  })
  
  let searchBy, searchCol = { id: 0, term: "Equipment" }, tableData
  $: search(searchBy, searchCol)
  function search(txt, col) {
    if (txt == undefined) {
      txt = ''
    }

    if (tableData) {
      let td, txtValue
      let tr = tableData.getElementsByTagName('tr')

      for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[col.id]
        if (td) {
          txtValue = td.textContent.toUpperCase() || td.innerText.toUpperCase()
          let searchByUpper = txt.toUpperCase()
          if(txtValue.includes(searchByUpper)) {
            tr[i].style.display = ''
          } else {
            tr[i].style.display = 'none'
          }
        }
      }
    }
  }
</script>


<main>
  <h1>MWP Search page</h1>

  {#if data}

    <div class="search">
      <label>Search Column: 
        <select bind:value="{searchCol}">
          <option selected value="{{ id: 0, term: "Equipment" }}">Equipment</option>
          <option selected value="{{ id: 1, term: "Team Member" }}">Team Member</option>
          <option selected value="{{ id: 2, term: "Area" }}">Area</option>
          <option selected value="{{ id: 3, term: "Date" }}">Date</option>
          <option selected value="{{ id: 4, term: "Risk" }}">Risk</option>
          <option selected value="{{ id: 5, term: "Work Instructions" }}">Work Instructions</option>
        </select>
      </label>
      <label>Search {searchCol.term}: <input bind:value="{searchBy}" type="text"></label>
    </div>

    <table>
      <colgroup>
        <col class='Equipment'>
        <col class='Team Member'>
        <col class='Area'>
        <col class='Date'>
        <col class='Risk'>
        <col class='Work Instructions'>
        <col class='Edit'>
      </colgroup>
  
      <thead>
        <tr>
          <th>Equipment</th>
          <th>Team Member</th>
          <th>Area</th>
          <th>Date</th>
          <th>Risk</th>
          <th>Work Instructions</th>
          <th>Edit</th>
        </tr>
      </thead>
  
      <tbody bind:this="{tableData}">
        {#each data.data as mwp}
          <tr>
            <td>{mwp.data.equipment}</td>
            <td>{mwp.data.teamMember}</td>
            <td>{mwp.data.area}</td>
            <td>{mwp.data.date}</td>
            <td>{mwp.data.risk}</td>
            <td>{mwp.data.workInstructions}</td>
            <td><button on:click="{goto(`feed/${mwp.ref['@ref'].id}`)}">Edit</button></td>
          </tr>
        {/each}
      </tbody>
    </table>

  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 1em;
    padding: 1em;
    
  }

  h1 {
    text-align: center;
  }

  table {
    width: 100%;
    max-height: 80%;
    border-collapse: collapse;
  }
  th {
    font-weight: bolder;
    font-size: 1.1em;
    text-decoration: underline;
    height: 2.5em;
    background-color: lightyellow;
    color: black;
  }
  table, th, td {
    border: 1px solid black;
  }
  td {
    padding: 5px;
  }
  tbody tr:nth-child(odd) {
    background-color: whitesmoke;
  }
  tbody tr:nth-child(even) {
    background-color: lightgray;
  }

  button {
    width: 100%;
    height: 100%;
  }
</style>