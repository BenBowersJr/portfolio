<script>
  let otherValue = null, fireExtinguisher, hotWorkOperator, contractorName, ExtinguisherOtherValue, fireWatchPerformer, fireWatchPerformerOtherValue, thermalCamera, thermalCameraDate
  let authDate, authPrint, authSignature, addAuthPrint, addAuthSignature, addAuthDate, operatorDate, operatorName, operatorSignature, startDate, endDate
  let fireWatchName, fireWatchSignature, fireWatchDate, closeAuthDate, closeAuthName, closeAuthSignature
  let inital1, inital2, inital3, inital4, inital5, inital6, inital7, inital8
  let r1, r2, r3 , r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21 
  
  function submit() {
    alert('NOT FUNCTIONAL')
  }
</script>

<main>
  <form>

    <header>
      <div class="container">
        <label>
          <span>Facility:</span> 
          <input class="inputFix" type="text">
        </label>
      </div>
      <div class="container">
        <label>
          <span>Hot Work Location: </span>
          <input class="inputFix" type="text">
        </label>
      </div>
      <div class="container">
        <label>
          <span>Work Order Number:</span> 
          <input class="inputFix" type="number">
        </label>
      </div>
      <div class="container">
        <label>
          <span>Description of Work (Material and Equipment): </span>
          <input class="inputFix" type="text"> 
        </label>
      </div>
      <div class="container">
        <label>
          <span>Permit Issued: </span>
          <input class="inputFix" type="date">
        </label>
      </div>
      <div class="container">
        <label>
          <span>Permit Expires: </span>
          <input class="inputFix" type="date">
        </label>
      </div>
  
      <div id="PSM-container">
        <label>
          <span>PSM Hot Work: </span>
          <input type="radio" name="psm" value="Yes">Yes
          <input type="radio" name="psm" value="No">No
        </label>
        <p>If yes, route completed permit to PSM Coordinator to file.</p>
      </div>
  
      <div id="TAR-container">
        <label>
          <span>Torch-Applied Roofing Project</span>
          <input type="radio" name="tar" value="Yes">Yes
          <input type="radio" name="tar" value="No">No
        </label>
        <p>If yes, conduct TAR Project Preconstruction Meeting with Contractor</p>
      </div>
  
      <p id="black-bar">Permit required for work involving open flames, heat, hot slag or sparks. Issue Permit only if no acceptable alterantives to hot work exist. <br> Examples of hot work include: burning, cutting, welding, brazing, soldering, grinding, thawing pipe and torch applied roof projects. </p>
    </header>
  
    <table>
      <tr>
        <th>Yes</th>
        <th>N/A</th>
        <th>General Required Precautions for all Hot Work</th>
      </tr>
  
      <tr>
        <td><input bind:group="{r1}" type="radio" name="r1" value="Yes"></td>
        <td><input bind:group="{r1}" type="radio" name="r1" value="N/A"></td>
        <td><p>Sprinklers and/or fire dectection systems are operating properly</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r2}" type="radio" name="r2" value="Yes"></td>
        <td></td>
        <td><p>Hot work equipment is in good working condition</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r3}" type="radio" name="r3" value="Yes"></td>
        <td></td>
        <td>
          <p>Proper fire extinguisher(s) present.  Check required type(s): 
            <input bind:group="{fireExtinguisher}" type="radio" name="fire" value="A"> A
            <input bind:group="{fireExtinguisher}" type="radio" name="fire" value="BC"> BC
            <input bind:group="{fireExtinguisher}" type="radio" name="fire" value="ABC"> ABC
            <input bind:group="{fireExtinguisher}" type="radio" name="fire" value="CO2"> CO<sub>2</sub>
            <input bind:group="{fireExtinguisher}" type="radio" name="fire" value="Other"> Other
            {#if fireExtinguisher == 'Other'}
              <input type="text" bind:value="{ExtinguisherOtherValue}">
            {/if}
            
          </p>
        </td>
      </tr>
  
      <tr>
        <td><input bind:group="{r4}" name="r4" value="Yes" type="radio"></td>
        <td></td>
        <td><p>Hot Work Operator(s) trained in hot work procedures and gas cylinder safety.</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r5}" name="r5" value="Yes" type="radio"></td>
        <td></td>
        <td><p>Fire Watch(s) trained in fire watch procedure, fire extinguisher use, and sounding fire alarm system. </p></td>
      </tr>
  
      <tr>
        <th>Yes</th>
        <th>N/A</th>
        <th>Additional Precautions Required within 35 feet of all Hot Work</th>
      </tr>
  
      <tr>
        <td><input bind:group="{r6}" name="r6" value="Yes" type="radio"></td>
        <td></td>
        <td><p>Equipment and floor is clean of combustible materials and there is no hazardous atmosphere.</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r7}" name="r7" value="Yes" type="radio"></td>
        <td><input bind:group="{r7}" name="r7" value="N/A" type="radio"></td>
        <td><p>Combustible materials and flammable liquids have been removed or protected (using fireproof tarps, shields, etc.).</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r8}" name="r8" value="Yes" type="radio"></td>
        <td><input bind:group="{r8}" name="r8" value="N/A" type="radio"></td>
        <td><p>All wall and floor openings, ducts, and conveyors that might carry hot slag or sparks to combustible material are covered or closed.</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r9}" name="r9" value="Yes" type="radio"></td>
        <td><input bind:group="{r9}" name="r9" value="N/A" type="radio"></td>
        <td><p>Team members have been notified that hot work will occur and have been protected, if necessary, using screens, barricades, etc. </p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r10}" name="r10" value="Yes" type="radio"></td>
        <td><input bind:group="{r10}" name="r10" value="N/A" type="radio"></td>
        <td><p>Combustible floors have been wetted, covered with damp sand, metal or fireproof tarps.</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r11}" name="r11" value="Yes" type="radio"></td>
        <td><input bind:group="{r11}" name="r11" value="N/A" type="radio"></td>
        <td><p>Steel members, pipes, etc. That could transmit heat to combustibles are identified and protected, if necessary using fireproof tarps, etc.</p></td>
      </tr>
  
      <tr>
        <th>Yes</th>
        <th>N/A</th>
        <th>Additional Precautions for Hot Work on or near Walls, Ceilings, or Roofs</th>
      </tr>
  
      <tr>
        <td><input bind:group="{r12}" name="r12" value="Yes" type="radio"></td>
        <td><input bind:group="{r12}" name="r12" value="N/A" type="radio"></td>
        <td><p>Combustible materials have been removed from opposite side of walls, ceilings, or roofs where hot work is performed.</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r13}" name="r13" value="Yes" type="radio"></td>
        <td><input bind:group="{r13}" name="r13" value="N/A" type="radio"></td>
        <td><p>Identified hazards of performing hot work near walls, partitions, ceilings, roofs, and protected with fireproof tarps or shields as necessary.</p></td>
      </tr>
  
      <tr>
        <th>Yes</th>
        <th>N/A</th>
        <th>Additional Precautions for Hot Work on Enclosed Equipment (tanks, containers, ducts, conveyors, etc.)</th>
      </tr>
      
      <tr>
        <td><input bind:group="{r14}" name="r14" value="Yes" type="radio"></td>
        <td><input bind:group="{r14}" name="r14" value="N/A" type="radio"></td>
        <td><p>Equipment cleaned of combustibles.</p></td>
      </tr>
      
      <tr>
        <td><input bind:group="{r15}" name="r15" value="Yes" type="radio"></td>
        <td><input bind:group="{r15}" name="r15" value="N/A" type="radio"></td>
        <td><p>Equipment purged of flammable liquids and explosive vapors.</p></td>
      </tr>
      
      <tr>
        <td><input bind:group="{r16}" name="r16" value="Yes" type="radio"></td>
        <td><input bind:group="{r16}" name="r16" value="N/A" type="radio"></td>
        <td><p>Inlets and outlets closed and locked out as necessary.</p></td>
      </tr>
  
      <tr>
        <th>Yes</th>
        <th>N/A</th>
        <th>Fire Watch Requirements</th>
      </tr>
  
      <tr>
        <td><input bind:group="{r17}" name="r17" value="Yes" type="radio"></td>
        <td><input bind:group="{r17}" name="r17" value="N/A" type="radio"></td>
        <td><p>Perform fire watch on both sides of wall or ceiling.</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r18}" name="r18" value="Yes" type="radio"></td>
        <td></td>
        <td><p>Perform continuous fire watch during hot work.</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r19}" name="r19" value="Yes" type="radio"></td>
        <td><input bind:group="{r19}" name="r19" value="N/A" type="radio"></td>
        <td><p>After hot work is completed, perform continuous fire watch for 1 hour and then periodic checks every <sup>1</sup>/<sub>2</sub> hour for 1 hour.</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r20}" name="r20" value="Yes" type="radio"></td>
        <td><input bind:group="{r20}" name="r20" value="N/A" type="radio"></td>
        <td><p>After Torch-Applied roofing hot work is completed, perform continuous fire watch for 1 hour and then periodic checks every <sup>1</sup>/<sub>2</sub> hour for 3 hours.</p></td>
      </tr>
  
      <tr>
        <td><input bind:group="{r21}" name="r21" value="Yes" type="radio"></td>
        <td><input bind:group="{r21}" name="r21" value="N/A" type="radio"></td>
        <td><p>Monitor area with Thermal Infared Camera. [Required for torch applied roofing projects and areas difficult to visually monitor for hot spots (examples: on or near walls, ceilings, roofs, Interlox/plastic belts, pipes, ducts, conveyors, structures that could transfer heat or sparks.)]</p></td>
      </tr>
  
      <tr>
        <th colspan="3">Permit Authorization</th>
      </tr>
  
      <tr>
        <td colspan="3" class="authorizations">
          <i><p>I Inspected the work area, selected the required precautions, verified the precautions were in place and authorized permit.</p></i>
  
          <div class="signatures">
            <label><input bind:value="{authPrint}" type="text"><p>Permit Authorizer Printed Name </p></label>
            <label><input bind:value="{authSignature}" type="text"><p>Permit Authorizer Signature </p></label>
            <label><input bind:value="{authDate}" type="date"><p>Date </p></label>
            <label><input bind:value="{addAuthPrint}" type="text"><p>Additional Permit Authorizer Printed Name </p></label>
            <label><input bind:value="{addAuthSignature}" type="text"><p>Additional Permit Authorizer Signature </p></label>
            <label><input bind:value="{addAuthDate}" type="date"><p>Date</p></label>
          </div>
        </td>
      </tr>
  
      <tr>
        <th colspan="3">Hot Work Operator (If more than one, the lead Hot Work Operator must sign. Must not be Permit Authorizer)</th>
      </tr>
  
      <tr>
        <td colspan="3">
          <p>Hot Work performed by: 
            <input bind:group="{hotWorkOperator}" name="hotwork" value="Team Member" type="radio"> Tyson Team Member(s)
            <input bind:group="{hotWorkOperator}" name="hotwork" value="Contractor" type="radio"> Contractor
            {#if hotWorkOperator == 'Contractor'}
              <input bind:value="{contractorName}" type="text" placeholder="Contractor Name">
            {/if}
          </p>
  
          <hr>
          <i><p>I inspected the hot work area and certify the required precautions are in place and will remain in place during hot work activities. </p></i>
  
          <div class="signatures">
            <label><input bind:value="{operatorName}" type="text"><p>Hot Work Operator Name</p></label>
            <label><input bind:value="{operatorSignature}" type="text"><p>Hot Work Operator Signature</p></label>
            <label><input bind:value="{operatorDate}" type="date"><p>Date</p></label>
          </div>
        </td>
      </tr>
  
      <tr>
        <th colspan="3">Fire Watch (Must not be hot work operator)</th>
      </tr>
  
      <tr>
        <td colspan="3" class="firewatch">
          <div class="head">
            <div>Hot Work Started (Date/Time) <input bind:value="{startDate}" type="datetime-local"></div>
            <div>Hot Work Completed (Date/Time) <input bind:value="{endDate}" type="datetime-local"></div>
          </div>
  
          <div class="firewatchRow">
            <div class="item">
              <p>Inital the Completion of each Required Fire Watch Interval</p>
            </div>
  
            <div class="item" id="first">
              <p>Performed Continuous Fire Watch During Hot Work</p>
              <input bind:value="{inital1}" type="text">
            </div>
            
            <div class="item" id="second">
              <p>Performed Continuous Fire Watch after Hot Work Completion</p>
              <hr>
              <div class="input">
                <span>1 Hr.</span>
                <input bind:value="{inital2}" type="text">
              </div>
            </div>
  
            <div class="item" id="third">
              <p>Performed Periodic Fire Watch after Hot Work Completion</p>
              <hr>
              <div class="inputs">
                <div class="input">
                  <span>1.5 Hr.</span>
                  <input bind:value="{inital3}" type="text">
                </div>
                <div class="input">
                  <span>2 Hr.</span>
                  <input bind:value="{inital4}" type="text">
                </div>
              </div>
            </div>
  
            <div class="item" id='fourth'>
              <p>Extended Fire Watch Required for Torch-Applied Roofing Hot Work</p>
              <hr>
              <div class="inputs">
                <div class="input">
                  <span>2.5 Hr.</span>
                  <input bind:value="{inital5}" type="text">
                </div>
                <div class="input">
                  <span>3 Hr.</span>
                  <input bind:value="{inital6}" type="text">
                </div>
                <div class="input">
                  <span>3.5 Hr.</span>
                  <input bind:value="{inital7}" type="text">
                </div>
                <div class="input">
                  <span>4 Hr.</span>
                  <input bind:value="{inital8}" type="text">
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
  
      <tr>
        <td colspan="3">
          <div class="row">
            <span>First Watch performed by: </span>
            <label><input bind:group="{fireWatchPerformer}" name="fireWatchPerformer" value="Team Member" type="radio"> Team Member</label>
            <label><input bind:group="{fireWatchPerformer}" name="fireWatchPerformer" value="Contractor" type="radio"> Contractor</label>
            {#if fireWatchPerformer == 'Contractor'}
              <label>Company Name: <input bind:value="{fireWatchPerformerOtherValue}" type="text"></label>
            {/if}
          </div>
        </td>
      </tr>
  
      <tr>
        <td colspan="3">
          <div class="row">
            <span>Performed monitoring with a Thermal Infared Camera: </span>
            <label><input bind:group="{thermalCamera}" name="thermal" value="Yes" type="radio"> Yes</label>
            <label><input bind:group="{thermalCamera}" name="thermal" value="No" type="radio"> No</label>
            {#if thermalCamera == 'Yes'}
              <label>Final image taken at (date/time) <input bind:value="{thermalCameraDate}" type="datetime-local"></label>
            {/if}
          </div>
        </td>
      </tr>
  
      <tr>
        <td colspan="3">
          <i><p>I performed fire watch duties as required. I certify my records are true and accurate. [return completed form to Permit Authorizer within 24 Hrs.] </p></i>
  
          <div class="signatures">
            <label><input bind:value="{fireWatchName}" type="text"><p>Fire Watch Name</p></label>
            <label><input bind:value="{fireWatchSignature}" type="text"><p>Fire Watch Signature</p></label>
            <label><input bind:value="{fireWatchDate}" type="date"><p>Date</p></label>
          </div>
        </td>
      </tr>
  
      <tr>
        <th colspan="3">Permit Review and Closure</th>
      </tr>
  
      <tr>
        <td colspan="3">
          <i><p>Following Hot Work and Fire Watch, I reviewed this Permit for completeness. Corrective actions, if required, were addressed as necessary.</p></i>
          <i><p>[File non PSM-related Hot Work Permits for 3 months. If PSM-related, route to the PSM Coordinator to file per PSM Record Retention Requirements.]</p></i>
  
          <div class="signatures">
            <label><input bind:value="{closeAuthName}" type="text">Permit Authorizer Name</label>
            <label><input bind:value="{closeAuthSignature}" type="text">Permit Authorizer Signature</label>
            <label><input bind:value="{closeAuthDate}" type="date">Date</label>
          </div>
        </td>
      </tr>
    </table>
  
    <button on:click="{submit}">Submit</button>
  </form>
</main>

<style>
  main {
    width: 1200px;
    margin: 2em auto;
    margin-bottom: 100px;
    font-family: 'Roboto Serif';
    font-size: 14px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 200px;
    padding: 10px;
  }

  header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "topcol1 topcol2 topcol3";
  }

  header .container {
    border: 2px solid;
    height: 3.3em;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    padding: 3px;
  }

  header .container input {
    width: 100%;
    height: 60%;
  }

  #PSM-container, #TAR-container {
    border: 2px solid;
    height: 3.0em;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    padding: 3px 3px 3px 3px;
    font-size: 1.1em;
  }

  #PSM-container input, #TAR-container input {
    margin-left: 10px;
  }

  #PSM-container p, #TAR-container p {
    font-size: 14px;
    margin-top: 5px;
    color: crimson;
    font-weight: bold;
  }

  #TAR-container {
    grid-column: span 2;
  }
  
  #black-bar {
    grid-column: span 3;
    color: whitesmoke;
    background-color: black;
    padding: 5px;
    text-align: center;
    font-size: 1.2em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th {
    background-color: wheat;
    font-size: large;
    padding: 5px;
  }
  table, th, td {
    border: 2px solid black;
  }
  
  td > input[type=radio] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  td > p {
    margin-left: 10px;
    padding: 3px;
  }
  
  i > p {
    margin: 5px;
  }

  .signatures {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  .signatures input {
    width: 100%;
    height: 30px;
  }

  p input[type=radio] {
    margin-left: 30px;
  }

  .head {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
  }

  .firewatchRow {
    display: flex;
    /* height: 98px; */
    /* outline: auto; */
  }

  .firewatchRow .item {
    width: 100%;
    height: 104px;
    border: 1px solid black;
    border-top: 2px solid black;
  }

  .firewatchRow .item:first-child {
    width: 50%;
    padding: 5px;
  }

  #first {
    width: 50%;
  }
  #first p {
    height: 80px;
  }

  #second {
    width: 60%;
  }

  #third p {
    padding: 10px;
  }

  #fourth p {
    padding: 10px;
  }
  #fourth {
    width: 150%  
  }
  .item p {
    text-align: center;
    height: 60px;
    padding: 3px;
  }

  .item input {
    width: 100%;
    height: 20px;
  }

  .item span {
    height: 100%;
    /* font-size: 13px; */
    border-right: 1px solid black;
  }

  .item .input {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .item .inputs {
    display: flex;
  }

  .row {
    padding: 5px;
    /* border: 1px solid black; */
  }

  .row label{
    padding: 20px;
  }


</style>