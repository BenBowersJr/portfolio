<script>
  // @ts-ignore
  import {session} from '$app/stores'
  import {onMount} from 'svelte'

  let plant = $session.user.plant

  // export let data
  let mountData, tableData, searchCol = {id: 0, term: "Department"}
  let searchBy = ''

  onMount(async ()=> {
    const req = await fetch('feed.json', {
      method: 'POST',
      body: JSON.stringify({onMount: true, plant: plant })
    })
    const res = await req.json()

    mountData = res
    mountData.data.reverse()
  })

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
  <h1>Search DailyLogs</h1>
  <p class='small'><small>Logs shown are "Not Complete", "In Progress", and "Parts Ordered" </small></p>
  

  <div class="search">
    <!-- <button>Page Back</button> -->
    <label>Search Column: 
      <select bind:value="{searchCol}">
        <option selected value="{{ id: 0, term: "Department" }}">Department</option>
        <option value="{{ id: 1, term: "Equipment Name" }}">Equipment Name</option>
        <option value="{{ id: 2, term: "Team" }}">Team</option>
        <option value="{{ id: 3, term: "DT" }}">DT</option>
        <option value="{{ id: 4, term: "DT Mins" }}">DT Mins</option>
        <option value="{{ id: 5, term: "Causing Dept" }}">Causing Dept</option>
        <option value="{{ id: 6, term: "Ordered" }}">Ordered</option>
        <option value="{{ id: 7, term: "WO Num" }}">WO Num</option>
        <option value="{{ id: 8, term: "PO Num" }}">PO Num</option>
        <option value="{{ id: 9, term: "Date" }}">Date</option>
        <option value="{{ id: 10, term: "Description" }}">Description</option>
        <option value="{{ id: 11, term: "Status" }}">Status</option>
        <option value="{{ id: 12, term: "User" }}">User</option>
      </select>
    </label>
    <label>Search {searchCol.term}: <input bind:value="{searchBy}" type="text"></label>
    <!-- <button>Page Forward</button> -->
  </div>


  <table>
    <colgroup>
      <col class='department'>
      <col class='equipment'>
      <col class='team'>
      <col class='downtime'>
      <col class='downtimeMins'>
      <col class='causing'>
      <col class='ordered'>
      <col class='WONum'>
      <col class='PONum'>
      <col class='date'>
      <col class='description'>
      <col class='status'>
      <col class='user'>
      <col class='whys'>
    </colgroup>

    <thead>
      <tr>
        <th>Department</th>
        <th>Equipment Name</th>
        <th>Team</th>
        <th>DT</th>
        <th>DT Mins</th>
        <th>Causing Dept</th>
        <th>ordered</th>
        <th>WO Num</th>
        <th>PO Num</th>
        <th>Date</th>
        <th>Description</th>
        <th>Status</th>
        <th>User</th>
        <th>Whys</th>
      </tr>
    </thead>

    {#if mountData}
      <tbody bind:this="{tableData}">
        {#each mountData.data as mdl}
          <tr>
            <td>{mdl.data.department}</td>
            <td>{mdl.data.equipName}</td>
            <td>{mdl.data.team}</td>
            <td>{mdl.data.downtime}</td>
            <td>{mdl.data.downtimeMin}</td>
            <td>{mdl.data.causingDept}</td>
            <td>{mdl.data.ordered}</td>
            <td>{mdl.data.WONum}</td>
            <td>{mdl.data.PONum}</td>
            <td>{mdl.data.date['@date']}</td>
            <td>{mdl.data.description}</td>
            <td>{mdl.data.status}</td>
            <td>{mdl.data.user}</td>
            <td>{mdl.data.whys}</td>
          </tr>
        {/each}
      </tbody>
    {/if}

  </table>
</main>

<svelte:head>
  <title>Maintenace Daily Log Status</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<style>
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












  
  
  table, th, td {
    border: 1px solid;
    padding: 5px;
  }
  main {
    width: 100%;
    height: 94vh;
    margin-top: 19px;
    padding: 20px;
    overflow-y: auto;
    font-family: 'Roboto';
  }

  input {
    width: min-content;
  }

  h1 {
    text-align: center;
    text-decoration: underline;
    margin-bottom: 0;
    font-family: 'Lora';
    font-weight: 500;
  }

  .small {
    text-align: center;
    margin-bottom: 5px;
  }

  .downtime {
    width: 10px;
  }
  .downtimeMins {
    width: 10px;
  }

  .search {
    text-align: center;
    padding: 10px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search label {
    margin: 0px 20px;
  }

  
  
</style>