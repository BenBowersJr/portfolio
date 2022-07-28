<!-- <script context='module'>
  export async function load({session}) {
    if (session.auhted && (session.user.role == 'Supervisor' || session.user.role =='admin')) {
      return {
        props: session
      }
    } else {
      return {
        status: 301,
        redirect: '/login'
      }
    }
  }
</script> -->

<script>
  // @ts-ignore
  import {session, page} from '$app/stores'
  import {get} from 'svelte/store'
  import {onMount} from 'svelte'
  import MwpHazards2 from '$lib/components/MWP_Hazards2.svelte'
  
  let sessionData = get(session)
  let id = $page.params.id
  export let risklvl = 'low'
  export let updateData


  let useremail = sessionData.user.email
  let initals = useremail[0] + useremail[useremail.indexOf('.')+1]
  initals = initals.toUpperCase()
  
  // header Data
  let equipment, area, date, WONum = '', risk=risklvl, receivedTime, startTime, endTime, returnTime, productionCheckbox
  
  // textbox Data
  let workInstructions, workPerformed, maintenanceManager, productionManager, teamMember = sessionData.user.username, otherTeamMember
  $: maintenanceManager, productionManager
  
  // Mitigation Data
  let mitigation0, mitigation1, mitigation2, mitigation3, mitigation4, mitigation5, mitigation6, mitigation7, mitigation8, mitigation9
  
  // hazard Data
  let selectedHazards = [], additionalOne, additionalTwo

  // Page2 Data
  let conditionChange, areaCondition, safetyBrief, authorizer
  
  // Signature and Supervisor Data
  let gettingSignature = false
  let selectedSuper, selectedTeamMember, personellNum, signatureType, msg
  let maintenanceManagerlvl, productionManagerlvl
  function submitSignature() {
    msg = ''
    if (selectedSuper) {
      if (selectedSuper.personellNum == personellNum) {
        if (signatureType == 'maintenance' && (selectedSuper.username != productionManager && selectedSuper.username != teamMember && selectedSuper.username != otherTeamMember)) {
          maintenanceManager = selectedSuper.username
          maintenanceManagerlvl = selectedSuper.role
        } else if (signatureType == 'production' && (selectedSuper.username != maintenanceManager && selectedSuper.username != teamMember && selectedSuper.username != otherTeamMember)) {
          productionManager = selectedSuper.username
          productionManagerlvl = selectedSuper.role
        } else if (signatureType == 'otherteam' && (selectedSuper.username != teamMember && selectedSuper.username != maintenanceManager && selectedSuper.username != productionManager)) {
          otherTeamMember = selectedSuper.username
        } else {
          msg = "Same user cannot sign multiple fields"
          personellNum = undefined
          return
        }
  
        selectedSuper = undefined
        personellNum = undefined
        signatureType = undefined
        gettingSignature = false
        msg = ''
      } else {
        msg = "Personell # does not match"
        personellNum = undefined
      }
    }

    if (selectedTeamMember) {
      if (selectedTeamMember.personellNum == personellNum) {
        otherTeamMember = selectedTeamMember.username
        personellNum = undefined
        signatureType = undefined
        gettingSignature = false
        msg = ''
      } else {
        msg = 'Personell # does not Match'
        personellNum = undefined
      }

    }
  }

  //if this is data from the route update MWP values with that data, also changes the state 
  let updating
  if (updateData) {
    updating = true

    equipment = updateData.equipment || ''
    area = updateData.area || ''
    date = updateData.date || ''
    WONum = updateData.WONum || ''
    risk = updateData.risk || ''
    receivedTime = updateData.receivedTime || ''
    startTime = updateData.startTime || ''
    endTime = updateData.endTime || ''
    returnTime = updateData.returnTime || ''
    productionCheckbox = updateData.productionCheckbox || false
    workInstructions = updateData.workInstructions || ''
    workPerformed = updateData.workPerformed || ''
    maintenanceManager = updateData.maintenanceManager || ''
    productionManager = updateData.productionManager || ''
    teamMember = updateData.teamMember || ''
    otherTeamMember = updateData.otherTeamMember || ''
    mitigation0 = updateData.mitigation0 || ''
    mitigation1 = updateData.mitigation1 || ''
    mitigation2 = updateData.mitigation2 || ''
    mitigation3 = updateData.mitigation3 || ''
    mitigation4 = updateData.mitigation4 || ''
    mitigation5 = updateData.mitigation5 || ''
    mitigation6 = updateData.mitigation6 || ''
    mitigation7 = updateData.mitigation7 || ''
    mitigation8 = updateData.mitigation8 || ''
    mitigation9 = updateData.mitigation9 || ''
    if (updateData.selectedHazards) {
      updateData.selectedHazards.forEach(el => {
        selectedHazards.push({id: el.id, value: el.value})
      });
    }
    additionalOne = updateData.additionalOne || ''
    additionalTwo = updateData.additionalTwo || ''
    conditionChange = updateData.conditionChange || ''
    areaCondition = updateData.areaCondition || ''
    safetyBrief = updateData.safetyBrief || ''
    authorizer = updateData.authorizer || ''
  }

  //gets supervisors from faunaDB
  let supervisors
  let allTeamMembers
  onMount(async()=> {
    const req = await fetch('/forms/MWP.json', {method: 'POST', body: JSON.stringify({get: 'leads', plant: sessionData.user.plant})})
    const req2 = await fetch('/forms/MWP.json', {method: 'POST', body: JSON.stringify({get: 'team', plant: sessionData.user.plant})})
    supervisors = await req.json()
    allTeamMembers = await req2.json()
  })
  
  let canSubmit = false
  $: checkSubmit(maintenanceManager, productionManager, teamMember, otherTeamMember,  authorizer, risk, productionCheckbox, selectedHazards)
  function checkSubmit(maintenanceManager, productionManager, teamMember, otherTeamMember, authorier, risk, production, selectedHazards) {
    if (risk == 'low') {
      // if production checkbox is selected
      if (production) {
        if ((teamMember && productionManager) || (teamMember && otherTeamMember) || (teamMember && otherTeamMember && productionManager)) {
          canSubmit = true
        } else {
          canSubmit = false
        }
        return
      } else {
        // just checks if team member and other team member signed
        if (teamMember || (teamMember && otherTeamMember)) {
          canSubmit = true
        } else {
          canSubmit = false
        }
      }
    }

    if (risk == 'medium') {
      if (production) {
        if (productionManager && otherTeamMember && maintenanceManager) {
          canSubmit = true
        } else {
          canSubmit = false;
        }
      } else {
        if (otherTeamMember && maintenanceManager) {
          canSubmit  = true
        } else {
          canSubmit = false
        }
      }
    }

    if (risk == 'high') {
      if (production) {
        if (maintenanceManager && otherTeamMember && authorier && productionManager) {
          canSubmit = true
        } else {
          canSubmit = false
        }
      } else {
        if (maintenanceManager && otherTeamMember && authorier) {
          canSubmit = true
        } else {
          canSubmit = false
        }
      }
    }

    if (selectedHazards.length == 0) {
      canSubmit = false
    }
  }

  let waitingForEmail = false, emailmsg
  async function submitMWP() {
    if (!updating) {
      waitingForEmail = true
      const req = await fetch('../.netlify/functions/makepdf', {
      method: 'POST',
      body: JSON.stringify({
        equipment,
        area,
        date,
        WONum,
        risk,
        receivedTime,
        startTime,
        endTime,
        returnTime,
        productionCheckbox,
        workInstructions,
        workPerformed,
        maintenanceManager,
        productionManager,
        teamMember,
        otherTeamMember,
        mitigation0, mitigation1, mitigation2, mitigation3, mitigation4, 
        mitigation5, mitigation6, mitigation7, mitigation8, mitigation9,
        selectedHazards,
        additionalOne,
        additionalTwo,
        conditionChange,
        areaCondition,
        safetyBrief,
        authorizer,
        initals,
        email: sessionData.user.email,
        plant: sessionData.user.plant,
        status: 'In Progress',
        id: id
        })
      })
      const res = await req.json()
      emailmsg = res.pdf
      waitingForEmail = false
    } else {
      // still have to write updating script
      waitingForEmail = true
      const req = await fetch('https://tyson-mms.com/.netlify/functions/makepdf', {
      method: 'PUT', 
      body: JSON.stringify({
        equipment,
        area,
        date,
        WONum,
        risk,
        receivedTime,
        startTime,
        endTime,
        returnTime,
        productionCheckbox,
        workInstructions,
        workPerformed,
        maintenanceManager,
        productionManager,
        teamMember,
        otherTeamMember,
        mitigation0, mitigation1, mitigation2, mitigation3, mitigation4, 
        mitigation5, mitigation6, mitigation7, mitigation8, mitigation9,
        selectedHazards,
        additionalOne,
        additionalTwo,
        conditionChange,
        areaCondition,
        safetyBrief,
        authorizer,
        initals,
        email: sessionData.user.email,
        plant: sessionData.user.plant,
        status: 'Complete',
        id: id
        })
      })
      const res = await req.json()
      emailmsg = res.pdf
      waitingForEmail = false

      await new Promise(r => setTimeout(r, 2000));
      location.replace('/forms/MWP')
    }
  }

</script>

<main>
  <form on:submit|preventDefault="{submitMWP}">
    <div class="mainform">
      <!-- Header -->
      <header>
        <label class="equipment">Equipment Description: <input bind:value='{equipment}' type="text" required></label>
        <label class="production">During Production?:  <input bind:checked='{productionCheckbox}' type="checkbox"></label>
        <label class="area">Area: <input bind:value='{area}' type="text" required></label>
        <label class="date">Date: <input bind:value='{date}' type="date" required></label>

        {#if !updating}
          <label class="WO">WO#: <input bind:value='{WONum}' type="number" min=1000000000 max=9999999999 disabled></label>
          {:else}
          <label class="WO">WO#: <input bind:value='{WONum}' type="number" min=1000000000 max=9999999999 required></label>
        {/if}


        <div class="risklvl">
          <label for="risklvl">Risk Classification: </label>

          <div class="wrap">
            <label for="low">Low: </label>
            <input id="low" type="radio" value="low" bind:group="{risk}">
          </div>

          <div class="wrap">
            <label for="medium">Medium: </label>
            <input id="medium" type="radio" value="medium" bind:group="{risk}">
          </div>

          <div class="wrap">
            <label for="high">High: </label>
            <input id="high" type="radio" value="high" bind:group="{risk}">
          </div>
        </div>

      </header>

      <!-- Time -->
      <div class="time">
        <h2>TIME</h2>
        <div class="inputs">
          <label>Call Received: <input bind:value="{receivedTime}" type="time" required></label>
          <label>Technician Start: <input bind:value="{startTime}" type="time" required></label>

          {#if !updating}
            <label>Technician End: <input bind:value="{endTime}" type="time" disabled></label>
            {:else}
            <label>Technician End: <input bind:value="{endTime}" type="time" required></label>
          {/if}

          {#if !updating}
            <label>Return to Operation: <input bind:value="{returnTime}" type="time" disabled></label>
            {:else}
            <label>Return to Operation: <input bind:value="{returnTime}" type="time" required></label>
          {/if}
        </div>
      </div>

      <!-- Hazards -->
      <div class="hazards">
        <div class="firstcol">
          <div class="hazardItem">
            <span>Item</span>
            <p>Hazard Recognition</p>
            <span class="p2">X=RISK</span>
          </div>

          <div class="hazardItem break">
            <h3>Qualifications and Training</h3>
          </div>
          
          <div class="hazardItem">
            <span>1</span>
            <p>Trained & Understand Maint. Work Permit</p>
            <input bind:group="{selectedHazards}" value={{id: 1, value: "Trained & Understand Maint. Work Permit"}} type="checkbox">
          </div>
          
          <div class="hazardItem">
            <span>2</span>
            <p>Technician Qualified</p>
            <input bind:group="{selectedHazards}" value={{id: 2, value: "Technician Qualified"}} type="checkbox">
          </div>
          
          <div class="hazardItem">
            <span>3</span>
            <p>Tools Available</p>
            <input bind:group="{selectedHazards}" value={{id: 3, value: "Tools Available"}} type="checkbox">
          </div>
          
          <div class="hazardItem break">
            <h3>Check Above, Below, and Around all Work Areas </h3>
          </div>
          
          <div class="hazardItem break2">
            <h3>Falls / Struck By / Caught Between / Burns </h3>
          </div>
          
          <div class="hazardItem">
            <span>4</span>
            <p>Guarding Concerns</p>
            <input bind:group="{selectedHazards}" value={{id: 4, value: "Guarding Concerns"}} type="checkbox">
          </div>
          
          <div class="hazardItem">
            <span>5</span>
            <p>Stored Energy</p>
            <input bind:group="{selectedHazards}" value={{id: 5, value: "Stored Energy"}} type="checkbox">
          </div>
          
          <div class="hazardItem">
            <span>6</span>
            <p>Loose or Baggy Clothing</p>
            <input bind:group="{selectedHazards}" value={{id: 6, value: "Loose or Baggy Clothing"}} type="checkbox">
          </div>
          
          <div class="hazardItem">
            <span>7</span>
            <p>Hoses or Open Drains</p>
            <input bind:group="{selectedHazards}" value={{id: 7, value: "Hoses or Open Drains"}} type="checkbox">
          </div>
          
          <div class="hazardItem">
            <span>8</span>
            <p>Crush Hazards Exist</p>
            <input bind:group="{selectedHazards}" value={{id: 8, value: "Crush Hazards Exist"}} type="checkbox">
          </div>
          
          <div class="hazardItem">
            <span>9</span>
            <p>Working Under Elevated Materials</p>
            <input bind:group="{selectedHazards}" value={{id: 9, value: "Working Under Elevated Materials"}} type="checkbox">
          </div>
          
          <div class="hazardItem">
            <span>10</span>
            <p>Excessive Push/Pull/Lift</p>
            <input bind:group="{selectedHazards}" value={{id: 10, value: "Excessive Push/Pull/Lift"}} type="checkbox">
          </div>
          
          <div class="hazardItem">
            <span>11</span>
            <p>Requires Additional PPE</p>
            <input bind:group="{selectedHazards}" value={{id: 11, value: "Requires Additional PPE"}} type="checkbox">
          </div>

          <div class="hazardItem">
            <span>12</span>
            <p>Slip/Trip/Fall Exposure</p>
            <input bind:group="{selectedHazards}" value={{id: 12, value: "Slip/Trip/Fall Exposure"}} type="checkbox">
          </div>
          
          <div class="hazardItem break">
            <span>Item</span>
            <h3>Risk Mitigation Action</h3>
          </div>

          <div class="HazardActions">
            <div class="actionItem">
              {#if selectedHazards.length > 0}
                <span>{selectedHazards[0].id}</span>
                <input class='action' type="text" placeholder="{selectedHazards[0].value}" required bind:value='{mitigation0}'>
              {:else}
                <span></span>
                <input class='action' type="text" disabled>
              {/if}
            </div>

            <div class="actionItem">
              {#if selectedHazards.length > 1}
                <span>{selectedHazards[1].id}</span>
                <input class='action' type="text" placeholder="{selectedHazards[1].value}" required  bind:value='{mitigation1}'>
              {:else}
                <span></span>
                <input class='action' type="text" disabled>
              {/if}
            </div>

            <div class="actionItem">
              {#if selectedHazards.length > 2}
                <span>{selectedHazards[2].id}</span>
                <input class='action' type="text" placeholder="{selectedHazards[2].value}" required bind:value='{mitigation2}'>
              {:else}
                <span></span>
                <input class='action' type="text" disabled>
              {/if}
            </div>

            <div class="actionItem">
              {#if selectedHazards.length > 3}
                <span>{selectedHazards[3].id}</span>
                <input class='action' type="text" placeholder="{selectedHazards[3].value}" required  bind:value='{mitigation3}'>
              {:else}
                <span></span>
                <input class='action' type="text" disabled>
              {/if}
            </div>

            <div class="actionItem">
              {#if selectedHazards.length > 4}
                <span>{selectedHazards[4].id}</span>
                <input class='action' type="text" placeholder="{selectedHazards[4].value}" required  bind:value='{mitigation4}'>
              {:else}
                <span></span>
                <input class='action' type="text" disabled>
              {/if}
            </div>
          </div>
        </div>

        <div class="secondcol"> 
    
          <div class="hazardItem">
            <span>Item</span>
            <p>Hazard Recognition</p>
            <span class="p2">X=RISK</span>
          </div>
    
          <div class="hazardItem">
            <span>13</span>
            <p>Near Moving Equipment (E-Stop Accessible)</p>
            <input bind:group="{selectedHazards}" value={{id: 13, value: "Near Moving Equipment"}} type="checkbox">
          </div>
    
          <div class="hazardItem">
            <span>14</span>
            <p>Heat Sources/ Hot Surfaces</p>
            <input bind:group="{selectedHazards}" value={{id: 14, value: "Heat Sources/Hot Surfaces"}} type="checkbox">
          </div>
    
          <div class="hazardItem">
            <span>15</span>
            <p>Chemical Exposure</p>
            <input bind:group="{selectedHazards}" value={{id: 15, value: "Chemical Exposure"}} type="checkbox">
          </div>
    
          <div class="hazardItem">
            <span>16</span>
            <p>Lock Out Tag Out Concerns</p>
            <input bind:group="{selectedHazards}" value={{id: 16, value: "Lock Out Tag Out Concerns"}} type="checkbox">
          </div>
    
          <div class="hazardItem">
            <span>17</span>
            <p>Power Industrial Truck (PIT) Traffic</p>
            <input bind:group="{selectedHazards}" value={{id: 17, value: "Power Industrial Truck"}} type="checkbox">
          </div>
    
          <div class="hazardItem">
            <span>18</span>
            <p>Awkward position / Range of Motion</p>
            <input bind:group="{selectedHazards}" value={{id: 18, value: "Awkward Position/Range of Motion"}} type="checkbox">
          </div>
    
          <div class="hazardItem">
            <span>19</span>
            <p>Limited Communication (Audio & Visual)</p>
            <input bind:group="{selectedHazards}" value={{id: 19, value: "Limited Communication"}} type="checkbox">
          </div>
    
          <div class="hazardItem">
            <span>20</span>
            <p>Sharp Objects</p>
            <input bind:group="{selectedHazards}" value={{id: 20, value: "Sharp Objects"}} type="checkbox">
          </div>
    
          <div class="hazardItem">
            <span>21</span>
            <p>Extreme Dust, Fumes, or Environmental Hazards</p>
            <input bind:group="{selectedHazards}" value={{id: 21, value: "Extreme Dust, Fumes, or Environmental Hazards"}} type="checkbox">
          </div>
    
          <div class="hazardItem">
            <span>22</span>
            <p>Area Cleared to Work</p>
            <input bind:group="{selectedHazards}" value={{id: 22, value: "Area Cleared to Work"}} type="checkbox">
          </div>
    
          <div class="hazardItem">
            <span>23</span>
            <p>Working/Fall from Heights</p>
            <input bind:group="{selectedHazards}" value={{id: 23, value: "Working/Fall from Heights"}} type="checkbox">
          </div>
    
          <div class="hazardItem break2">
            <h3>Additional Hazards</h3>
          </div>
    
          <div class="hazardItem">
            <span>24</span>
            <input bind:value="{additionalOne}" type="text">
            <input bind:group="{selectedHazards}" value={{id: 24, value: additionalOne}} type="checkbox">
          </div>
          
          <div class="hazardItem">
            <span>25</span>
            <input bind:value="{additionalTwo}" type="text">
            <input bind:group="{selectedHazards}" value={{id: 25, value: additionalTwo}} type="checkbox">
          </div>
    
          <div class="hazardItem break">
            <h3>I have reviewed ALL hazards ({initals})</h3>
          </div>

          <div class="hazardItem break">
            <span>Item</span>
            <h3>Risk Mitigation Action</h3>
          </div>

          <div class="HazardActions">
            <div class="actionItem">
              {#if selectedHazards.length > 5}
                <span>{selectedHazards[5].id}</span>
                <input class='action' type="text" placeholder="{selectedHazards[5].value}" required  bind:value='{mitigation5}'>
              {:else}
                <span></span>
                <input class='action' type="text" disabled>
              {/if}
            </div>
            <div class="actionItem">
              {#if selectedHazards.length > 6}
                <span>{selectedHazards[6].id}</span>
                <input class='action' type="text" placeholder="{selectedHazards[6].value}" required  bind:value='{mitigation6}'>
              {:else}
                <span></span>
                <input class='action' type="text" disabled>
              {/if}
            </div>
            <div class="actionItem">
              {#if selectedHazards.length > 7}
                <span>{selectedHazards[7].id}</span>
                <input class='action' type="text" placeholder="{selectedHazards[7].value}" required  bind:value='{mitigation7}'>
              {:else}
                <span></span>
                <input class='action' type="text" disabled>
              {/if}
            </div>
            <div class="actionItem">
              {#if selectedHazards.length > 8}
                <span>{selectedHazards[8].id}</span>
                <input class='action' type="text" placeholder="{selectedHazards[8].value}" required bind:value='{mitigation8}'>
              {:else}
                <span></span>
                <input class='action' type="text" disabled>
              {/if}
            </div>
            <div class="actionItem">
              {#if selectedHazards.length > 9}
                <span>{selectedHazards[9].id}</span>
                <input class='action' type="text" placeholder="{selectedHazards[9].value}" required  bind:value='{mitigation9}'>
              {:else}
                <span></span>
                <input class='action' type="text" disabled>
              {/if}
            </div>
          </div>

        </div>
      </div>

      <!-- Text Box -->
      <div class="textbox">
        <div class="workinstructions">
          <h2>Problem Statement / Work Instructions</h2>
          <textarea bind:value="{workInstructions}" required placeholder="Explain the problem and how the work will be done."></textarea>
        </div>
        

        {#if !updating}
          <div class="workperformed">
            <h2>Work Performed</h2>
            <textarea bind:value="{workPerformed}" placeholder="Explain the work that was performed." disabled></textarea>
          </div>
          {:else}
          <div class="workperformed">
            <h2>Work Performed</h2>
            <textarea bind:value="{workPerformed}" placeholder="Explain the work that was performed." required></textarea>
          </div>
        {/if}

        <div class="confirms">
          <h2>High Agreement Confirmation</h2>

          <div class="signatures">
            <input bind:value="{maintenanceManager}" type="text" placeholder="Maintenance Management" disabled>
            <button type="button" on:click="{() => {gettingSignature = true; signatureType = 'maintenance'}}">Sign</button>
          </div>
          
          <div class="signatures">
            {#if productionCheckbox}
              <input bind:value="{productionManager}" type="text" placeholder="Production Management" disabled>
              <button type="button" on:click="{() => {gettingSignature = true; signatureType = 'production'}}">Sign</button>
            {:else}
              <input class="team" bind:value="{productionManager}" type="text" placeholder="Production Management" disabled>
            {/if}
          </div>
          
          <div class="signatures">
            <input class="team" bind:value="{teamMember}" type="text" placeholder="Team Member Performing Work" required disabled>
            <!-- <button on:click="{() => {gettingSignature = true; signatureType = 'team'}}">Sign</button> -->
          </div>
          
          <div class="signatures">
            <input bind:value="{otherTeamMember}" type="text" placeholder="Other Team Member Performing Work" disabled>
            <button type="button" on:click="{() => {gettingSignature = true; signatureType = 'otherteam'}}">Sign</button>
          </div>
          
          <p>NOTE: By signing Production and Maintenance Management agree that conditions are safe and ready for work. All risks have been identified with risk mitigation actions completed and reviewed with Management. Production and Maintencance further agree that the site has been properly prepared for safe work practices</p>
        </div>
      </div>
    </div>
  
    {#if gettingSignature && signatureType != 'otherteam'}
      <div class="signature">
        <form on:submit|preventDefault="{submitSignature}">
          <!-- Supervisor select HTML -->
          {#if supervisors}
          <select bind:value='{selectedSuper}' required>
            <option value="{undefined}" selected hidden disabled>-- SELECT USER --</option>
            {#each supervisors.data as supervisor}
              <option value="{supervisor.data}">{supervisor.data.username}</option>
            {/each}
          </select>
          {:else}
            <p>...Fetching Users...</p>
          {/if}
        
          <input type="password" placeholder="Personell Number" bind:value="{personellNum}" required>
        
          <div class="buttons">
            <input type="submit" value="Submit">
            <button on:click="{()=> {gettingSignature = false; msg = ''; personellNum = ''}}">Cancel</button>
          </div>
        
          {#if msg}
          <p class="msg">{msg}</p>
          {/if}
        </form>
      </div>
    {/if}
  
    {#if gettingSignature && signatureType == 'otherteam'}
      <div class="signature">
        <form on:submit|preventDefault="{submitSignature}">
          <!-- Supervisor select HTML -->
          {#if allTeamMembers}
            <select bind:value='{selectedTeamMember}' required>
              <option value="{undefined}" selected hidden disabled>-- SELECT TEAM MEMBER --</option>
              {#each allTeamMembers.data as teamMember}
                <option value="{teamMember.data}">{teamMember.data.username}</option>
              {/each}
            </select>
          {:else}
            <p>...Fetching Users...</p>
          {/if}
          
          <input type="password" placeholder="Personell Number" bind:value="{personellNum}" required>
          
          <div class="buttons">
            <input type="submit" value="Submit">
            <button on:click="{()=> {gettingSignature = false; msg = ''; personellNum = ''}}">Cancel</button>
          </div>
          
          {#if msg}
            <p class="msg">{msg}</p>
          {/if}
        </form>
      </div>
    {/if}

    {#if risk == 'high'}
      <div class="page2">
        <MwpHazards2 {productionManagerlvl} {maintenanceManagerlvl} {maintenanceManager} {productionManager} {teamMember} bind:authorizer={authorizer} bind:areaCondition='{areaCondition}' bind:conditionChange='{conditionChange}' bind:safetyBrief='{safetyBrief}'></MwpHazards2>
      </div>
    {/if}
  
    <!-- This controls when the user can Submit.... God its UGLY -->
    {#if !waitingForEmail}  
      {#if !emailmsg}
        {#if canSubmit == true}
          {#if updating}
            <button type="submit" class="submit">Submit Updates</button>
          {:else}
            <button type="submit" class="submit">Submit</button>
          {/if}
        {:else}
          {#if selectedHazards.length == 0}
            <p class="submitp">Need More Risk Mitigations, Cant Submit.</p>
            {:else}
            <p class="submitp">More Signatures Needed, Cant Submit.</p>
          {/if}
          <button type="submit" class="submit" disabled>Submit</button>
          {/if}
      {:else}
        {#if !updating}
          <p class='email'>{emailmsg} See it in <a href="MWP/feed">Feed</a></p>
        {:else}
          <p class='email'>{emailmsg}</p>
        {/if}
      {/if}
      
      {:else}
        {#if !updating}
          <p class='email'>...Making MWP.</p>
        {:else}
          <p class='email'>...Making PDF and sending Email, Please Wait.</p>
        {/if}
    {/if}

    </form>
</main>


<style>

  .email {
    margin: 2em;
    font-weight: bold;
    font-size: 1.5em;
  }

  .submit {
    margin: 2em;
    padding: 1em;
    width: 20%;
  }
  .submitp {
    margin: 2em;
    color: red;
    font-size: 1.5em;
  }

  .msg {
    color: red;
  }

  main {
    margin: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;

    height: 100%;
  }

  .signature {
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

  .signature form {
    width: 30vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    background-color: lightgray;
    color: black;
  }

  .signature select {
    margin: 1em;
  }

  .signature .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 200px;
    margin-top: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mainform {
    display: grid;
    grid-template-columns: 1fr 1fr .8fr;
    grid-template-areas: 
    "header header time"
    "hazards hazards textbox"
    "mitigation mitigation signatures";
    border: 2px solid black;
    width: 80vw;
  }
  
  /* MAIN FORM HEADER STYLES */
  .mainform header {
    grid-area: header;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    "equipment production"
    "area WO"
    "date risklvl";
    width: 100%;
    height: 125px;
    border: 1px solid black;
    padding: 0px 20px;
  }

  header .equipment {
    grid-area: equipment;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }

  header label {
    display: flex;
    /* border: 1px solid; */
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  header input {
    width: 60%;
    margin-right: 2em;
    height: 2em;
  }

  header input[type="checkbox"] {
    width: 20px;
    justify-self: start;
  }
  header .area {
    grid-area: area;
  }
  header .WO {
    grid-area: WO;
  }
  header .date {
    grid-area: date;
  }
  header .production {
    grid-area: production;
    width: 50%;
  }
  .risklvl {
    display: flex;
    justify-content: space-evenly;
  }
  .risklvl input {
    margin-left: 1em;
  }

  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrap input {
    display: block;
    width: 2em;
  }
  /* MAIN FORM HEADER STYLES */

  /* MAINFORM TIME STYLES */
  .mainform .time {
    border: 1px solid black;
    height: 125px;
    grid-area: time;
    display: flex;
  }
  
  .time label {
    /* border-bottom: 1px solid; */
    margin: 0;
    padding: 0;
    width: 300px;
    display: flex;
    justify-content: space-between;
  }

  .time h2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 1em;
    overflow-wrap: break-word;
    border-right: 1px solid;
  } 

  .time .inputs {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    /* border: 1px solid green; */

  }
  /* MAINFORM TIME STYLES */

  /* HARZARD STYLES */
  .hazards {
    grid-area: hazards;
    border: 1px solid black;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: repeat(16, 1fr); */
    grid-template-areas: 'firstcol secondcol';
  }

  .firstcol {
    grid-area: firstcol;
  }
  .secondcol {
    grid-area: secondcol;
  }
  
  .hazardItem {
    display: grid;
    grid-template-columns: 1fr 20fr 1fr;
    grid-template-areas: 
    "item hazard select";
    border: 1px solid black;
    /* grid-area: firstcol; */
    /* overflow: auto; */
  }

  .hazardItem h3 {
    grid-area: hazard;
    padding: 5px;
    text-align: center;
  }
  .hazardItem .p2 {
    grid-area: select;
    padding: 5px;
    text-align: center;
    color: red;
    font-weight: bold;
    font-size: .6em;
    border: 0;
  }

  .break {
    background-color: lightgray;
  }
  .break2 {
    background-color: rgb(236, 202, 158);
  }

  .hazardItem span {
    grid-area: item;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid;
    height: 100%;
    width: 40px;
    font-weight: bold;
  }
  .hazardItem p {
    grid-area: hazard;
    width: auto;
    text-align: center;
    border-right: 1px solid;
    padding: 5px;
    height: 33px;
    color: black;
  }
  .hazardItem input {
    grid-area: select;
    width: 40px;
    height: 100%;
    color: black;
  }
  .secondcol .hazardItem input[type='text'] {
    grid-area: hazard;
    width: 100%;
    height: 32.3px;
  }
  
  .actionItem {
    display: grid;
    grid-template-columns: 50px auto;
    grid-template-areas: 'item action';

    width: auto;
  }

  .actionItem span {
    grid-area: item;
    width: 40px;
    border: 1px solid;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  } 
  .actionItem input {
    grid-area: action;
    margin-left: -10px;
    height: 32.3px;
  } 



  /* TEXTBOX STYLES */
  .textbox {
    height: 448px;
  } 

  .textbox h2 {
    text-align: center;
    border: 1px solid #000;
    padding: 3px;
    /* height: 32.3px; */
  }

  .textbox textarea {
    width: 100%;
    height: 187px;
    padding: 5px;
    text-align: justify;
    resize: none;
  }

  .textbox .confirms {
    display: flex;
    flex-direction: column;
  }

  .confirms p {
    font-size: .9em;
    text-align: justify;
    padding: 5px;
    width: 100%;
    text-size-adjust: auto;
    height: 100%;
    margin-bottom: 10px;
  }

  .signatures input {
    width: 79%;
    height: 35px;
  }

  .signatures .team {
    width: 100%;
  }

  .signatures button {
    height: 100%;
    width: 19%;
  }

  /* TEXTBOX STYLES */

  input[type="radio"]{
    -webkit-appearance: radio;
}
</style>