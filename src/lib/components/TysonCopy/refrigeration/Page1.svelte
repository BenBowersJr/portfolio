<script>
  import { onMount, onDestroy } from "svelte";
  // @ts-ignore
  import { browser } from '$app/env';

  let t01_01, t01_02, t01_03, t01_04, t01_05, t01_06, t01_07, t01_08, t01_09, t01_10, t01_11, t01_12, t01_13, t01_14, t01_15, t01_16, t01_17;
  let t02_01, t02_02, t02_03, t02_04, t02_05, t02_06, t02_07, t02_08, t02_09, t02_10;
  let t03_01, t03_02, t03_03, t03_04, t03_05, t03_06, t03_07, t03_08, t03_09, t03_10;
  let t04_01, t04_02;
  let t05_01, t05_02, t05_03, t05_04, t05_05;
  let t06_01, t06_02, t06_03, t06_04, t06_05, t06_06, t06_07, t06_08, t06_09;
  let t07_01, t07_02, t07_03, t07_04, t07_05, t07_06, t07_07, t07_08, t07_09;
  let t08_01, t08_02, t08_03, t08_04;

  export let page1Array
  $: page1Array = {
    t01_01, t01_02, t01_03, t01_04, t01_05, t01_06, t01_07, t01_08, t01_09, t01_10, t01_11, t01_12, t01_13, t01_14, t01_15, t01_16, t01_17,
    t02_01, t02_02, t02_03, t02_04, t02_05, t02_06, t02_07, t02_08, t02_09, t02_10,
    t03_01, t03_02, t03_03, t03_04, t03_05, t03_06, t03_07, t03_08, t03_09, t03_10,
    t04_01, t04_02,
    t05_01, t05_02, t05_03, t05_04, t05_05,
    t06_01, t06_02, t06_03, t06_04, t06_05, t06_06, t06_07, t06_08, t06_09,
    t07_01, t07_02, t07_03, t07_04, t07_05, t07_06, t07_07, t07_08, t07_09,
    t08_01, t08_02, t08_03, t08_04,
    table2Required, 
    table3Required,
    QSI235Enable, 
    QGV100Enable,
  }

  let page1Checks
  $: page1Checks = {
    t01_01Check, t01_03Check, t01_04Check, t01_05Check, t01_07Check, t01_10Check, t01_11Check,
    t02_01Check, t02_03Check, t02_04Check,
    t03_01Check, t03_03Check, t03_04Check,
    t05_01Check, t05_02Check,
    t06_01Check, t06_02Check, t06_03Check, t06_04Check, t06_05Check, t06_06Check, t06_07Check, t06_08Check,
    t07_01Check, t07_02Check, t07_03Check, t07_04Check, t07_06Check, t07_08Check,
    t08_01Check,
  }
  
  let t01_01Check, t01_03Check, t01_04Check, t01_05Check, t01_07Check, t01_10Check, t01_11Check;
  let t02_01Check, t02_03Check, t02_04Check;
  let t03_01Check, t03_03Check, t03_04Check;
  let t05_01Check, t05_02Check;
  let t06_01Check, t06_02Check, t06_03Check, t06_04Check, t06_05Check, t06_06Check, t06_07Check, t06_08Check;
  let t07_01Check, t07_02Check, t07_03Check, t07_04Check, t07_06Check, t07_08Check;
  let t08_01Check;

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
      formData = JSON.parse(localStorage.getItem('Page1FormData'))

      if (!formData) {
        return
      }

      if (formData.page1Array) {
        console.log(formData)
        console.log(formData.page1Array.t05_04)

        t01_01 = formData.page1Array.t01_01;
        t01_02 = formData.page1Array.t01_02;
        t01_03 = formData.page1Array.t01_03;
        t01_04 = formData.page1Array.t01_04;
        t01_05 = formData.page1Array.t01_05;
        t01_06 = formData.page1Array.t01_06;
        t01_07 = formData.page1Array.t01_07;
        t01_08 = formData.page1Array.t01_08;
        t01_09 = formData.page1Array.t01_09;
        t01_10 = formData.page1Array.t01_10;
        t01_11 = formData.page1Array.t01_11;
        t01_12 = formData.page1Array.t01_12;
        t01_13 = formData.page1Array.t01_13;
        t01_14 = formData.page1Array.t01_14;
        t01_15 = formData.page1Array.t01_15;
        t01_16 = formData.page1Array.t01_16;
        t01_17 = formData.page1Array.t01_17;
        
        t02_01 = formData.page1Array.t02_01;
        t02_02 = formData.page1Array.t02_02;
        t02_03 = formData.page1Array.t02_03;
        t02_04 = formData.page1Array.t02_04;
        t02_05 = formData.page1Array.t02_05;
        t02_06 = formData.page1Array.t02_06;
        t02_07 = formData.page1Array.t02_07;
        t02_08 = formData.page1Array.t02_08;
        t02_09 = formData.page1Array.t02_09;
        t02_10 = formData.page1Array.t02_10;
  
        t03_01 = formData.page1Array.t03_01;
        t03_02 = formData.page1Array.t03_02;
        t03_03 = formData.page1Array.t03_03;
        t03_04 = formData.page1Array.t03_04;
        t03_05 = formData.page1Array.t03_05;
        t03_06 = formData.page1Array.t03_06;
        t03_07 = formData.page1Array.t03_07;
        t03_08 = formData.page1Array.t03_08;
        t03_09 = formData.page1Array.t03_09;
        t03_10 = formData.page1Array.t03_10;
        
        t04_01 = formData.page1Array.t04_01;
        t04_02 = formData.page1Array.t04_02;
        
        t05_01 = formData.page1Array.t05_01;
        t05_02 = formData.page1Array.t05_02;
        t05_03 = formData.page1Array.t05_03;
        t05_04 = formData.page1Array.t05_04;
        console.log(t05_04)
        t05_05 = formData.page1Array.t05_05;
        
        t06_01 = formData.page1Array.t06_01;
        t06_02 = formData.page1Array.t06_02;
        t06_03 = formData.page1Array.t06_03;
        t06_04 = formData.page1Array.t06_04;
        t06_05 = formData.page1Array.t06_05;
        t06_06 = formData.page1Array.t06_06;
        t06_07 = formData.page1Array.t06_07;
        t06_08 = formData.page1Array.t06_08;
        t06_09 = formData.page1Array.t06_09;
        
        t07_01 = formData.page1Array.t07_01;
        t07_02 = formData.page1Array.t07_02;
        t07_03 = formData.page1Array.t07_03;
        t07_04 = formData.page1Array.t07_04;
        t07_05 = formData.page1Array.t07_05;
        t07_06 = formData.page1Array.t07_06;
        t07_07 = formData.page1Array.t07_07;
        t07_08 = formData.page1Array.t07_08;
        t07_09 = formData.page1Array.t07_09;
        
        t08_01 = formData.page1Array.t08_01;
        t08_02 = formData.page1Array.t08_02;
        t08_03 = formData.page1Array.t08_03;
        t08_04 = formData.page1Array.t08_04;
        
        table2Required = formData.page1Array.table2Required;
        table3Required = formData.page1Array.table3Required;
        QSI235Enable = formData.page1Array.QSI235Enable;
        QGV100Enable = formData.page1Array.QGV100Enable;
      }

      if (formData.checks) {
        //everything in in a if statement to check if the form was reset, if it was dont add the highlighting
        if (t01_01) {
          t01_01Check = formData.checks.t01_01Check;
        }
        if (t01_03) {
          t01_03Check = formData.checks.t01_03Check;
        }
        if (t01_04) {
          t01_04Check = formData.checks.t01_04Check;
        }
        if (t01_05) {
          t01_05Check = formData.checks.t01_05Check;
        }
        if (t01_07) {
          t01_07Check = formData.checks.t01_07Check;
        }
        if (t01_10) {
          t01_10Check = formData.checks.t01_10Check;
        }
        if (t01_11) {
          t01_11Check = formData.checks.t01_11Check;
        }

        if (t02_01) {
          t02_01Check = formData.checks.t02_01Check;
        }
        if (t02_03) {
          t02_03Check = formData.checks.t02_03Check;
        }
        if (t02_04) {
          t02_04Check = formData.checks.t02_04Check;
        }

        if (t03_01) {
          t03_01Check = formData.checks.t03_01Check;
        }
        if (t03_03) {
          t03_03Check = formData.checks.t03_03Check;
        }
        if (t03_04) {
          t03_04Check = formData.checks.t03_04Check;
        }

        if (t05_01) {
          t05_01Check = formData.checks.t05_01Check;
        }
        if (t05_02) {
          t05_02Check = formData.checks.t05_02Check;
        }
        
        if (t06_01) {
          t06_01Check = formData.checks.t06_01Check;
        }
        if (t06_02) {
          t06_02Check = formData.checks.t06_02Check;
        }
        if (t06_03) {
          t06_03Check = formData.checks.t06_03Check;
        }
        if (t06_04) {
          t06_04Check = formData.checks.t06_04Check;
        }
        if (t06_05) {
          t06_05Check = formData.checks.t06_05Check;
        }
        if (t06_06) {
          t06_06Check = formData.checks.t06_06Check;
        }
        if (t06_07) {
          t06_07Check = formData.checks.t06_07Check;
        }
        if (t06_08) {
          t06_08Check = formData.checks.t06_08Check;
        }

        if (t07_01) {
          t07_01Check = formData.checks.t07_01Check;
        }
        if (t07_02) {
          t07_02Check = formData.checks.t07_02Check;
        }
        if (t07_03) {
          t07_03Check = formData.checks.t07_03Check;
        }
        if (t07_04) {
          t07_04Check = formData.checks.t07_04Check;
        }
        if (t07_06) {
          t07_06Check = formData.checks.t07_06Check;
        }
        if (t07_08) {
          t07_08Check = formData.checks.t07_08Check;
        }
        
        if (t08_01) {
          t08_01Check = formData.checks.t08_01Check;
        }
      }
    }
  })

  // This sets the Local Storage 
  let firstload = true
  $: {
    if (!firstload) {
      localStorage.setItem("Page1FormData", JSON.stringify({
        page1Array: {...page1Array},
        checks: {...page1Checks}
      }))
    }
    firstload = false
  }
  let table2Required, table3Required
  let QSI235Enable, QGV100Enable
</script>

<div class="tablebox">
  <h2>Air Receivers & Compressors</h2>
  
  <!-- First Compressors -->
  <div class="table-group">
    <table class="engine-room border">
      <thead>
        <tr>
          <th></th>
          <th>Engine Room</th>
          <th>Pressure <span>(100-135psig)</span></th>
          <th>Load %</th>
          <th>Oil Temp °F <span>(140-150F)</span></th>
          <th>Air Temp °F <span>(160-200F)</span></th>
          <th>Oil Level % <span>(50-100)</span></th>
          <th>Hours</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="enabler"><input type="checkbox" bind:checked="{QSI235Enable}"></td>
          {#if QSI235Enable}
            <td class="row-name">QSI-235</td>
            <td class="labeled">
              <input type="number" bind:value='{t01_01}' class:highlight="{t01_01Check}" on:change="{() => t01_01Check = checkValues(t01_01, 100, 130)}">
              <label for="">(psi)</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_02}">
              <label for="t01_02">%</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_03}" class:highlight="{t01_03Check}" on:change="{() => t01_03Check = checkValues(t01_03, 140, 150)}">
              <label for="t01_03">°F</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_04}" class:highlight="{t01_04Check}" on:change="{() => t01_04Check = checkValues(t01_04, 160, 200)}">
              <label for="t01_03">°F</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_05}" class:highlight="{t01_05Check}" on:change="{() => t01_05Check = checkValues(t01_05, 50, 100)}" required>
              <label for="t01_03">%</label>
            </td>

            <td>
              <input type="number" bind:value="{t01_06}" required>
            </td>
          {:else}
            <td class="row-name">QSI-235</td>
            <td class="labeled">
              <input type="number" bind:value='{t01_01}' class:highlight="{t01_01Check}" on:change="{() => t01_01Check = checkValues(t01_01, 100, 130)}" disabled>
              <label for="">(psi)</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_02}" disabled>
              <label for="t01_02">%</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_03}" class:highlight="{t01_03Check}" on:change="{() => t01_03Check = checkValues(t01_03, 140, 150)}" disabled>
              <label for="t01_03">°F</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_04}" class:highlight="{t01_04Check}" on:change="{() => t01_04Check = checkValues(t01_04, 160, 200)}" disabled>
              <label for="t01_03">°F</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_05}" class:highlight="{t01_05Check}" on:change="{() => t01_05Check = checkValues(t01_05, 50, 100)}">
              <label for="t01_03">%</label>
            </td>

            <td>
              <input type="number" bind:value="{t01_06}">
            </td>
          {/if}
        </tr>

        <tr>
          <td class="enabler"><input type="checkbox" bind:checked="{QGV100Enable}"></td>
          {#if QGV100Enable}
            <td class="row-name">QGV-100</td>
            <td class="labeled">
              <input type="number" bind:value='{t01_07}' class:highlight="{t01_07Check}" on:change="{() => t01_07Check = checkValues(t01_07, 100, 130)}">
              <label for="">(psi)</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_08}">
              <label for="t01_02">%</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_09}" disabled>
              <label for="t01_03">°F</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_10}" class:highlight="{t01_10Check}" on:change="{() => t01_10Check = checkValues(t01_10, 160, 200)}">
              <label for="t01_03">°F</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_11}" class:highlight="{t01_11Check}" on:change="{() => t01_11Check = checkValues(t01_11, 50, 100)}" required>
              <label for="t01_03">%</label>
            </td>

            <td>
              <input type="number" bind:value="{t01_12}" required>
            </td>
          {:else}
            <td class="row-name">QGV-100</td>
            <td class="labeled">
              <input type="number" bind:value='{t01_07}' class:highlight="{t01_07Check}" on:change="{() => t01_07Check = checkValues(t01_07, 100, 130)}" disabled>
              <label for="">(psi)</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_08}" disabled>
              <label for="t01_02">%</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_09}" disabled>
              <label for="t01_03">°F</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_10}" class:highlight="{t01_10Check}" on:change="{() => t01_10Check = checkValues(t01_10, 160, 200)}" disabled>
              <label for="t01_03">°F</label>
            </td>

            <td class="labeled">
              <input type="number" bind:value="{t01_11}" class:highlight="{t01_11Check}" on:change="{() => t01_11Check = checkValues(t01_11, 50, 100)}">
              <label for="t01_03">%</label>
            </td>

            <td>
              <input type="number" bind:value="{t01_12}">
            </td>
          {/if}
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <tr>
          <th>Main Receiver psig</th>
          <th>Line Pressure psig</th>
          <th>Filter Differential</th>
          <th>Auto Drain</th>
          <th>Dryer Running</th>
        </tr>
      </thead>
      <tbody>
        {#if QGV100Enable || QSI235Enable}
          <tr>
            <td><input type="number" bind:value="{t01_13}" required></td>
            <td><input type="number" bind:value="{t01_14}" required></td>
            <td><input type="number" bind:value="{t01_15}" required></td>
            <td class="center required">
              <input type="checkbox" name="t01_16" bind:checked="{t01_16}">
            </td>
            <td class="center required">
              <input type="radio" name="t01_17" bind:group="{t01_17}" value="Yes" required> Yes 
              / 
              <input type="radio" name="t01_17" bind:group="{t01_17}" value="No"> No
            </td>
          </tr>
        {:else}
          <tr>
            <td><input type="number" bind:value="{t01_13}" disabled></td>
            <td><input type="number" bind:value="{t01_14}" disabled></td>
            <td><input type="number" bind:value="{t01_15}" disabled></td>
            <td class="center">
              <input type="checkbox" name="t01_16" bind:checked="{t01_16}">
            </td>
            <td class="center">
              <input type="radio" name="t01_17" bind:group="{t01_17}" value="Yes"> Yes / 
              <input type="radio" name="t01_17" bind:group="{t01_17}" value="No"> No
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>

  <!-- QSI-245 Compressor -->
  <label>Running? <input type="checkbox" bind:checked="{table2Required}"></label>
  {#if table2Required}
    <div class="table-group">
      <table class="border">
        <tr>
          <th rowspan="2" class="row-name">QSI-245</th>
          <th>Pressure <span>(100-135 psig)</span></th>
          <th>Load %</th>
          <th>Air Temp. °F <span>(160-200F)</span></th>
          <th>Oil Level % <span>(50-100)</span></th>
          <th>Hours</th>
        </tr>

        <tr>
          <td class="labeled">
            <input type="number" bind:value="{t02_01}" class:highlight="{t02_01Check}" on:change="{() => t02_01Check = checkValues(t02_01, 100, 135)}">
            <label for="">(psi)</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t02_02}">
            <label for="">%</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t02_03}" class:highlight="{t02_03Check}" on:change="{() => t02_03Check = checkValues(t02_03, 160, 200)}">
            <label for="">°F</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t02_04}" class:highlight="{t02_04Check}" on:change="{() => t02_04Check = checkValues(t02_04, 50, 100)}" min="0" max="100" required>
            <label for="">%</label>
          </td>
          <td>
            <input type="number" bind:value="{t02_05}" required>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <th>Receiver psig</th>
          <th>Line Pressure psig</th>
          <th>Filter Differential</th>
          <th>Auto Drain</th>
          <th>Dryer Running</th>
        </tr>
        <tr>
          <td><input type="number" bind:value="{t02_06}" required></td>
          <td><input type="number" bind:value="{t02_07}" disabled></td>
          <td><input type="number" bind:value="{t02_08}" disabled></td>
          <td class="center required">
            <input type="checkbox" bind:checked="{t02_09}" required>
          </td>
          <td class="center required">
            <input type="radio" bind:group="{t02_10}" name="t02_10" value="Yes" required> Yes /
            <input type="radio" bind:group="{t02_10}" name="t02_10" value="No"> No
          </td>
        </tr>
      </table>
    </div>
  {:else}
    <div class="table-group">
      <table class="border">
        <tr>
          <th rowspan="2" class="row-name">QSI-245</th>
          <th>Pressure <span>(100-135 psig)</span></th>
          <th>Load %</th>
          <th>Air Temp. °F <span>(160-200F)</span></th>
          <th>Oil Level % <span>(50-100)</span></th>
          <th>Hours</th>
        </tr>

        <tr>
          <td class="labeled">
            <input type="number" bind:value="{t02_01}" class:highlight="{t02_01Check}" on:change="{() => t02_01Check = checkValues(t02_01, 100, 135)}" disabled>
            <label for="">(psi)</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t02_02}" disabled>
            <label for="">%</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t02_03}" class:highlight="{t02_03Check}" on:change="{() => t02_03Check = checkValues(t02_03, 160, 200)}" disabled>
            <label for="">°F</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t02_04}" class:highlight="{t02_04Check}" on:change="{() => t02_04Check = checkValues(t02_04, 50, 100)}" min="0" max="100">
            <label for="">%</label>
          </td>
          <td>
            <input type="number" bind:value="{t02_05}">
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <th>Receiver psig</th>
          <th>Line Pressure psig</th>
          <th>Filter Differential</th>
          <th>Auto Drain</th>
          <th>Dryer Running</th>
        </tr>
        <tr>
          <td><input type="number" bind:value="{t02_06}" disabled></td>
          <td><input type="number" bind:value="{t02_07}" disabled></td>
          <td><input type="number" bind:value="{t02_08}" disabled></td>
          <td class="center">
            <input type="checkbox" bind:checked="{t02_09}">
          </td>
          <td class="center">
            <input type="radio" bind:group="{t02_10}" name="t02_10" value="Yes"> Yes /
            <input type="radio" bind:group="{t02_10}" name="t02_10" value="No"> No
          </td>
        </tr>
      </table>
    </div>
  {/if}

  <!-- QGV-60 Compressor -->
  <label>Running? <input type="checkbox" bind:checked="{table3Required}"></label>
  {#if table3Required}
    <div class="table-group">
      <table class="border">
        <tr>
          <th rowspan="2" class="row-name">QGV-60</th>
          <th>Pressure <span>(100-135 psig)</span></th>
          <th>Load %</th>
          <th>Air Temp. °F <span>(160-200F)</span></th>
          <th>Oil Level % <span>(50-100)</span></th>
          <th>Hours</th>
        </tr>

        <tr>
          <td class="labeled">
            <input type="number" bind:value="{t03_01}" class:highlight="{t03_01Check}" on:change="{() => t03_01Check = checkValues(t03_01, 100, 135)}">
            <label for="">(psi)</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t03_02}">
            <label for="">%</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t03_03}" class:highlight="{t03_03Check}" on:change="{() => t03_03Check = checkValues(t03_03, 160, 200)}">
            <label for="">°F</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t03_04}" class:highlight="{t03_04Check}" on:change="{() => t03_04Check = checkValues(t03_04, 50, 100)}" required>
            <label for="">%</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t03_05}" required>
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <th>Receiver psig</th>
          <th>Line Pressure psig</th>
          <th>Filter Differential</th>
          <th>Auto Drain</th>
          <th>Dryer Running</th>
        </tr>
        <tr>
          <td>
            <input type="number" bind:value="{t03_06}" required>
          </td>
          <td>
            <input type="number" bind:value="{t03_07}" disabled>
          </td>
          <td>
            <input type="number" bind:value="{t03_08}" disabled>
          </td>
          <td class="center required">
            <input type="checkbox" bind:checked="{t03_09}" required>
          </td>
          <td class="center required">
            <input type="radio" bind:group="{t03_10}" name="t03_10" value="Yes" required> Yes /
            <input type="radio" bind:group="{t03_10}" name="t03_10" value="No"> No
          </td>
        </tr>
      </table>
    </div>
  {:else}
    <div class="table-group">
      <table class="border">
        <tr>
          <th rowspan="2" class="row-name">QGV-60</th>
          <th>Pressure <span>(100-135 psig)</span></th>
          <th>Load %</th>
          <th>Air Temp. °F <span>(160-200F)</span></th>
          <th>Oil Level % <span>(50-100)</span></th>
          <th>Hours</th>
        </tr>

        <tr>
          <td class="labeled">
            <input type="number" bind:value="{t03_01}" class:highlight="{t03_01Check}" on:change="{() => t03_01Check = checkValues(t03_01, 100, 135)}" disabled>
            <label for="">(psi)</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t03_02}" disabled>
            <label for="">%</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t03_03}" class:highlight="{t03_03Check}" on:change="{() => t03_03Check = checkValues(t03_03, 160, 200)}" disabled>
            <label for="">°F</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t03_04}" class:highlight="{t03_04Check}" on:change="{() => t03_04Check = checkValues(t03_04, 50, 100)}">
            <label for="">%</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t03_05}">
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <th>Receiver psig</th>
          <th>Line Pressure psig</th>
          <th>Filter Differential</th>
          <th>Auto Drain</th>
          <th>Dryer Running</th>
        </tr>
        <tr>
          <td>
            <input type="number" bind:value="{t03_06}" disabled>
          </td>
          <td>
            <input type="number" bind:value="{t03_07}" disabled>
          </td>
          <td>
            <input type="number" bind:value="{t03_08}" disabled>
          </td>
          <td class="center">
            <input type="checkbox" bind:checked="{t03_09}">
          </td>
          <td class="center">
            <input type="radio" bind:group="{t03_10}" name="t03_10" value="Yes"> Yes /
            <input type="radio" bind:group="{t03_10}" name="t03_10" value="No"> No
          </td>
        </tr>
      </table>
    </div>
  {/if}

  <hr/>
  <p>
    <span> Report any abnormal vibration, noises's or conditions to your supervisor and/or submit notification. </span>
  </p>
  <hr/>

  <!-- all Binded Inputs -->
  <div class="tablewrapper">
    <div class="tablecontainer">
      <h2>Air Compressor Cooling Pumps</h2>
      <table>
        <tr>
          <th>QSI-235 (psig)</th>
          <th>QGV-100 (psig)</th>
        </tr>
        <tr>
          <td class="labeled">
            <input type="number" bind:value="{t04_01}">
            <label for="">(psi)</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t04_02}">
            <label for="">(psi)</label>
          </td>
        </tr>
      </table>
    </div>

    <div class="tablecontainer cistern">
      <h2>Cistern</h2>
      <table>
        <tr>
          <th>Cistern Water Level <span>(25 to 75%)</span></th>
          <th>Water Temp °F <span>(55 to 90°F)</span></th>
          <th>Return Flow</th>
          <th>Basement Sump Pump</th>
          <th>Sand Filter Backwash Total</th>
        </tr>
        <tr>
          <td class="labeled">
            <input type="number" bind:value="{t05_01}" class:highlight="{t05_01Check}" on:change="{() => t05_01Check = checkValues(t05_01, 25, 75)}" required>
            <label for="">%</label>
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t05_02}" class:highlight="{t05_02Check}" on:change="{() => t05_02Check = checkValues(t05_02, 55, 90)}" required>
            <label for="">°F</label>
          </td>
          <td class="center required cisternChoice">
            <!-- <input type="number" bind:value="{t05_03}" required> -->
            <input type="radio" name="t05_03" bind:group="{t05_03}" value="Good" required> Good / 
            <input type="radio" name="t05_03" bind:group="{t05_03}" value="Bad"> Bad 
          </td>
          <td class="center required cisternChoice">
            <!-- <input type="number" bind:value="{t05_04}" required> -->
            <input type="radio" name="t05_04" bind:group="{t05_04}" value="Good" required> Good / 
            <input type="radio" name="t05_04" bind:group="{t05_04}" value="Bad"> Bad 
          </td>
          <td>
            <input type="number" bind:value="{t05_05}" required>
          </td>
        </tr>
      </table>
    </div>
  </div>

  
  <h2>Condenser Pump Pressures (psig)</h2>
  <!-- all Binded Inputs -->
  <table>
    <tr>
      <th>P1 <span>(30 to 60 psig)</span></th>
      <th>P2 <span>(30 to 60 psig)</span></th>
      <th>P3 <span>(30 to 60 psig)</span></th>
      <th>P4 <span>(30 to 60 psig)</span></th>
      <th>P5 <span>(30 to 60 psig)</span></th>
      <th>P6 <span>(30 to 60 psig)</span></th>
      <th>P7 <span>(30 to 60 psig)</span></th>
      <th>P8 <span>(30 to 60 psig)</span></th>
    </tr>

    <tr>
      <td><input type="number" bind:value="{t06_01}" class:highlight="{t06_01Check}" on:change="{() => t06_01Check = checkValues(t06_01, 30, 60)}"></td>
      <td><input type="number" bind:value="{t06_02}" class:highlight="{t06_02Check}" on:change="{() => t06_02Check = checkValues(t06_02, 30, 60)}"></td>
      <td><input type="number" bind:value="{t06_03}" class:highlight="{t06_03Check}" on:change="{() => t06_03Check = checkValues(t06_03, 30, 60)}"></td>
      <td><input type="number" bind:value="{t06_04}" class:highlight="{t06_04Check}" on:change="{() => t06_04Check = checkValues(t06_04, 30, 60)}"></td>
      <td><input type="number" bind:value="{t06_05}" class:highlight="{t06_05Check}" on:change="{() => t06_05Check = checkValues(t06_05, 30, 60)}"></td>
      <td><input type="number" bind:value="{t06_06}" class:highlight="{t06_06Check}" on:change="{() => t06_06Check = checkValues(t06_06, 30, 60)}"></td>
      <td><input type="number" bind:value="{t06_07}" class:highlight="{t06_07Check}" on:change="{() => t06_07Check = checkValues(t06_07, 30, 60)}"></td>
      <td><input type="number" bind:value="{t06_08}" class:highlight="{t06_08Check}" on:change="{() => t06_08Check = checkValues(t06_08, 30, 60)}"></td>
    </tr>

    <tfoot>
      <tr>
        <td colspan="8" style="padding: 5px;" class="required">
          Any abnormal vibrations or noise's? 
          <input type="radio" name="t06_09" bind:group="{t06_09}" value="Yes" required> Yes /
          <input type="radio" name="t06_09" bind:group="{t06_09}" value="No" required> No 
          <small>Report any abnormal conditions to your supervisor and/or submit notification.</small>
        </td>
      </tr>
    </tfoot>
  </table>

  <!-- all Binded Inputs -->
  <div class="tablewrapper">
    <table class="tablesquare">
      <tr>
        <th>JC 1 <span>(30 to 60 psig)</span></th>
        <th>JC 2 <span>(30 to 60 psig)</span></th>
      </tr>
      <tr>
        <td><input type="number" bind:value="{t07_01}" class:highlight="{t07_01Check}" on:change="{() => t07_01Check = checkValues(t07_01, 30, 60)}"></td>
        <td><input type="number" bind:value="{t07_02}" class:highlight="{t07_02Check}" on:change="{() => t07_02Check = checkValues(t07_02, 30, 60)}"></td>
      </tr>
      <tr>
        <th>S7 <span>(30 to 60 psig)</span></th>
        <th>S8 <span>(30 to 60 psig)</span></th>
      </tr>
      <tr>
        <td><input type="number" bind:value="{t07_03}" class:highlight="{t07_03Check}" on:change="{() => t07_03Check = checkValues(t07_03, 30, 60)}"></td>
        <td><input type="number" bind:value="{t07_04}" class:highlight="{t07_04Check}" on:change="{() => t07_04Check = checkValues(t07_04, 30, 60)}"></td>
      </tr>
    </table>

    <table class="tablesquare2">
      <tr>
        <th>PPM #1 <span>(Record Only)</span></th>
        <th>PPM #2 <span>(100-175)</span></th>
        <th>pH <span>(Record)</span></th>
        <th>Conductivity <span>(1500-3000)</span></th>
      </tr>
      <tr>
        <td class="fixpadding"><input type="number" bind:value="{t07_05}" required></td>
        <td><input type="number" bind:value="{t07_06}" class:highlight="{t07_06Check}" on:change="{() => t07_06Check = checkValues(t07_06, 100, 175)}" required></td>
        <td><input type="number" bind:value="{t07_07}" step=".01" required></td>
        <td><input type="number" bind:value="{t07_08}" class:highlight="{t07_08Check}" on:change="{() => t07_08Check = checkValues(t07_08, 1500, 3000)}" required></td>
      </tr>
      <tfoot>
        <tr>
          <td colspan="4" class="required">
            Cleaned Trasar water strainer:  
            <input type="radio" name="t07_09" bind:group="{t07_09}" value="Yes" required> Yes / 
            <input type="radio" name="t07_09" bind:group="{t07_09}" value="No"> No 
          </td>
        </tr>
        <tr>
          <td colspan="4"><span>Report any abnormal conditions to your supervisor and/or submit notification.</span></td>
        </tr>
      </tfoot>
    </table>
  </div>

  <table>
    <tr>
      <th rowspan="2">+10°F Intercooler</th>
      <th>Liquid Level % <span>(20-30%)</span></th>
      <th>Abnormal Noise / Vibration</th>
      <th>External Cond. <span>(circle condition)</span></th>
      <th>Oil Pot Frost <span>(% Frosted)</span></th>
    </tr>
    <tr>
      <td class="labeled">
        <input type="number" bind:value="{t08_01}" class:highlight="{t08_01Check}" on:change="{() => t08_01Check = checkValues(t08_01, 20, 30)}" required>
        <label for="">%</label>
      </td>
      <td class="center required">
        <input type="radio" name="t08_02" bind:group="{t08_02}" value="Yes" required> Yes / 
        <input type="radio" name="t08_02" bind:group="{t08_02}" value="No"> No 
        <!-- <input type="number" bind:value="{t08_02}" required> -->
      </td>
      <td class="center required">
        <input type="radio" name="t08_03" bind:group="{t08_03}" value="Good" required> Good / 
        <input type="radio" name="t08_03" bind:group="{t08_03}" value="Bad"> Bad 
      </td>
      <td class="labeled">
        <input type="number" bind:value="{t08_04}" required>
        <label for="">%</label>
      </td>
    </tr>
  </table>

</div>

<style>
  .center {
    text-align: center;
  }

  small {
    color: red;
    margin: 30px;
  }
  
  td.fixpadding {
    height: 30px;
  }

  td.labeled {
    position: relative;
  }

  .enabler {
    padding: 5px;
  }

  td label {
    position: absolute;
    right: 10px;
    top: 8px;
    color: darkgrey;
    font-size: smaller;
  }

  h2 {
    text-align: center;
  }

  th {
    background-color: lightgoldenrodyellow;
  }

  .table-group {
    margin-bottom: 20px;
  }

  table {
    width: 100%;
  }

  table, th, td {
    border: 3px solid black;
    border-collapse: collapse;
  }

  table.border {
    margin-bottom: -3px;
  }

  table input[type=number] {
    width: 100%;
    height: 30px;
  }

  tfoot td {
    text-align: center;
  }

  tfoot td {
    padding: 5px;
  }

  span {
    color: red;
    display: block;
  }

  th {
    height: 41px;
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

  .tablebox p {
    text-align: center;
  }

  .tablewrapper {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .tablecontainer {
    margin: 20px;

  }

  .tablesquare {
    width: 400px;
    margin: 10px;
  }
  .tablesquare2 {
    width: 700px;
    margin: 10px;
  }

  .engine-room {
    width: 100%;
  }
  .row-name {
    padding-left: 5px;
  }

  #icemaker tr td:first-child {
    padding-left: 10px;
  }

  #ammonia tr td:first-child{
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 31px;
    border: 0px solid;
    border-bottom: 1px solid;
    width: 100%;
  }

  #vessel tr td:first-child{
    padding-left: 10px;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    background-color: gray;
    border: 0;
  }

  input:required {
    border: 2px solid red;
  }

  .required {
    outline: 2px solid red;
    outline-offset: -3px;
  }

  .highlight {
    animation: highlight .7s infinite alternate;
    border: 0px solid black
  }

  .cisternChoice {
    /* display: inline-block; */
    width: 120px;
  }

  @keyframes highlight {
    from {background-color: white;}
    to {background-color: yellow;}
  }


</style>

