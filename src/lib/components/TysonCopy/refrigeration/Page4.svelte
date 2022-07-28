<script>
  import { onMount, onDestroy } from "svelte";
  // @ts-ignore
  import { browser } from '$app/env';

  let t01_01, t01_02, t01_03, t01_04, t01_05, t01_06, t01_07, t01_08, t01_09, t01_10;
  let t01_11, t01_12;

  let t02_01, t02_02, t02_03, t02_04, t02_05;
  
  let t03_01, t03_02, t03_03, t03_04, t03_05, t03_06, t03_07;
  let t04_01, t04_02, t04_03, t04_04, t04_05, t04_06, t04_07;
  
  let t05_01, t05_02, t05_03, t05_04, t05_05;
  let t06_01, t06_02, t06_03, t06_04, t06_05;

  
  export let page4Array
  $: page4Array = {
    t01_01, t01_02, t01_03, t01_04, t01_05, t01_06, t01_07, t01_08, t01_09, t01_10,
    t01_11, t01_12,
    t02_01, t02_02, t02_03, t02_04, t02_05,
    t03_01, t03_02, t03_03, t03_04, t03_05, t03_06, t03_07,
    t04_01, t04_02, t04_03, t04_04, t04_05, t04_06, t04_07,
    t05_01, t05_02, t05_03, t05_04, t05_05,
    t06_01, t06_02, t06_03, t06_04, t06_05,
    table2Required, pump1a, pump2a, pump1b, pump2b, waterchiller1
  }

  let page4Checks
  $: page4Checks = {
    t02_02Check, t02_03Check, t03_01Check,
    t03_02Check, t03_03Check, t03_04Check,
    t04_01Check, t04_02Check, t04_03Check, t04_04Check,
    t05_01Check, t05_02Check, t05_03Check,
    t06_01Check, t06_02Check, t06_03Check
  }

  let t02_02Check, t02_03Check
  let t03_01Check, t03_02Check, t03_03Check, t03_04Check
  let t04_01Check, t04_02Check, t04_03Check, t04_04Check
  let t05_01Check, t05_02Check, t05_03Check
  let t06_01Check, t06_02Check, t06_03Check
  function checkValues(x, low, high) {
    if (x == null) {
      return false
    }

    if (x < low || x > high) {
      return true
    } else {
      return false
    }
  }
  
  let table2Required, pump1a, pump2a, pump1b, pump2b, waterchiller1;
  let formData
  onMount(()=> {
    // gets form data from local storage
    if (browser) {
      formData = JSON.parse(localStorage.getItem('Page4FormData'))

      if (!formData) {
        return
      }

      if (formData.page4Array) {
        t01_01 = formData.page4Array.t01_01;
        t01_02 = formData.page4Array.t01_02;
        t01_03 = formData.page4Array.t01_03;
        t01_04 = formData.page4Array.t01_04;
        t01_05 = formData.page4Array.t01_05;
        t01_06 = formData.page4Array.t01_06;
        t01_07 = formData.page4Array.t01_07;
        t01_08 = formData.page4Array.t01_08;
        t01_09 = formData.page4Array.t01_09;
        t01_10 = formData.page4Array.t01_10;
        t01_11 = formData.page4Array.t01_11;
        t01_12 = formData.page4Array.t01_12;

        t02_01 = formData.page4Array.t02_01;
        t02_02 = formData.page4Array.t02_02;
        t02_03 = formData.page4Array.t02_03;
        t02_04 = formData.page4Array.t02_04;
        t02_05 = formData.page4Array.t02_05;

        t03_01 = formData.page4Array.t03_01;
        t03_02 = formData.page4Array.t03_02;
        t03_03 = formData.page4Array.t03_03;
        t03_04 = formData.page4Array.t03_04;
        t03_05 = formData.page4Array.t03_05;
        t03_06 = formData.page4Array.t03_06;
        t03_07 = formData.page4Array.t03_07;

        t04_01 = formData.page4Array.t04_01;
        t04_02 = formData.page4Array.t04_02;
        t04_03 = formData.page4Array.t04_03;
        t04_04 = formData.page4Array.t04_04;
        t04_05 = formData.page4Array.t04_05;
        t04_06 = formData.page4Array.t04_06;
        t04_07 = formData.page4Array.t04_07;

        t05_01 = formData.page4Array.t05_01;
        t05_02 = formData.page4Array.t05_02;
        t05_03 = formData.page4Array.t05_03;
        t05_04 = formData.page4Array.t05_04;
        t05_05 = formData.page4Array.t05_05;

        t06_01 = formData.page4Array.t06_01;
        t06_02 = formData.page4Array.t06_02;
        t06_03 = formData.page4Array.t06_03;
        t06_04 = formData.page4Array.t06_04;
        t06_05 = formData.page4Array.t06_05;

        table2Required = formData.page4Array.table2Required;
        pump1a = formData.page4Array.pump1a;
        pump2a = formData.page4Array.pump2a;
        pump1b = formData.page4Array.pump1b;
        pump2b = formData.page4Array.pump2b;
        waterchiller1 = formData.page4Array.waterchiller1;
      }

      if (formData.checks) {
        if (t02_02) {
          t02_02Check = formData.checks.t02_02Check
        }
        if (t02_03) {
          t02_03Check = formData.checks.t02_03Check
        }
        if (t03_01) {
          t03_01Check = formData.checks.t03_01Check
        }
        if (t03_02) {
          t03_02Check = formData.checks.t03_02Check
        }
        if (t03_03) {
          t03_03Check = formData.checks.t03_03Check
        }
        if (t03_04) {
          t03_04Check = formData.checks.t03_04Check
        }
        if (t04_01) {
          t04_01Check = formData.checks.t04_01Check
        }
        if (t04_02) {
          t04_02Check = formData.checks.t04_02Check
        }
        if (t04_03) {
          t04_03Check = formData.checks.t04_03Check
        }
        if (t04_04) {
          t04_04Check = formData.checks.t04_04Check
        }
        if (t05_01) {
          t05_01Check = formData.checks.t05_01Check
        }
        if (t05_02) {
          t05_02Check = formData.checks.t05_02Check
        }
        if (t05_03) {
          t05_03Check = formData.checks.t05_03Check
        }
        if (t06_01) {
          t06_01Check = formData.checks.t06_01Check
        }
        if (t06_02) {
          t06_02Check = formData.checks.t06_02Check
        }
        if (t06_03) {
          t06_03Check = formData.checks.t06_03Check
        }
      }
    }
  })

  let firstload = true
  $: {
    if (!firstload) {
      localStorage.setItem("Page4FormData", JSON.stringify({
        page4Array,
        checks: {...page4Checks}
      }))
    }
    firstload = false
  }

</script>

<main>

  <div class="tablebox">
    <table>
      <tr>
        <th>Condenser ID</th>
        <th>Belt Condition <span>(circle selection)</span></th>
        <th>Fans Operating <span>(circle selection)</span></th>
        <th>Abnormal Noise or Vibration</th>
      </tr>
  
      <tr>
        <td>Condenser #1</td>
        <td class="required">
          <input type="radio" name="t01_01" bind:group="{t01_01}" value="Ok" required> Ok / 
          <input type="radio" name="t01_01" bind:group="{t01_01}" value="Replace"> Replace
        </td>
        <td class="required">
          <input type="radio" name="t01_02" bind:group="{t01_02}" value="1" required> 1
        </td>
        <!-- <td class="labeled">
          <input type="text" bind:value="{t01_03}" required>
        </td> -->
        <td class="required">
          <input type="radio" name="t01_03" bind:group="{t01_03}" value="Yes" required> Yes / 
          <input type="radio" name="t01_03" bind:group="{t01_03}" value="No"> No 
        </td>
      </tr>
  
      <tr>
        <td>Condenser #2</td>
        <td class="required">
          <input type="radio" name="t01_04" bind:group="{t01_04}" value="Ok" required> Ok / 
          <input type="radio" name="t01_04" bind:group="{t01_04}" value="Replace"> Replace
        </td>
        <td class="required">
          <input type="radio" name="t01_05" bind:group="{t01_05}" value="1" required> 1
        </td>
        <!-- <td class="labeled">
          <input type="text" bind:value="{t01_06}" required>
        </td> -->
        <td class="required">
          <input type="radio" name="t01_06" bind:group="{t01_06}" value="Yes" required> Yes / 
          <input type="radio" name="t01_06" bind:group="{t01_06}" value="No"> No 
        </td>
      </tr>
      
      <tr>
        <td>Condenser #3</td>
        <td class="required">
          <input type="radio" name="t01_07" bind:group="{t01_07}" value="Ok" required> Ok / 
          <input type="radio" name="t01_07" bind:group="{t01_07}" value="Replace"> Replace
        </td>
        <td class="required">
          <input type="radio" name="t01_08" bind:group="{t01_08}" value="1" required> 1
          <input type="radio" name="t01_08" bind:group="{t01_08}" value="2"> 2
          <input type="radio" name="t01_08" bind:group="{t01_08}" value="3"> 3
          <input type="radio" name="t01_08" bind:group="{t01_08}" value="4"> 4
        </td>
        <!-- <td class="labeled">
          <input type="text" bind:value="{t01_09}" required>
        </td> -->
        <td class="required">
          <input type="radio" name="t01_09" bind:group="{t01_09}" value="Yes" required> Yes / 
          <input type="radio" name="t01_09" bind:group="{t01_09}" value="No"> No 
        </td>
      </tr>
  
      <tr>
        <td>Condenser #4</td>
        <td class="required">
          <input type="radio" name="t01_10" bind:group="{t01_10}" value="Ok" required> Ok / 
          <input type="radio" name="t01_10" bind:group="{t01_10}" value="Replace"> Replace
        </td>
        <td class="required">
          <input type="radio" name="t01_11" bind:group="{t01_11}" value="1" required> 1
          <input type="radio" name="t01_11" bind:group="{t01_11}" value="2"> 2
          <input type="radio" name="t01_11" bind:group="{t01_11}" value="3"> 3
          <input type="radio" name="t01_11" bind:group="{t01_11}" value="4"> 4
        </td>
        <td class="required">
          <input type="radio" name="t01_12" bind:group="{t01_12}" value="Yes" required> Yes / 
          <input type="radio" name="t01_12" bind:group="{t01_12}" value="No"> No 
        </td>
      </tr>
    </table>

    <h2>L9 Glycol Chiller</h2>
    <p><input type="checkbox" bind:checked="{table2Required}"> Running?</p>
    {#if table2Required}
      <table>
        <tr>
          <th>Pump On-Line <span>(Circle selection)</span></th>
          <th>Pump Pressure <span>(35 to 50 psig)</span></th>
          <th>Glycol Level <span>(30 to 50%)</span></th>
          <th>External Condition <span>(piping/parts/insulation)</span></th>
          <th>Abnormal condition or noise <span>Inform supervisor and/or submit notification</span></th>
        </tr>

        <tr>
          <td style="width: 150px;">
            <input type="radio" name="t02_01" bind:group="{t02_01}" value="West"> West / 
            <input type="radio" name="t02_01" bind:group="{t02_01}" value="East"> East
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t02_02}" class:highlight="{t02_02Check}" on:change="{() => t02_02Check = checkValues(t02_02, 35, 50)}">
            <label for="">(psi)</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t02_03}" required class:highlight="{t02_03Check}" on:change="{() => t02_03Check = checkValues(t02_03, 30, 50)}">
            <label for="">%</label>
          </td>
          <td style="width: 200px;" class="required">
            <input type="radio" name="t02_04" bind:group="{t02_04}" value="Good" required> Good / 
            <input type="radio" name="t02_04" bind:group="{t02_04}" value="Bad"> Bad
          </td>
          <!-- <td class="labeled">
            <input type="text" bind:value="{t02_05}" required>
          </td> -->
          <td class="center required">
            <input type="radio" name="t02_05" bind:group="{t02_05}" value="Yes" required> Yes / 
            <input type="radio" name="t02_05" bind:group="{t02_05}" value="No"> No 
          </td>
        </tr>
      </table>
    {:else}
      <table>
        <tr>
          <th>Pump On-Line <span>(Circle selection)</span></th>
          <th>Pump Pressure <span>(35 to 50 psig)</span></th>
          <th>Glycol Level <span>(30 to 50%)</span></th>
          <th>External Condition <span>(piping/parts/insulation)</span></th>
          <th>Abnormal condition or noise <span>Inform supervisor and/or submit notification</span></th>
        </tr>

        <tr>
          <td style="width: 150px;" class="disabled">
            <input type="radio" name="t02_01" bind:group="{t02_01}" value="West" disabled> West / 
            <input type="radio" name="t02_01" bind:group="{t02_01}" value="East" disabled> East
          </td>
          <td class="labeled">
            <input type="text" bind:value="{t02_02}" class:highlight="{t02_02Check}" on:change="{() => t02_02Check = checkValues(t02_02, 35, 50)}" disabled>
            <label for="">(psi)</label>
          </td>
          <td class="labeled">
            <input type="text" bind:value="{t02_03}"  class:highlight="{t02_03Check}" on:change="{() => t02_03Check = checkValues(t02_03, 30, 50)}" disabled>
            <label for="">%</label>
          </td>
          <td style="width: 200px;" class="disabled">
            <input type="radio" name="t02_04" bind:group="{t02_04}" value="Good" disabled> Good / 
            <input type="radio" name="t02_04" bind:group="{t02_04}" value="Bad" disabled> Bad
          </td>
          <td class="center disabled">
            <input type="radio" name="t02_05" bind:group="{t02_05}" value="Yes" disabled> Yes / 
            <input type="radio" name="t02_05" bind:group="{t02_05}" value="No" disabled> No 
          </td>
        </tr>
      </table>
    {/if}


    <h2>LC Water Chillers</h2>
    <div class="waterchillers">
      <div class="col1">
        <div class="table-container">
          <div class="labeledtable">
            <p><input type="checkbox" bind:checked="{pump1a}"> Running?</p>
            {#if pump1a}
              <table class="toptable">
                <tr>
                  <th>Pump Disch. Pressure <span>(25 to 75 psig)</span></th>
                  <th>Rotary Guardian <span>(0 to .6)</span></th>
                </tr>
                <tr style="height: 30px;">
                  <td class="labeled">
                    <input type="number" bind:value="{t03_01}" required class:highlight="{t03_01Check}" on:change="{() => t03_01Check = checkValues(t03_01, 25, 75)}">
                    <label for="">(psi)</label>
                  </td>
                  <td class="labeled">
                    <input type="number" bind:value="{t03_02}" required class:highlight="{t03_02Check}" on:change="{() => t03_02Check = checkValues(t03_02, 0, .6)}" step="0.1">
                  </td>
                </tr>
              </table>
            {:else}
              <table class="toptable">
                <tr>
                  <th>Pump Disch. Pressure <span>(25 to 75 psig)</span></th>
                  <th>Rotary Guardian <span>(0 to .6)</span></th>
                </tr>
                <tr>
                  <td class="labeled">
                    <input type="text" bind:value="{t03_01}" disabled class:highlight="{t03_01Check}" on:change="{() => t03_01Check = checkValues(t03_01, 25, 75)}">
                    <label for="">(psi)</label>
                  </td>
                  <td class="labeled">
                    <input type="text" bind:value="{t03_02}" disabled class:highlight="{t03_02Check}" on:change="{() => t03_02Check = checkValues(t03_02, 0, .6)}">
                  </td>
                </tr>
              </table>
            {/if}
            <p class="toplabel">Pump #1</p>
          </div>

          <div class="labeledtable">
            <p><input type="checkbox" bind:checked="{pump2a}"> Running?</p>
            {#if pump2a}
              <table class="bottomtable">
                <tr>
                  <th>Pump Disch. Pressure <span>(25 to 75 psig)</span></th>
                  <th>Rotary Guardian <span>(0 to .6)</span></th>
                </tr>
                <tr>
                  <td class='labeled'>
                    <input type="number" bind:value="{t03_03}" required class:highlight="{t03_03Check}" on:change="{() => t03_03Check = checkValues(t03_03, 25, 75)}">
                    <label for="">(psi)</label>
                  </td>
                  <td class="labeled">
                    <input type="number" bind:value="{t03_04}" required class:highlight="{t03_04Check}" on:change="{() => t03_04Check = checkValues(t03_04, 0, .6)}" step="0.1">
                  </td>
                </tr>
              </table>
            {:else}
              <table class="bottomtable">
                <tr>
                  <th>Pump Disch. Pressure <span>(25 to 75 psig)</span></th>
                  <th>Rotary Guardian <span>(0 to .6)</span></th>
                </tr>
                <tr>
                  <td class='labeled'>
                    <input type="text" bind:value="{t03_03}" disabled class:highlight="{t03_03Check}" on:change="{() => t03_03Check = checkValues(t03_03, 25, 75)}">
                    <label for="">(psi)</label>
                  </td>
                  <td class="labeled">
                    <input type="text" bind:value="{t03_04}" disabled class:highlight="{t03_04Check}" on:change="{() => t03_04Check = checkValues(t03_04, 0, .6)}">
                  </td>
                </tr>
              </table>
            {/if}
            <p class="botlabel">Pump #2</p>
          </div>
          <p class="label">North Chiller #36</p>
        </div>

        <div class="table-container">
          <div class="labeledtable">
            <p><input type="checkbox" bind:checked="{pump1b}"> Running?</p>

            {#if pump1b}
              <table class="toptable">
                <tr>
                  <th>Pump Disch. Pressure <span>(25 to 75 psig)</span></th>
                  <th>Rotary Guardian <span>(0 to .6)</span></th>
                </tr>
                <tr>
                  <td class="labeled">
                    <input type="number" bind:value="{t04_01}" required class:highlight="{t04_01Check}" on:change="{() => t04_01Check = checkValues(t04_01, 25, 75)}">
                    <label for="">(psi)</label>
                  </td>
                  <td class="labeled">
                    <input type="number" bind:value="{t04_02}" required class:highlight="{t04_02Check}" on:change="{() => t04_02Check = checkValues(t04_02, 0, .6)}" step="0.1">
                  </td>
                </tr>
              </table>
            {:else}
              <table class="toptable">
                <tr>
                  <th>Pump Disch. Pressure <span>(25 to 75 psig)</span></th>
                  <th>Rotary Guardian <span>(0 to .6)</span></th>
                </tr>
                <tr>
                  <td class="labeled">
                    <input type="text" bind:value="{t04_01}" disabled class:highlight="{t04_01Check}" on:change="{() => t04_01Check = checkValues(t04_01, 25, 75)}">
                    <label for="">(psi)</label>
                  </td>
                  <td class="labeled">
                    <input type="text" bind:value="{t04_02}" disabled class:highlight="{t04_02Check}" on:change="{() => t04_02Check = checkValues(t04_02, 0, .6)}">
                  </td>
                </tr>
              </table>
            {/if}
            
            <p class="toplabel">Pump #1</p>
          </div>

          <div class="labeledtable">
            <p><input type="checkbox" bind:checked="{pump2b}"> Running?</p>

            {#if pump2b}
              <table class="bottomtable">
                <tr>
                  <th>Pump Disch. Pressure <span>(25 to 75 psig)</span></th>
                  <th>Rotary Guardian <span>(0 to .6)</span></th>
                </tr>
                <tr>
                  <td class="labeled">
                    <input type="number" bind:value="{t04_03}" required class:highlight="{t04_03Check}" on:change="{() => t04_03Check = checkValues(t04_03, 25, 75)}">
                    <label for="">(psi)</label>
                  </td>
                  <td class="labeled">
                    <input type="number" bind:value="{t04_04}" required class:highlight="{t04_04Check}" on:change="{() => t04_04Check = checkValues(t04_04, 0, .6)}" step="0.1">
                  </td>
                </tr>
              </table>
            {:else}
              <table class="bottomtable">
                <tr>
                  <th>Pump Disch. Pressure <span>(25 to 75 psig)</span></th>
                  <th>Rotary Guardian <span>(0 to .6)</span></th>
                </tr>
                <tr>
                  <td class="labeled">
                    <input type="text" bind:value="{t04_03}" disabled class:highlight="{t04_03Check}" on:change="{() => t04_03Check = checkValues(t04_03, 25, 75)}">
                    <label for="">(psi)</label>
                  </td>
                  <td class="labeled">
                    <input type="text" bind:value="{t04_04}" disabled class:highlight="{t04_04Check}" on:change="{() => t04_04Check = checkValues(t04_04, 0, .6)}">
                  </td>
                </tr>
              </table>
            {/if}

            <p class="botlabel">Pump #2</p>
          </div>
          <p class="label">North Chiller #37</p>
        </div>
      </div>

      <div class="col2">
        <table class="vessel">
          <thead>
            <tr>
              <th colspan="2">Vessel</th>
            </tr>
          </thead>
          <tr>
            <td>External Condition <span>(circle condition)</span></td>
            <td class="labeled radiostyles required" style="width: 200px">
              <p>
                <input type="radio" name="t03_05" bind:group="{t03_05}" value="Good" required> Good /
                <input type="radio" name="t03_05" bind:group="{t03_05}" value="Bad"> Bad
              </p>
            </td>
          </tr>
          <tr>
            <td>Abnormal Noise / Vibration</td>
            <td class="labeled radiostyles required">
              <p>
                <input type="radio" name="t03_06" bind:group="{t03_06}" value="Yes" required> Yes /
                <input type="radio" name="t03_06" bind:group="{t03_06}" value="No"> No
              </p>
            </td>
          </tr>
          <tr>
            <td>Oil Pot Frost <span>(% Frosted)</span></td>
            <td class="labeled">
              <input type="number" name="t03_07" bind:value="{t03_07}" id="test" required>
              <label for="">%</label>
            </td>
          </tr>
        </table>
        
        <table class="vessel">
          <thead>
            <tr>
              <th colspan="2">Vessel</th>
            </tr>
          </thead>
          <tr>
            <td>External Condition <span>(circle condition)</span></td>
            <td class="labeled radiostyles required">
              <p>
                <input type="radio" name="t04_05" bind:group="{t04_05}" value="Good" required> Good /
                <input type="radio" name="t04_05" bind:group="{t04_05}" value="Bad"> Bad
              </p>
            </td>
          </tr>
          <tr>
            <td>Abnormal Noise / Vibration</td>
            <td class="labeled radiostyles required">
              <p>
                <input type="radio" name="t04_06" bind:group="{t04_06}" value="Yes" required> Yes /
                <input type="radio" name="t04_06" bind:group="{t04_06}" value="No"> No 
              </p>
            </td>
          </tr>
          <tr>
            <td>Oil Pot Frost <span>(% Frosted)</span></td>
            <td class="labeled">
              <input type="number" name="t04_07" bind:value="{t04_07}" id="test" required>
              <label for="">%</label>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <hr>
    <strong>Any abnormal vibrations inform supervisor and/or submit notification</strong>
    <hr>

    <h2>#1 Water Chiller</h2>
    <p><input type="checkbox" bind:checked="{waterchiller1}"> Running?</p>
    {#if waterchiller1}
      <table>
        <tr>
          <th>Chilled H<sub>2</sub>0 Temp. <span>(32 to 38°F)</span></th>
          <th>Suction Pressure <span>(15 to 30 psig)</span></th>
          <th>Glycol Level <span>(30 to 50%)</span></th>
          <th>External Condition <span>(piping/parts/insulation)</span></th>
          <th>Oil Pot Condition <span>(% Frosted)</span></th>
        </tr>
        <tr>
          <td class="labeled">
            <input type="number" bind:value="{t05_01}" class:highlight="{t05_01Check}" on:change="{() => t05_01Check = checkValues(t05_01, 32, 38)}">
            <label for="">°F</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t05_02}" class:highlight="{t05_02Check}" on:change="{() => t05_02Check = checkValues(t05_02, 15, 30)}">
            <label for="">(psi)</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t05_03}" required class:highlight="{t05_03Check}" on:change="{() => t05_03Check = checkValues(t05_03, 30, 50)}">
            <label for="">%</label>
          </td>
          <td class="required">
            <input type="radio" name="t05_04" bind:group="{t05_04}" value="Good" required> Good / 
            <input type="radio" name="t05_04" bind:group="{t05_04}" value="Bad"> Bad 
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t05_05}" required>
            <label for="">%</label>
          </td>
        </tr>

        <tfoot>
          <tr>
            <td colspan="5"><strong>Any abnormal vibrations inform supervisor and/or submit notification</strong></td>
          </tr>
        </tfoot>
      </table>
    {:else}
      <table>
        <tr>
          <th>Chilled H<sub>2</sub>0 Temp. <span>(32 to 38°F)</span></th>
          <th>Suction Pressure <span>(15 to 30 psig)</span></th>
          <th>Glycol Level <span>(30 to 50%)</span></th>
          <th style="width: 176px;">External Condition <span>(piping/parts/insulation)</span></th>
          <th>Oil Pot Condition <span>(% Frosted)</span></th>
        </tr>
        <tr>
          <td class="labeled">
            <input type="number" bind:value="{t05_01}" class:highlight="{t05_01Check}" on:change="{() => t05_01Check = checkValues(t05_01, 32, 38)}" disabled>
            <label for="">°F</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t05_02}" class:highlight="{t05_02Check}" on:change="{() => t05_02Check = checkValues(t05_02, 15, 30)}" disabled>
            <label for="">(psi)</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t05_03}" required class:highlight="{t05_03Check}" on:change="{() => t05_03Check = checkValues(t05_03, 30, 50)}" disabled>
            <label for="">%</label>
          </td>
          <td class="required">
            <input type="radio" name="t05_04" bind:group="{t05_04}" value="Good" required> Good / 
            <input type="radio" name="t05_04" bind:group="{t05_04}" value="Bad"> Bad 
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t05_05}">
            <label for="">%</label>
          </td>
        </tr>

        <tfoot>
          <tr>
            <td colspan="5"><strong>Any abnormal vibrations inform supervisor and/or submit notification</strong></td>
          </tr>
        </tfoot>
      </table>
    {/if}

    <h2>Purger</h2>
    <table>
      <tr>
        <th>Foul Gas Pressure <span>(110 to 175 psig)</span></th>
        <th>Suction Pressure <span>(15 to 30 psig)</span></th>
        <th>Purge Count <span>(0 to 50)</span></th>
        <th style="width: 180px;">External Condition <span>(piping/parts/insulation)</span></th>
        <th>Abnormal condition or noise <span style="font-size: small;">Inform supervisor and/or submit notification</span></th>
      </tr>

      <tr>
        <td class="labeled">
          <input type="number" bind:value="{t06_01}" required class:highlight="{t06_01Check}" on:change="{() => t06_01Check = checkValues(t06_01, 110, 175)}">
          <label for="">(psi)</label>
        </td>
        <td class="labeled">
          <input type="number" bind:value="{t06_02}" required class:highlight="{t06_02Check}" on:change="{() => t06_02Check = checkValues(t06_02, 15, 30)}">
          <label for="">(psi)</label>
        </td>
        <td class="labeled">
          <input type="number" bind:value="{t06_03}" required class:highlight="{t06_03Check}" on:change="{() => t06_03Check = checkValues(t06_03, 0, 50)}">
        </td>
        <!-- <td class="labeled">
          <input type="text" bind:value="{t06_04}" required>
        </td> -->
        <td class="required">
          <input type="radio" name="t06_04" bind:group="{t06_04}" value="Good" required> Good / 
          <input type="radio" name="t06_04" bind:group="{t06_04}" value="Bad"> Bad 
        </td>
        <!-- <td class="labeled">
          <input type="text" bind:value="{t06_05}" required>
        </td> -->
        <td class="required">
          <input type="radio" name="t06_05" bind:group="{t06_05}" value="Yes" required> Yes / 
          <input type="radio" name="t06_05" bind:group="{t06_05}" value="No"> No 
        </td>
      </tr>
    </table>
  </div>
</main>

<style>
  .waterchillers {
    display: flex;
  }

  .toptable, .bottomtable, .table-container {
    position: relative;
  }

  .labeledtable .toplabel {
    border: 3px solid black;
    width: 80px;
    position: absolute;
    transform: rotate(90deg);
    top: 42px;
    left: -53px;
    text-align: center;
    padding: 5px;
    font-weight: bold;
    font-size: small;
  }

  .labeledtable .botlabel {
    border: 3px solid black;
    width: 80px;
    position: absolute;
    transform: rotate(90deg);
    top: 139.5px;
    left: -53px;
    text-align: center;
    padding: 5px;
    font-weight: bold;
    font-size: small;
  }
  .table-container .label {
    border: 3px solid black;
    width: 177.5px;
    position: absolute;
    transform: rotate(90deg);
    top: 89.5px;
    left: -131px;
    text-align: center;
    padding: 5px;
    font-weight: bold;
  }

  .table-container {
    margin-left: 60px;
    margin-bottom: 30px;
  }
  .table-container table:first-child {
    margin-bottom: -3px;
  }

  #test {
    height: 42px;
  }
  
  strong {
    text-align: center;
    font-size: 1.3em;
    margin: 10px;
    color: red;
  }

  .col2 {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* outline: 1px solid black; */
    height: 450px;
  }

  .vessel {
    margin: 20px;
  }

  tfoot td {
    text-align: center;
  }

  .tablebox {
    width: 900px;
    outline: 3px solid black;
    padding: 20px;
    box-shadow: 10px 10px 10px rgb(87, 86, 86);
    border-radius: 10px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
  }

  main {
    margin-top: 20px;
  }

  span {
    display: block;
    color: red;
  }

  table {
    border-collapse: collapse;
  }

  th {
    background-color: lightgoldenrodyellow;
  }

  table, th, td {
    border: 3px solid black;
    padding: 3px;
    text-align: center;
  }
  .waterchillers .labeled input[type=number] {
    width: 100%;
    height: 30px;
    -moz-appearance: textfield;
  }
  
  input[type=number] {
    -moz-appearance: textfield;
    width: 100%;
    height: 30px;
  }

  input[type=text] {
    height: 30px;
    width: 100%;
  }

  h2 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
    text-decoration: underline;
  }

  td.labeled {
    position: relative;
    padding: 0;
  }

  td.labeled label {
    position: absolute;
    right: 10px;
    top: 25%;
    color: grey;
    font-size: smaller;
  }

  .labeled input {
    height: 30px;
    text-align: center;
  }

  .radiostyles p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
  }

  .radiostyles input {
    /* outline: 1px solid */
    margin: 5px;
  }

  input:required {
    border: 2px solid crimson;
    /* background-color: lightcoral; */
  }

  .required {
    outline: 2px solid red;
    outline-offset: -3px;
  }

  input:disabled{
    background-color: gray;
    border: 0;
  }
  .highlight {
    animation: highlight .7s infinite alternate;
  }

  .disabled {
    background-color: grey;
  }

  @keyframes highlight {
    from {background-color: white;}
    to {background-color: yellow;}
  }

</style>