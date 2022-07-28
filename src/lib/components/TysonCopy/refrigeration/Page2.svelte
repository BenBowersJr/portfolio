<script>
  import { onMount, onDestroy } from "svelte";
  // @ts-ignore
  import { browser } from '$app/env';


  let t01_01, t01_02, t01_03, t01_04;
  let t02_01, t02_02, t02_03, t02_04, t02_05, t02_06;
  let t03_01, t03_02, t03_03, t03_04, t03_05, t03_06, t03_07, t03_08;
  let t04_01, t04_02, t04_03, t04_04, t04_05, t04_06, t04_07, t04_08;
  let t05_01, t05_02, t05_03, t05_04, t05_05, t05_06, t05_07, t05_08;

  export let page2Array
  $: page2Array = {
    t01_01, t01_02, t01_03, t01_04,
    t02_01, t02_02, t02_03, t02_04, t02_05, t02_06,
    t03_01, t03_02, t03_03, t03_04, t03_05, t03_06, t03_07, t03_08,
    t04_01, t04_02, t04_03, t04_04, t04_05, t04_06, t04_07, t04_08,
    t05_01, t05_02, t05_03, t05_04, t05_05, t05_06, t05_07, t05_08,
    Pump1a, Pump2a, Pump1b, Pump2b, Pump1c, Pump2c, icemaker
  }
  
  let t02_01Check, t02_02Check, t02_03Check, t02_04Check, t02_05Check, t02_06Check;
  let t03_01Check, t03_02Check, t03_03Check, t03_04Check, t03_05Check;
  let t04_01Check, t04_02Check, t04_03Check, t04_04Check, t04_05Check;
  let t05_01Check, t05_02Check, t05_03Check, t05_04Check, t05_05Check;

  let page2Checks
  $: page2Checks = {
    t02_01Check, t02_02Check, t02_03Check, t02_04Check, t02_05Check, t02_06Check,
    t03_01Check, t03_02Check, t03_03Check, t03_04Check, t03_05Check,
    t04_01Check, t04_02Check, t04_03Check, t04_04Check, t04_05Check,
    t05_01Check, t05_02Check, t05_03Check, t05_04Check, t05_05Check,
  }

  let Pump1a, Pump2a, Pump1b, Pump2b, Pump1c, Pump2c, icemaker
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

  let formData
  onMount(()=> {
    // gets form data from local storage
    if (browser) {
      formData = JSON.parse(localStorage.getItem('Page2FormData'))

      if (!formData) {
        return
      }

      if (formData.page2Array) {
        t01_01 = formData.page2Array.t01_01;
        t01_02 = formData.page2Array.t01_02;
        t01_03 = formData.page2Array.t01_03;
        t01_04 = formData.page2Array.t01_04;
  
        t02_01 = formData.page2Array.t02_01;
        t02_02 = formData.page2Array.t02_02;
        t02_03 = formData.page2Array.t02_03;
        t02_04 = formData.page2Array.t02_04;
        t02_05 = formData.page2Array.t02_05;
        t02_06 = formData.page2Array.t02_06;
  
        t03_01 = formData.page2Array.t03_01;
        t03_02 = formData.page2Array.t03_02;
        t03_03 = formData.page2Array.t03_03;
        t03_04 = formData.page2Array.t03_04;
        t03_05 = formData.page2Array.t03_05;
        t03_06 = formData.page2Array.t03_06;
        t03_07 = formData.page2Array.t03_07;
        t03_08 = formData.page2Array.t03_08;
  
        t04_01 = formData.page2Array.t04_01;
        t04_02 = formData.page2Array.t04_02;
        t04_03 = formData.page2Array.t04_03;
        t04_04 = formData.page2Array.t04_04;
        t04_05 = formData.page2Array.t04_05;
        t04_06 = formData.page2Array.t04_06;
        t04_07 = formData.page2Array.t04_07;
        t04_08 = formData.page2Array.t04_08;
  
        t05_01 = formData.page2Array.t05_01;
        t05_02 = formData.page2Array.t05_02;
        t05_03 = formData.page2Array.t05_03;
        t05_04 = formData.page2Array.t05_04;
        t05_05 = formData.page2Array.t05_05;
        t05_06 = formData.page2Array.t05_06;
        t05_07 = formData.page2Array.t05_07;
        t05_08 = formData.page2Array.t05_08;
  
        Pump1a = formData.page2Array.Pump1a;
        Pump2a = formData.page2Array.Pump2a;
        Pump1b = formData.page2Array.Pump1b;
        Pump2b = formData.page2Array.Pump2b;
        Pump1c = formData.page2Array.Pump1c;
        Pump2c = formData.page2Array.Pump2c;
        icemaker = formData.page2Array.icemaker;
      }

      if (formData.checks) {
        if (t02_01) {
          t02_01Check = formData.checks.t02_01Check
        }
        if (t02_02) {
          t02_02Check = formData.checks.t02_02Check
        }
        if (t02_03) {
          t02_03Check = formData.checks.t02_03Check
        }
        if (t02_04) {
          t02_04Check = formData.checks.t02_04Check
        }
        if (t02_05) {
          t02_05Check = formData.checks.t02_05Check
        }
        if (t02_06) {
          t02_06Check = formData.checks.t02_06Check
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
        if (t03_05) {
          t03_05Check = formData.checks.t03_05Check
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
        if (t04_05) {
          t04_05Check = formData.checks.t04_05Check
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
        if (t05_04) {
          t05_04Check = formData.checks.t05_04Check
        }
        if (t05_05) {
          t05_05Check = formData.checks.t05_05Check
        }
      }
    }
  })

  let firstload = true
  $: {
    if (!firstload) {
      localStorage.setItem("Page2FormData", JSON.stringify({
        page2Array,
        checks: {...page2Checks}
      }))
    }
    firstload = false
  }

</script>

<div class="tablebox">
  <!-- Binded Inputs -->
  <div class="tablewrapper">
    <p id="icemakercheck"><input type="checkbox" bind:checked="{icemaker}"> Running?</p>
    {#if icemaker}
      <table id="icemaker">
        <thead>
          <tr>
            <th colspan="2">Ice Maker</th>
          </tr>
        </thead>
          <tr>
            <td>Water Leaking?</td>
            <td class="center required">
              <input type="radio" name="t01_01" bind:group="{t01_01}" value="Yes" required> Yes /
              <input type="radio" name="t01_01" bind:group="{t01_01}" value="No"> No
            </td>
          </tr>
          <tr>
            <td>External Condition <span>(circle condition)</span></td>
            <td class="center required">
              <input type="radio" name="t01_02" bind:group="{t01_02}" value="Good" required> Good /
              <input type="radio" name="t01_02" bind:group="{t01_02}" value="Bad"> Bad
            </td>
          </tr>
          <tr>
            <td>Abnormal Noise / Vibration</td>
            <td class="center required">
              <input type="radio" name="t01_03" bind:group="{t01_03}" value="Yes" required> Yes /
              <input type="radio" name="t01_03" bind:group="{t01_03}" value="No"> No
            </td>
          </tr>
          <tr>
            <td>Ice Thickness <span>(~3/16" to 1/4")</span></td>
            <td id="icemaker-thickness">
              <input type="text" bind:value="{t01_04}">
            </td>
          </tr>
      </table>
    {:else}
      <table id="icemaker">
        <thead>
          <tr>
            <th colspan="2">Ice Maker</th>
          </tr>
        </thead>
          <tr>
            <td>Water Leaking?</td>
            <td class="center disabled">
              <input type="radio" name="t01_01" bind:group="{t01_01}" value="Yes" disabled> Yes /
              <input type="radio" name="t01_01" bind:group="{t01_01}" value="No" disabled> No
            </td>
          </tr>
          <tr>
            <td>External Condition <span>(circle condition)</span></td>
            <td class="center disabled">
              <input type="radio" name="t01_02" bind:group="{t01_02}" value="Good" disabled> Good /
              <input type="radio" name="t01_02" bind:group="{t01_02}" value="Bad" disabled> Bad
            </td>
          </tr>
          <tr>
            <td>Abnormal Noise / Vibration</td>
            <td class="center disabled">
              <input type="radio" name="t01_03" bind:group="{t01_03}" value="Yes" disabled> Yes /
              <input type="radio" name="t01_03" bind:group="{t01_03}" value="No" disabled> No
            </td>
          </tr>
          <tr>
            <td>Ice Thickness <span>(~3/16" to 1/4")</span></td>
            <td id="icemaker-thickness">
              <input type="text" bind:value="{t01_04}" disabled>
            </td>
          </tr>
      </table>
    {/if}
    

    <table id="ammonia">
      <thead>
        <tr>
          <th colspan="2">Ammonia Detection</th>
        </tr>
      </thead>

      <tr>
        <td>East Engine Room 25/100 PPM <span>(0 PPM)</span></td>
        <td class="labeled">
          <input type="number" bind:value="{t02_01}" required class:highlight="{t02_01Check}" on:change="{() => t02_01Check = checkValues(t02_01, 0, 0)}">
          <label for="">ppm</label>
        </td>
      </tr>
      <tr>
        <td>East Engine Room 2% NH3 <span>(0 PPM)</span></td>
        <td class="labeled">
          <input type="number" bind:value="{t02_02}" required class:highlight="{t02_02Check}" on:change="{() => t02_02Check = checkValues(t02_02, 0, 0)}">
          <label for="">ppm</label>
        </td>
      </tr>
      <tr>
        <td>West Engine Room 25/100 PPM <span>(0 PPM)</span></td>
        <td class="labeled">
          <input type="number" bind:value="{t02_03}" required class:highlight="{t02_03Check}" on:change="{() => t02_03Check = checkValues(t02_03, 0, 0)}">
          <label for="">ppm</label>
        </td>
      </tr>
      <tr>
        <td>West Engine Room 2% NH3 <span>(0 PPM)</span></td>
        <td class="labeled">
          <input type="number" bind:value="{t02_04}" required class:highlight="{t02_04Check}" on:change="{() => t02_04Check = checkValues(t02_04, 0, 0)}">
          <label for="">ppm</label>
        </td>
      </tr>
      <tr>
        <td>Snake Pit 25/100 PPM <span>(0 PPM)</span></td>
        <td class="labeled">
          <input type="number" bind:value="{t02_05}" required class:highlight="{t02_05Check}" on:change="{() => t02_05Check = checkValues(t02_05, 0, 0)}">
          <label for="">ppm</label>
        </td>
      </tr>
      <tr>
        <td>Bldg. 6 Penthouse 25/100 PPM <span>(0 PPM)</span></td>
        <td class="labeled">
          <input type="number" bind:value="{t02_06}" required class:highlight="{t02_06Check}" on:change="{() => t02_06Check = checkValues(t02_06, 0, 0)}">
          <label for="">ppm</label>
        </td>
      </tr>
    </table>
  </div>

  <!-- Binded Inputs -->
  <div class="labeledtables">
    <h2>-20 Pump Recirculator Package (Pit)</h2>

    <div class="tablewrapper">
      <div class="wrapped">
        <div class="tablewithlabel">
          <h2 class="label">Pump #1</h2>
          <p><input type="checkbox" bind:checked="{Pump1a}"> Running?</p>
          {#if Pump1a}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(25 to 50 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td>
                  <input type="number" bind:value="{t03_01}" required class:highlight="{t03_01Check}" on:change="{() => t03_01Check = checkValues(t03_01, 25, 50)}">
                </td>
                <td>
                  <input type="number" bind:value="{t03_02}" required class:highlight="{t03_02Check}" on:change="{() => t03_02Check = checkValues(t03_02, 0, .6)}" step="0.1">
                </td>
              </tr>
            </table>
          {:else}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(25 to 50 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td>
                  <input type="number" bind:value="{t03_01}" disabled class:highlight="{t03_01Check}" on:change="{() => t03_01Check = checkValues(t03_01, 25, 50)}">
                </td>
                <td>
                  <input type="number" bind:value="{t03_02}" disabled class:highlight="{t03_02Check}" on:change="{() => t03_02Check = checkValues(t03_02, 0, .6)}">
                </td>
              </tr>
            </table>
          {/if}
        </div>
        <div class="tablewithlabel">
          <h2 class="label">Pump #2</h2>
          <p><input type="checkbox" bind:checked="{Pump2a}"> Running?</p>
          {#if Pump2a}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(25 to 50 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td>
                  <input type="number" bind:value="{t03_03}" required class:highlight="{t03_03Check}" on:change="{() => t03_03Check = checkValues(t03_03, 25, 50)}">
                </td>
                <td>
                  <input type="number" bind:value="{t03_04}" required class:highlight="{t03_04Check}" on:change="{() => t03_04Check = checkValues(t03_04, 0, .6)}" step="0.1">
                </td>
              </tr>
              <tfoot>
                <tr>
                  <td colspan="2"><span class="smalltxt">Any abnormal vibrations inform supervisor and/or submit notification.</span></td>
                </tr>
              </tfoot>
            </table>
          {:else}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(25 to 50 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td>
                  <input type="number" bind:value="{t03_03}" disabled class:highlight="{t03_03Check}" on:change="{() => t03_03Check = checkValues(t03_03, 25, 50)}">
                </td>
                <td>
                  <input type="number" bind:value="{t03_04}" disabled class:highlight="{t03_04Check}" on:change="{() => t03_04Check = checkValues(t03_04, 0, .6)}">
                </td>
              </tr>
              <tfoot>
                <tr>
                  <td colspan="2"><span class="smalltxt">Any abnormal vibrations inform supervisor and/or submit notification.</span></td>
                </tr>
              </tfoot>
            </table>
          {/if}
        </div>
      </div>

      <table id="vessel">
        <thead>
          <tr>
            <th colspan="2">Vessel</th>
          </tr>
        </thead>
        <tr>
          <td>Liquid Level % <span>(20 to 35%)</span></td>
          <td class="labeled">
            <input type="number" bind:value="{t03_05}" required class:highlight="{t03_05Check}" on:change="{() => t03_05Check = checkValues(t03_05, 20, 35)}">
            <label for="">%</label>
          </td>
        </tr>
        <tr>
          <td>External Condition <span>(circle condition)</span></td>
          <td class="center vesseltd required">
            <label class="vesselradio"><input type="radio" name="t03_06" bind:group="{t03_06}" value="Good" required> Good /</label>
            <label class="vesselradio"><input type="radio" name="t03_06" bind:group="{t03_06}" value="Bad" required>Bad</label>
          </td>
        </tr>
        <tr>
          <td>Abnormal Noise / Vibration</td>
          <td class="center vesseltd noborder required">
            <label class="vesselradio"><input type="radio" name="t03_07" bind:group="{t03_07}" value="Yes" required> Yes /</label>
            <label class="vesselradio"><input type="radio" name="t03_07" bind:group="{t03_07}" value="No" required> No</label>
          </td>
        </tr>
        <tr>
          <td>Oil Pot Frost <span>(% Frosted)</span></td>
          <td class="labeled">
            <input type="number" bind:value="{t03_08}" required>
            <label for="">%</label>
          </td>
        </tr>
      </table>
    </div>
  </div>


  <div class="labeledtables">
    <h2>+10 Pump Receiver Package</h2>

    <div class="tablewrapper">
      <div class="wrapped">
        <div class="tablewithlabel">
          <h2 class="label">Pump #1</h2>
          <p><input type="checkbox" bind:checked="{Pump1b}"> Running?</p>
          {#if Pump1b}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(25 to 70 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td>
                  <input type="number" bind:value="{t04_01}" required class:highlight="{t04_01Check}" on:change="{() => t04_01Check = checkValues(t04_01, 25, 70)}">
                </td>
                <td>
                  <input type="number" bind:value="{t04_02}" required class:highlight="{t04_02Check}" on:change="{() => t04_02Check = checkValues(t04_02, 0, .6)}" step="0.1">
                </td>
              </tr>
            </table>
          {:else}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(25 to 70 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td>
                  <input type="number" bind:value="{t04_01}" disabled class:highlight="{t04_01Check}" on:change="{() => t04_01Check = checkValues(t04_01, 25, 70)}">
                </td>
                <td>
                  <input type="number" bind:value="{t04_02}" disabled class:highlight="{t04_02Check}" on:change="{() => t04_02Check = checkValues(t04_02, 0, .6)}">
                </td>
              </tr>
            </table>
          {/if}
        </div>
        <div class="tablewithlabel">
          <h2 class="label">Pump #2</h2>
          <p><input type="checkbox" bind:checked="{Pump2b}"> Running?</p>
          {#if Pump2b}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(25 to 70 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td><input type="number" bind:value="{t04_03}" required class:highlight="{t04_03Check}" on:change="{() => t04_03Check = checkValues(t04_03, 25, 70)}"></td>
                <td><input type="number" bind:value="{t04_04}" required class:highlight="{t04_04Check}" on:change="{() => t04_04Check = checkValues(t04_04, 0, .6)}" step="0.1"></td>
              </tr>
              <tfoot>
                <tr>
                  <td colspan="2"><span class="smalltxt">Any abnormal vibrations inform supervisor and/or submit notification.</span></td>
                </tr>
              </tfoot>
            </table>
          {:else}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(25 to 70 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td><input type="number" bind:value="{t04_03}" disabled class:highlight="{t04_03Check}" on:change="{() => t04_03Check = checkValues(t04_03, 25, 70)}"></td>
                <td><input type="number" bind:value="{t04_04}" disabled class:highlight="{t04_04Check}" on:change="{() => t04_04Check = checkValues(t04_04, 0, .6)}"></td>
              </tr>
              <tfoot>
                <tr>
                  <td colspan="2"><span class="smalltxt">Any abnormal vibrations inform supervisor and/or submit notification.</span></td>
                </tr>
              </tfoot>
            </table>
          {/if}
        </div>
      </div>

      <table id="vessel">
        <thead>
          <tr>
            <th colspan="2">Vessel</th>
          </tr>
        </thead>
        <tr>
          <td>Liquid Level % <span>(20 to 35%)</span></td>
          <td class="labeled">
            <input type="number" bind:value="{t04_05}" required class:highlight="{t04_05Check}" on:change="{() => t04_05Check = checkValues(t04_05, 20, 35)}">
            <label for="">%</label>
          </td>
        </tr>
        <tr>
          <td>External Condition <span>(circle condition)</span></td>
          <td class="center vesseltd required">
            <label class="vesselradio"><input type="radio" name="t04_06" bind:group="{t04_06}" value="Good" required> Good /</label>
            <label class="vesselradio"><input type="radio" name="t04_06" bind:group="{t04_06}" value="Bad" required> Bad</label>
          </td>
        </tr>
        <tr>
          <td>Abnormal Noise / Vibration</td>
          <td class="center vesseltd noborder required">
            <label class="vesselradio"><input type="radio" name="t04_07" bind:group="{t04_07}" value="Yes" required> Yes /</label>
            <label class="vesselradio"><input type="radio" name="t04_07" bind:group="{t04_07}" value="No" required> No</label>
          </td>
        </tr>
        <tr>
          <td>Oil Pot Frost <span>(% Frosted)</span></td>
          <td class="labeled">
            <input type="number" bind:value="{t04_08}" required>
            <label for="">%</label>
          </td>
        </tr>
      </table>
    </div>
  </div>


  <div class="labeledtables">
    <h2>-45 Frigo Pump Receiver Package</h2>

    <div class="tablewrapper">
      <div class="wrapped">
        <div class="tablewithlabel">
          <h2 class="label">Pump #1</h2>
          <p><input type="checkbox" bind:checked="{Pump1c}"> Running?</p>
          {#if Pump1c}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(20 to 35 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td><input type="number" bind:value="{t05_01}" required class:highlight="{t05_01Check}" on:change="{() => t05_01Check = checkValues(t05_01, 20, 35)}"></td>
                <td><input type="number" bind:value="{t05_02}" required class:highlight="{t05_02Check}" on:change="{() => t05_02Check = checkValues(t05_02, 0, .6)}" step="0.1"></td>
              </tr>
            </table>
          {:else}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(20 to 35 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td><input type="number" bind:value="{t05_01}" disabled class:highlight="{t05_01Check}" on:change="{() => t05_01Check = checkValues(t05_01, 20, 35)}"></td>
                <td><input type="number" bind:value="{t05_02}" disabled class:highlight="{t05_02Check}" on:change="{() => t05_02Check = checkValues(t05_02, 0, .6)}"></td>
              </tr>
            </table>
          {/if}
        </div>
        <div class="tablewithlabel">
          <h2 class="label">Pump #2</h2>
          <p><input type="checkbox" bind:checked="{Pump2c}"> Running?</p>
          {#if Pump2c}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(20 to 35 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td><input type="number" bind:value="{t05_03}" required class:highlight="{t05_03Check}" on:change="{() => t05_03Check = checkValues(t05_03, 20, 35)}"></td>
                <td><input type="number" bind:value="{t05_04}" required class:highlight="{t05_04Check}" on:change="{() => t05_04Check = checkValues(t05_04, 0, .6)}" step="0.1"></td>
              </tr>
              <tfoot>
                <tr>
                  <td colspan="2"><span class="smalltxt">Any abnormal vibrations inform supervisor and/or submit notification.</span></td>
                </tr>
              </tfoot>
            </table>
          {:else}
            <table>
              <tr>
                <th>Pump Disch. Pressure <span>(20 to 35 psig)</span></th>
                <th>Rotary Guardian <span>(0 to .6)</span></th>
              </tr>
              <tr>
                <td><input type="number" bind:value="{t05_03}" disabled class:highlight="{t05_03Check}" on:change="{() => t05_03Check = checkValues(t05_03, 20, 35)}"></td>
                <td><input type="number" bind:value="{t05_04}" disabled class:highlight="{t05_04Check}" on:change="{() => t05_04Check = checkValues(t05_04, 0, .6)}"></td>
              </tr>
              <tfoot>
                <tr>
                  <td colspan="2"><span class="smalltxt">Any abnormal vibrations inform supervisor and/or submit notification.</span></td>
                </tr>
              </tfoot>
            </table>
          {/if}
        </div>
      </div>

      <table id="vessel">
        <thead>
          <tr>
            <th colspan="2">Vessel</th>
          </tr>
        </thead>
        <tr>
          <td>Liquid Level % <span>(20 to 35%)</span></td>
          <td class="labeled">
            <input type="number" bind:value="{t05_05}" required class:highlight="{t05_05Check}" on:change="{() => t05_05Check = checkValues(t05_05, 20, 35)}">
            <label for="">%</label>
          </td>
        </tr>
        <tr>
          <td>External Condition <span>(circle condition)</span></td>
          <td class="center vesseltd required">
            <label class="vesselradio"><input type="radio" name="t05_06" bind:group="{t05_06}" value="Good" required> Good /</label>
            <label class="vesselradio"><input type="radio" name="t05_06" bind:group="{t05_06}" value="Bad" required>Bad</label>
          </td>
        </tr>
        <tr>
          <td>Abnormal Noise / Vibration</td>
          <td class="center vesseltd noborder required">
            <label class="vesselradio"><input type="radio" name="t05_07" bind:group="{t05_07}" value="Yes" required> Yes /</label>
            <label class="vesselradio"><input type="radio" name="t05_07" bind:group="{t05_07}" value="No" required> No</label>
          </td>
        </tr>
        <tr>
          <td>Oil Pot Frost <span>(% Frosted)</span></td>
          <td class="labeled">
            <input type="number" bind:value="{t05_08}" required>
            <label for="">%</label>
          </td>
        </tr>
      </table>
    </div>
  </div>
</div>

<style>
  .vesseltd {
    display: inline-flex; 
    width: 100%; 
    border: 0px solid;
    /* border-bottom: 3px solid; */
    justify-content: center;
  }
  .vesseltd input{
    margin-right: 5px;
    margin-left: 5px;
  }

  .vesseltd {
    /* border-bottom: 4px solid #000; */
    /* margin-bottom: -1.5px; */
    border: 1px solid black;
    border-bottom: 2px solid black;
    height: 45px;
    border-spacing: 15px 10px;
    /* border: 0px solid red; */
  }
  
  .noborder {
    border-bottom: 0px;
    margin-bottom: -1px;
  }

  .vesselradio {
    display: flex; 
    align-items:center;
    justify-content: center;
  }

  td.labeled {
    position: relative;
  }

  td.labeled label {
    position: absolute;
    right: 10px;
    top: 25%;
    color: grey;
    font-size: smaller;
  }

  #vessel td.labeled label {
    position: absolute;
    right: 10px;
    top: 30%;
    color: grey;
    font-size: smaller;
  }



  .center {
    text-align: center;
    /* padding: 0 auto; */
  }

  .smalltxt {
    font-size: 13px;
    padding: 5px;
  }

  h2 {
    text-align: center;
    /* text-decoration: underline; */
    text-underline-offset: 3px;
    /* border: 1px solid black; */
    margin-bottom: -20px;
  }

  table {
    width: 100%;
    /* margin-top: 20px; */
  }

  th {
    background-color: lightgoldenrodyellow;
  }

  table, th, td {
    border: 3px solid black;
    border-collapse: collapse;
  }

  table input[type=text] {
    width: 100%;
    height: 30px;
  }

  table input[type=number] {
    width: 100%;
    height: 30px;
    -moz-appearance: textfield;

  }

  tfoot td {
    text-align: center;
  }

  span {
    color: red;
    display: block;
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

  .tablewrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
  }

  #icemaker {
    width: 300px;
    height: 200px;
  }

  #icemaker tr:last-child input{
    height: 100%;
  }

  #icemaker tr td:first-child {
    padding-left: 10px;
  }

  #ammonia {
    width: 400px;
  }

  #ammonia input {
    width: 112px;
    height: 30px;
  }

  #ammonia span {
    /* width: 100%; */
    display: inline;
  }

  #icemaker-thickness {
    height: 42px;
  }

  #ammonia tr td:first-child{
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    border: 0px solid;
    border-bottom: 3px solid;
    width: 100%;
  }

  #ammonia tr:last-child td {
    border-bottom: 0;
    height: 30px;
  }

  #vessel tr td:first-child{
    padding-left: 10px;
  }

  #vessel input {
    height: 41px;
  }

  .labeledtables {
    display: flex;
    flex-direction: column;
  }
  
  .tablewithlabel {
    display: flex;
    flex-direction: column;
    width: 400px;
    position: relative;
    margin: 10px 20px;
  }
  
  .tablewithlabel h2.label {
    position: absolute;
    top: 43px;
    left: -45.5px;
    transform: rotate(90deg);
    /* font-size: 1em; */
    outline: 3px solid;
    padding: 3px;
    width: 68px;
    font-size: 14.5px;
  }

  .wrapped {
    display: flex;
    flex-direction: column;
  }

  #icemakercheck {
    position: absolute;
    left: 170px;
    top: -10px;
  }

  input:required {
    border: 2px solid crimson;
    /* background-color: lightcoral; */
  }

  .required {
    outline: 2px solid red;
    outline-offset: -3px;
  }

  .disabled {
    background-color: grey;
  }

  input:disabled{
    background-color: gray;
    border: 0;
  }
  .highlight {
    animation: highlight .7s infinite alternate;
  }

  @keyframes highlight {
    from {background-color: white;}
    to {background-color: yellow;}
  }

</style>

