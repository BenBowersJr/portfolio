<script>
  import { onMount, onDestroy } from "svelte";
  // @ts-ignore
  import { browser } from '$app/env';

  let t01_01, t01_02, t01_03, t01_04, t01_05, t01_06, t01_07, t01_08, t01_09, t01_10;
  let t01_11, t01_12, t01_13, t01_14, t01_15, t01_16, t01_17, t01_18, t01_19, t01_20;
  let t01_21, t01_22, t01_23, t01_24, t01_25, t01_26, t01_27, t01_28, t01_29, t01_30;
  let t01_31, t01_32, t01_33, t01_34, t01_35, t01_36, t01_37, t01_38, t01_39, t01_40;
  let t01_41, t01_42, t01_43, t01_44, t01_45, t01_46, t01_47, t01_48, t01_49, t01_50;
  let t01_51, t01_52, t01_53, t01_54, t01_55, t01_56, t01_57, t01_58, t01_59, t01_60;
  let t01_61, t01_62, t01_63, t01_64, t01_65, t01_66, t01_67, t01_68;

  let t02_01, t02_02, t02_03, t02_04;

  let t03_01, t03_02;
  let t04_01, t04_02;
  let t05_01, t05_02;
  let t06_01;
  let t07_01;
  let t08_01;
  let t09_01;
  let t10_01;
  let t11_01;

  export let page3Array
  $: page3Array = {
    t01_01, t01_02, t01_03, t01_04, t01_05, t01_06, t01_07, t01_08, t01_09, t01_10,
    t01_11, t01_12, t01_13, t01_14, t01_15, t01_16, t01_17, t01_18, t01_19, t01_20,
    t01_21, t01_22, t01_23, t01_24, t01_25, t01_26, t01_27, t01_28, t01_29, t01_30,
    t01_31, t01_32, t01_33, t01_34, t01_35, t01_36, t01_37, t01_38, t01_39, t01_40,
    t01_41, t01_42, t01_43, t01_44, t01_45, t01_46, t01_47, t01_48, t01_49, t01_50,
    t01_51, t01_52, t01_53, t01_54, t01_55, t01_56, t01_57, t01_58, t01_59, t01_60,
    t01_61, t01_62, t01_63, t01_64, t01_65, t01_66, t01_67, t01_68,
    t02_01, t02_02, t02_03, t02_04,
    t03_01, t03_02,
    t04_01, t04_02,
    t05_01, t05_02,
    t06_01,
    t07_01,
    t08_01,
    t09_01,
    t10_01,
    t11_01
  }

  let page3Checks
  $: page3Checks = {
    t01_03Check, t01_07Check, t01_11Check, t01_15Check, t01_19Check, t01_23Check, t01_27Check, t01_31Check, t01_35Check,
    t01_39Check, t01_43Check, t01_47Check, t01_51Check, t01_55Check, t01_59Check, t01_63Check, t01_67Check,
  }

  let t01_03Check, t01_07Check, t01_11Check, t01_15Check, t01_19Check, t01_23Check, t01_27Check, t01_31Check, t01_35Check;
  let t01_39Check, t01_43Check, t01_47Check, t01_51Check, t01_55Check, t01_59Check, t01_63Check, t01_67Check;
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
      formData = JSON.parse(localStorage.getItem('Page3FormData'))

      if (!formData) {
        return
      }

      if (formData.page3Array) {
        t01_01 = formData.page3Array.t01_01;
        t01_02 = formData.page3Array.t01_02;
        t01_03 = formData.page3Array.t01_03;
        t01_04 = formData.page3Array.t01_04;
        t01_05 = formData.page3Array.t01_05;
        t01_06 = formData.page3Array.t01_06;
        t01_07 = formData.page3Array.t01_07;
        t01_08 = formData.page3Array.t01_08;
        t01_09 = formData.page3Array.t01_09;
        t01_10 = formData.page3Array.t01_10;
        t01_11 = formData.page3Array.t01_11;
        t01_12 = formData.page3Array.t01_12;
        t01_13 = formData.page3Array.t01_13;
        t01_14 = formData.page3Array.t01_14;
        t01_15 = formData.page3Array.t01_15;
        t01_16 = formData.page3Array.t01_16;
        t01_17 = formData.page3Array.t01_17;
        t01_18 = formData.page3Array.t01_18;
        t01_19 = formData.page3Array.t01_19;
        t01_20 = formData.page3Array.t01_20;
        t01_21 = formData.page3Array.t01_21;
        t01_22 = formData.page3Array.t01_22;
        t01_23 = formData.page3Array.t01_23;
        t01_24 = formData.page3Array.t01_24;
        t01_25 = formData.page3Array.t01_25;
        t01_26 = formData.page3Array.t01_26;
        t01_27 = formData.page3Array.t01_27;
        t01_28 = formData.page3Array.t01_28;
        t01_29 = formData.page3Array.t01_29;
        t01_30 = formData.page3Array.t01_30;
        t01_31 = formData.page3Array.t01_31;
        t01_32 = formData.page3Array.t01_32;
        t01_33 = formData.page3Array.t01_33;
        t01_34 = formData.page3Array.t01_34;
        t01_35 = formData.page3Array.t01_35;
        t01_36 = formData.page3Array.t01_36;
        t01_37 = formData.page3Array.t01_37;
        t01_38 = formData.page3Array.t01_38;
        t01_39 = formData.page3Array.t01_39;
        t01_40 = formData.page3Array.t01_40;
        t01_41 = formData.page3Array.t01_41;
        t01_42 = formData.page3Array.t01_42;
        t01_43 = formData.page3Array.t01_43;
        t01_44 = formData.page3Array.t01_44;
        t01_45 = formData.page3Array.t01_45;
        t01_46 = formData.page3Array.t01_46;
        t01_47 = formData.page3Array.t01_47;
        t01_48 = formData.page3Array.t01_48;
        t01_49 = formData.page3Array.t01_49;
        t01_50 = formData.page3Array.t01_50;
        t01_51 = formData.page3Array.t01_51;
        t01_52 = formData.page3Array.t01_52;
        t01_53 = formData.page3Array.t01_53;
        t01_54 = formData.page3Array.t01_54;
        t01_55 = formData.page3Array.t01_55;
        t01_56 = formData.page3Array.t01_56;
        t01_57 = formData.page3Array.t01_57;
        t01_58 = formData.page3Array.t01_58;
        t01_59 = formData.page3Array.t01_59;
        t01_60 = formData.page3Array.t01_60;
        t01_61 = formData.page3Array.t01_61;
        t01_62 = formData.page3Array.t01_62;
        t01_63 = formData.page3Array.t01_63;
        t01_64 = formData.page3Array.t01_64;
        t01_65 = formData.page3Array.t01_65;
        t01_66 = formData.page3Array.t01_66;
        t01_67 = formData.page3Array.t01_67;
        t01_68 = formData.page3Array.t01_68;
  
        t02_01 = formData.page3Array.t02_01;
        t02_02 = formData.page3Array.t02_02;
        t02_03 = formData.page3Array.t02_03;
        t02_04 = formData.page3Array.t02_04;
  
        t03_01 = formData.page3Array.t03_01;
        t03_02 = formData.page3Array.t03_02;
        t04_01 = formData.page3Array.t04_01;
        t04_02 = formData.page3Array.t04_02;
        t05_01 = formData.page3Array.t05_01;
        t05_02 = formData.page3Array.t05_02;
        t06_01 = formData.page3Array.t06_01;
        t07_01 = formData.page3Array.t07_01;
        t08_01 = formData.page3Array.t08_01;
        t09_01 = formData.page3Array.t09_01;
        t10_01 = formData.page3Array.t10_01;
        t11_01 = formData.page3Array.t11_01;
      }

      if (formData.checks) {
        if (t01_03) {
          t01_03Check = formData.checks.t01_03Check
        }
        if (t01_07) {
          t01_07Check = formData.checks.t01_07Check
        }
        if (t01_11) {
          t01_11Check = formData.checks.t01_11Check
        }
        if (t01_15) {
          t01_15Check = formData.checks.t01_15Check
        }
        if (t01_19) {
          t01_19Check = formData.checks.t01_19Check
        }
        if (t01_23) {
          t01_23Check = formData.checks.t01_23Check
        }
        if (t01_27) {
          t01_27Check = formData.checks.t01_27Check
        }
        if (t01_31) {
          t01_31Check = formData.checks.t01_31Check
        }
        if (t01_35) {
          t01_35Check = formData.checks.t01_35Check
        }
        if (t01_39) {
          t01_39Check = formData.checks.t01_39Check
        }
        if (t01_43) {
          t01_43Check = formData.checks.t01_43Check
        }
        if (t01_47) {
          t01_47Check = formData.checks.t01_47Check
        }
        if (t01_51) {
          t01_51Check = formData.checks.t01_51Check
        }
        if (t01_55) {
          t01_55Check = formData.checks.t01_55Check
        }
        if (t01_59) {
          t01_59Check = formData.checks.t01_59Check
        }
        if (t01_63) {
          t01_63Check = formData.checks.t01_63Check
        }
        if (t01_67) {
          t01_67Check = formData.checks.t01_67Check
        }
      }
    }
  })

  let firstload = true
  $: {
    if (!firstload) {
      localStorage.setItem("Page3FormData", JSON.stringify({
        page3Array: {...page3Array},
        checks: {...page3Checks}
      }))
    }
    firstload = false
  }

</script>


<main>
  <div class="tablebox">
    <table>
      <tr>
        <th></th>
        <th><p class="underline">Coil Condition</p> <span>(Frost)</span></th>
        <th><p class="underline">Fan Condition</p>  <span>(Good / Bad)</span></th>
        <th><p class="underline">Room Temperature</p> <span>(°F)</span> </th>
        <th><p class="underline">Abnormal Noise / Vibration</p> <span>(Yes / No)</span></th>
      </tr>
  
      <tr>
        <td class="name">AU-1 Lower Cooler <small>(West)</small></td>
        <td>
          <input type="radio" name="t01_01" bind:group="{t01_01}" value="Good" required> Good /
          <input type="radio" name="t01_01" bind:group="{t01_01}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_02" bind:group="{t01_02}" value="Yes" required> Good /
          <input type="radio" name="t01_02" bind:group="{t01_02}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_03}" class:highlight="{t01_03Check}" on:change="{() => t01_03Check = checkValues(t01_03, 32, 40)}"> 
          <span class="positioned">(32 to 40°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_04" bind:group="{t01_04}" value="Yes" required> Yes /
          <input type="radio" name="t01_04" bind:group="{t01_04}" value="No"> No
        </td>
      </tr>

      <tr>
        <td class="name">AU-2 Lower Cooler <small>(East)</small></td>
        <td>
          <input type="radio" name="t01_05" bind:group="{t01_05}" value="Good" required> Good /
          <input type="radio" name="t01_05" bind:group="{t01_05}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_06" bind:group="{t01_06}" value="Yes" required> Good /
          <input type="radio" name="t01_06" bind:group="{t01_06}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_07}" class:highlight="{t01_07Check}" on:change="{() => t01_07Check = checkValues(t01_07, 32, 40)}"> 
          <span class="positioned">(32 to 40°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_08" bind:group="{t01_08}" value="Yes" required> Yes /
          <input type="radio" name="t01_08" bind:group="{t01_08}" value="No"> No
        </td>
      </tr>

      <tr>
        <td class="name">AU-7 Upper Cooler <small>(South)</small></td>
        <td>
          <input type="radio" name="t01_09" bind:group="{t01_09}" value="Good" required> Good /
          <input type="radio" name="t01_09" bind:group="{t01_09}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_10" bind:group="{t01_10}" value="Yes" required> Good /
          <input type="radio" name="t01_10" bind:group="{t01_10}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_11}" required class:highlight="{t01_11Check}" on:change="{() => t01_11Check = checkValues(t01_11, 32, 40)}"> 
          <span class="positioned">(32 to 40°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_12" bind:group="{t01_12}" value="Yes" required> Yes /
          <input type="radio" name="t01_12" bind:group="{t01_12}" value="No"> No
        </td>
      </tr>

      <tr>
        <td class="name">AU-8 Upper Cooler <small>(North)</small></td>
        <td>
          <input type="radio" name="t01_13" bind:group="{t01_13}" value="Good" required> Good /
          <input type="radio" name="t01_13" bind:group="{t01_13}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_14" bind:group="{t01_14}" value="Yes" required> Good /
          <input type="radio" name="t01_14" bind:group="{t01_14}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_15}" required class:highlight="{t01_15Check}" on:change="{() => t01_15Check = checkValues(t01_15, 32, 40)}"> 
          <span class="positioned">(32 to 40°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_16" bind:group="{t01_16}" value="Yes" required> Yes /
          <input type="radio" name="t01_16" bind:group="{t01_16}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-9 Upper Frz. <small>(S.W.)</small></td>
        <td>
          <input type="radio" name="t01_17" bind:group="{t01_17}" value="Good" required> Good /
          <input type="radio" name="t01_17" bind:group="{t01_17}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_18" bind:group="{t01_18}" value="Yes" required> Good /
          <input type="radio" name="t01_18" bind:group="{t01_18}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_19}" required class:highlight="{t01_19Check}" on:change="{() => t01_19Check = checkValues(t01_19, -15, 5)}"> 
          <span class="positioned">(-15 to 5°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_20" bind:group="{t01_20}" value="Yes" required> Yes /
          <input type="radio" name="t01_20" bind:group="{t01_20}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-10 Upper Frz. <small>(S.E.)</small></td>
        <td>
          <input type="radio" name="t01_21" bind:group="{t01_21}" value="Good" required> Good /
          <input type="radio" name="t01_21" bind:group="{t01_21}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_22" bind:group="{t01_22}" value="Yes" required> Good /
          <input type="radio" name="t01_22" bind:group="{t01_22}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_23}" required class:highlight="{t01_23Check}" on:change="{() => t01_23Check = checkValues(t01_23, -15, 5)}"> 
          <span class="positioned">(-15 to 5°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_24" bind:group="{t01_24}" value="Yes" required> Yes /
          <input type="radio" name="t01_24" bind:group="{t01_24}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-11 Upper Frz. <small>(North)</small></td>
        <td>
          <input type="radio" name="t01_25" bind:group="{t01_25}" value="Good" required> Good /
          <input type="radio" name="t01_25" bind:group="{t01_25}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_26" bind:group="{t01_26}" value="Yes" required> Good /
          <input type="radio" name="t01_26" bind:group="{t01_26}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_27}" required class:highlight="{t01_27Check}" on:change="{() => t01_27Check = checkValues(t01_27, -15, 5)}"> 
          <span class="positioned">(-15 to 5°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_28" bind:group="{t01_28}" value="Yes" required> Yes /
          <input type="radio" name="t01_28" bind:group="{t01_28}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-27 Deboning <small>(Rm3 S.W.)</small></td>
        <td>
          <input type="radio" name="t01_29" bind:group="{t01_29}" value="Good" required> Good /
          <input type="radio" name="t01_29" bind:group="{t01_29}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_30" bind:group="{t01_30}" value="Yes" required> Good /
          <input type="radio" name="t01_30" bind:group="{t01_30}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_31}" required class:highlight="{t01_31Check}" on:change="{() => t01_31Check = checkValues(t01_31, 45, 60)}"> 
          <span class="positioned">(45 to 60°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_32" bind:group="{t01_32}" value="Yes" required> Yes /
          <input type="radio" name="t01_32" bind:group="{t01_32}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-28 Deboning <small>(Rm3 N.)</small></td>
        <td>
          <input type="radio" name="t01_33" bind:group="{t01_33}" value="Good" required> Good /
          <input type="radio" name="t01_33" bind:group="{t01_33}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_34" bind:group="{t01_34}" value="Yes" required> Good /
          <input type="radio" name="t01_34" bind:group="{t01_34}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_35}" required class:highlight="{t01_35Check}" on:change="{() => t01_35Check = checkValues(t01_35, 45, 60)}"> 
          <span class="positioned">(45 to 60°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_36" bind:group="{t01_36}" value="Yes" required> Yes /
          <input type="radio" name="t01_36" bind:group="{t01_36}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-29 Deboning <small>(Rm3 Ctr)</small></td>
        <td>
          <input type="radio" name="t01_37" bind:group="{t01_37}" value="Good" required> Good /
          <input type="radio" name="t01_37" bind:group="{t01_37}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_38" bind:group="{t01_38}" value="Yes" required> Good /
          <input type="radio" name="t01_38" bind:group="{t01_38}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_39}" required class:highlight="{t01_39Check}" on:change="{() => t01_39Check = checkValues(t01_39, 45, 60)}"> 
          <span class="positioned">(45 to 60°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_40" bind:group="{t01_40}" value="Yes" required> Yes /
          <input type="radio" name="t01_40" bind:group="{t01_40}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-30 Deboning <small>(Rm3 S.E.)</small></td>
        <td>
          <input type="radio" name="t01_41" bind:group="{t01_41}" value="Good" required> Good /
          <input type="radio" name="t01_41" bind:group="{t01_41}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_42" bind:group="{t01_42}" value="Yes" required> Good /
          <input type="radio" name="t01_42" bind:group="{t01_42}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_43}" required class:highlight="{t01_43Check}" on:change="{() => t01_43Check = checkValues(t01_43, 45, 60)}"> 
          <span class="positioned">(45 to 60°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_44" bind:group="{t01_44}" value="Yes" required> Yes /
          <input type="radio" name="t01_44" bind:group="{t01_44}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-45 Fresh Cooler <small>(South)</small></td>
        <td>
          <input type="radio" name="t01_45" bind:group="{t01_45}" value="Good" required> Good /
          <input type="radio" name="t01_45" bind:group="{t01_45}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_46" bind:group="{t01_46}" value="Yes" required> Good /
          <input type="radio" name="t01_46" bind:group="{t01_46}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_47}" required class:highlight="{t01_47Check}" on:change="{() => t01_47Check = checkValues(t01_47, 32, 40)}"> 
          <span class="positioned">(32 to 40°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_48" bind:group="{t01_48}" value="Yes" required> Yes /
          <input type="radio" name="t01_48" bind:group="{t01_48}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-46 Fresh Cooler <small>(North)</small></td>
        <td>
          <input type="radio" name="t01_49" bind:group="{t01_49}" value="Good" required> Good /
          <input type="radio" name="t01_49" bind:group="{t01_49}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_50" bind:group="{t01_50}" value="Yes" required> Good /
          <input type="radio" name="t01_50" bind:group="{t01_50}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_51}" required class:highlight="{t01_51Check}" on:change="{() => t01_51Check = checkValues(t01_51, 32, 40)}"> 
          <span class="positioned">(32 to 40°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_52" bind:group="{t01_52}" value="Yes" required> Yes /
          <input type="radio" name="t01_52" bind:group="{t01_52}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-50 King Unit <small>(L9 Cook)</small></td>
        <td>
          <input type="radio" name="t01_53" bind:group="{t01_53}" value="Good" required> Good /
          <input type="radio" name="t01_53" bind:group="{t01_53}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_54" bind:group="{t01_54}" value="Yes" required> Good /
          <input type="radio" name="t01_54" bind:group="{t01_54}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_55}" required class:highlight="{t01_55Check}" on:change="{() => t01_55Check = checkValues(t01_55, 45, 60)}"> 
          <span class="positioned">(45 to 60°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_56" bind:group="{t01_56}" value="Yes" required> Yes /
          <input type="radio" name="t01_56" bind:group="{t01_56}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-53 Cooler 2</td>
        <td>
          <input type="radio" name="t01_57" bind:group="{t01_57}" value="Good" required> Good /
          <input type="radio" name="t01_57" bind:group="{t01_57}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_58" bind:group="{t01_58}" value="Yes" required> Good /
          <input type="radio" name="t01_58" bind:group="{t01_58}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_59}" required class:highlight="{t01_59Check}" on:change="{() => t01_59Check = checkValues(t01_59, 32, 40)}"> 
          <span class="positioned">(32 to 40°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_60" bind:group="{t01_60}" value="Yes" required> Yes /
          <input type="radio" name="t01_60" bind:group="{t01_60}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-54 Krack Unit <small>(L9 Pkg.)</small></td>
        <td>
          <input type="radio" name="t01_61" bind:group="{t01_61}" value="Good" required> Good /
          <input type="radio" name="t01_61" bind:group="{t01_61}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_62" bind:group="{t01_62}" value="Yes" required> Good /
          <input type="radio" name="t01_62" bind:group="{t01_62}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_63}" required class:highlight="{t01_63Check}" on:change="{() => t01_63Check = checkValues(t01_63, 45, 45)}"> 
          <span class="positioned">(45°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_64" bind:group="{t01_64}" value="Yes" required> Yes /
          <input type="radio" name="t01_64" bind:group="{t01_64}" value="No"> No
        </td>
      </tr>
  
      <tr>
        <td class="name">AU-55 Evapco Unit <small>(Debone Rm 2)</small></td>
        <td>
          <input type="radio" name="t01_65" bind:group="{t01_65}" value="Good" required> Good /
          <input type="radio" name="t01_65" bind:group="{t01_65}" value="Bad"> Bad
        </td>

        <td class="center">
          <input type="radio" name="t01_66" bind:group="{t01_66}" value="Yes" required> Good /
          <input type="radio" name="t01_66" bind:group="{t01_66}" value="No"> Bad
        </td>

        <td>
          <input class="center" type="number" bind:value="{t01_67}" required class:highlight="{t01_67Check}" on:change="{() => t01_67Check = checkValues(t01_67, 45, 60)}"> 
          <span class="positioned">(45 to 60°F)</span>
        </td>

        <td class="center">
          <input type="radio" name="t01_68" bind:group="{t01_68}" value="Yes" required> Yes /
          <input type="radio" name="t01_68" bind:group="{t01_68}" value="No"> No
        </td>
      </tr>
    </table>
  
    <div class="uppercooler">
      <h2>Upper Cooler</h2>
      <table>
        <tr>
          <th>Liquid Level SG <span>(1 Sight Glass)</span></th>
          <th>Oil Pot Frost <span>(% Frosted)</span></th>
          <th>External Condition <span>(cricle condition)</span></th>
          <th>Abnormal Noise / Vibration <small class="block">(inform supervisor and/or submit notification)</small></th>
        </tr>
        <tr>
          <td class="labeled required">
            <input type="radio" name="t02_01" bind:group="{t02_01}" value="1" required> 1
            <input type="radio" name="t02_01" bind:group="{t02_01}" value="2"> 2
            <input type="radio" name="t02_01" bind:group="{t02_01}" value="3"> 3
          </td>
          <td class="labeled">
            <input type="number" bind:value="{t02_02}" required class="fix">
            <label for="">%</label>
          </td>
          <td class="labeled required">
            <input type="radio" name="t02_03" bind:group="{t02_03}" value="Good" required> Good /
            <input type="radio" name="t02_03" bind:group="{t02_03}" value="Bad"> Bad
          </td>
          <!-- <td class="labeled">
            <input type="text" bind:value="{t02_04}" required class="fix">
          </td> -->

          <td class="center required">
            <input type="radio" name="t02_04" bind:group="{t02_04}" value="Yes" required> Yes / 
            <input type="radio" name="t02_04" bind:group="{t02_04}" value="No"> No 
          </td>
        </tr>
      </table>
    </div>
  
    <div class="tablewrapper">
      <div class="tablewithlabel">
        <h2 class="label">Cistern EF-1</h2>
        <table>
          <tr>
            <th>Normal Fan <span>(On / Off)</span></th>
            <th>Emergency Fan <span>(On / Off)</span></th>
          </tr>
          <tr>
            <td class="labeled radiostyles required">
              <input type="radio" name="t03_01" bind:group="{t03_01}" value="On" required> On /
              <input type="radio" name="t03_01" bind:group="{t03_01}" value="Off"> Off
            </td>
            <td class="labeled radiostyles required">
              <input type="radio" name="t03_02" bind:group="{t03_02}" value="On" required> On /
              <input type="radio" name="t03_02" bind:group="{t03_02}" value="Off"> Off
            </td>
          </tr>
        </table>
      </div>
      
      <div class="tablewithlabel">
        <h2 class="label3">East ER EF-2</h2>
        <table>
          <tr>
            <th>Normal Fan <span>(On / Off)</span></th>
            <th>Emergency Fan <span>(On / Off)</span></th>
          </tr>
          <tr>
            <td class="labeled radiostyles required">
              <input type="radio" name="t04_01" bind:group="{t04_01}" value="On" required> On /
              <input type="radio" name="t04_01" bind:group="{t04_01}" value="Off"> Off
            </td>
            <td class="labeled radiostyles required">
              <input type="radio" name="t04_02" bind:group="{t04_02}" value="On" required> On /
              <input type="radio" name="t04_02" bind:group="{t04_02}" value="Off"> Off
            </td>
          </tr>
        </table>
      </div>
      
      <div class="tablewithlabel">
        <h2 class="label3">West ER EF-3</h2>
        <table>
          <tr>
            <th>Normal Fan <span>(On / Off)</span></th>
            <th>Emergency Fan <span>(On / Off)</span></th>
          </tr>
          <tr>
            <td class="labeled radiostyles required">
              <input type="radio" name="t05_01" bind:group="{t05_01}" value="On" required> On /
              <input type="radio" name="t05_01" bind:group="{t05_01}" value="Off"> Off
            </td>
            <td class="labeled radiostyles required">
              <input type="radio" name="t05_02" bind:group="{t05_02}" value="On" required> On /
              <input type="radio" name="t05_02" bind:group="{t05_02}" value="Off"> Off
            </td>
          </tr>
        </table>
      </div>
      
      <div class="tablewithlabel">
        <h2 class="label2">Snake Pit EF-4</h2>
        <table>
          <tr>
            <th>Emergency Fan <span>(On / Off)</span></th>
          </tr>
          <tr>
            <td class="labeled radiostyles required">
              <input type="radio" name="t06_01" bind:group="{t06_01}" value="On" required> On /
              <input type="radio" name="t06_01" bind:group="{t06_01}" value="Off"> Off
            </td>
          </tr>
        </table>
      </div>
      
      <div class="tablewithlabel">
        <h2 class="label2">BLDG. 6 Pent. EF-5</h2>
        <table>
          <tr>
            <th>Emergency Fan <span>(On / Off)</span></th>
          </tr>
          <tr>
            <td class="labeled radiostyles required">
              <input type="radio" name="t07_01" bind:group="{t07_01}" value="On" required> On /
              <input type="radio" name="t07_01" bind:group="{t07_01}" value="Off"> Off
            </td>
          </tr>
        </table>
      </div>
      
      <div class="tablewithlabel">
        <h2 class="label2">Engine Rm MAU</h2>
        <table>
          <tr>
            <th>MAU <span>(On / Off)</span></th>
          </tr>
          <tr>
            <td class="labeled radiostyles required">
              <input type="radio" name="t08_01" bind:group="{t08_01}" value="On" required> On /
              <input type="radio" name="t08_01" bind:group="{t08_01}" value="Off"> Off
            </td>
          </tr>
        </table>
      </div>
    </div>
  
    <hr>
    <p style="padding: 5px;">Any abnormal vibrations or noise's? 
      <input type="radio" name="abnormalSounds" value="Yes" bind:group="{t09_01}" required> Yes / 
      <input type="radio"  name="abnormalSounds" value="No" bind:group="{t09_01}"> No 
      <small class="notred">Report any abnormal conditions to your supervisor and/or submit notification.</small>
    </p>
    <hr>
  
    <div class="tablewrapper2">
      <div class="tablewithlabel2">
        <h2 class="label2">DHS Fences/Gates</h2>
        <table>
          <tr>
            <th>Are all parameter fences and gates secure? <span>Yes / No</span></th>
          </tr>
          <tr>
            <td class="labeled radiostyles required">
              <input type="radio" name="t10_01" bind:group="{t10_01}" value="Yes" required> Yes /
              <input type="radio" name="t10_01" bind:group="{t10_01}" value="No"> No
            </td>
          </tr>
        </table>
      </div>
  
      <div class="tablewithlabel2">
        <h2 class="label2">DHS Cameras</h2>
        <table>
          <tr>
            <th>Are all DHS required cameras functioning? <span>Yes / No</span></th>
          </tr>
          <tr>
            <td class="labeled radiostyles required">
              <input type="radio" name="t11_01" bind:group="{t11_01}" value="Yes" required> Yes /
              <input type="radio" name="t11_01" bind:group="{t11_01}" value="No"> No
            </td>
          </tr>
        </table>
      </div>
    </div>
    
  </div>
  
</main>

<style>
  td {
    text-align: center;
  }

  tr:first-child {
    border-bottom: 0;
  }

  .center {
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

  small.notred {
    color: red;
    margin: 5px;
    margin-left: 40px;
  }

  .tablewrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 0px;
    justify-content: space-evenly;
    margin-left: 20px;
  }
  .tablewrapper2 {
    display: flex;
    margin-bottom: 0px;
    justify-content: space-evenly;
    margin-left: 20px;
  }

  .tablewrapper table {
    height: 97px;
  }

  td {
    padding: 5px;
    padding-bottom: 15px;
  }

  p.underline {
    text-decoration: underline;
    text-align: center;
    /* outline: 1px solid black */
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }


  span {
    color: red;
    display: block;
    text-align: center;
    font-size: 15px;
    width: 100%;
  }
  span.positioned {
    position: absolute;
    width: 95%;
    text-align: center;
  }

  .fix {
    height: 25px !important;
  }

  small {
    color: red;
  }
  
  small.block {
    display: block;
  }

  tr td:nth-child(4) {
    /* margin-top: 5px; */
    position: relative;
  }

  th {
    position: relative;
    padding-bottom: 20px;
  }

  /* input[type='text'] {
    border: 0px solid;
    border-bottom: 1px solid;
    width: 100%;
    background-color: whitesmoke;
  } */

  input[type='number'] {
    border: 0px solid;
    border-bottom: 1px solid;
    width: 100%;
    background-color: whitesmoke;
    -moz-appearance: textfield;
  }

  /* removes number arrows from input for browsers other than firefox*/
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  th {
    text-align: center;
  }

  .name {
    text-align-last: left;
    width: 230px;
  }

  h2 {
    text-align: center;
    margin-top: 20px;
    text-decoration: underline;
  }

  .uppercooler table, .uppercooler th, .uppercooler td {
    border: 3px solid black;
  }
  
  .uppercooler span {
    width: 100%;
  }
  
  /* .uppercooler input {
    all: revert;
    width: 96%;
    
  } */
  
  .uppercooler td {
    padding: 0;
  }
  
  .uppercooler th {
    padding: 1px;
    background-color: lightgoldenrodyellow;
    background-clip: padding-box;
    /* outline: 3px solid black; */
  }

  .tablewithlabel {
    display: flex;
    flex-direction: column;
    width: 225px;
    position: relative;
    margin: 20px 30px;
  }

  .tablewithlabel2 {
    display: flex;
    flex-direction: column;
    width: 350px;
    position: relative;
    margin: 20px 30px;
  }

  .tablewithlabel td, .tablewithlabel2 td {
    padding: 0;
  }
  .tablewithlabel  th, .tablewithlabel2 th {
    padding: 0;
    height: 40px;
    background-color: lightgoldenrodyellow;
    background-clip: padding-box;
    border: 3px solid black;
    /* outline: 1px solid black; */
  }

  .tablewithlabel h2, .tablewithlabel2 h2 {
    background-color: lightgoldenrodyellow;
    border: 3px solid black;
    background-clip: padding-box;
  }

  .tablewithlabel span, .tablewithlabel2 span {
    width: 100%;
  }

  .tablewithlabel input, .tablewithlabel2 input {
    all: revert;
    width: 97%;
    height: 51px;
    padding: 0;
    margin: 0;
  }

  .tablewithlabel table, .tablewithlabel th, .tablewithlabel td {
    border: 3px solid black;
    background-clip: padding-box;
    margin: 0;
    padding: 0;
  }

  .tablewithlabel2 table, .tablewithlabel2 th, .tablewithlabel2 td {
    border: 3px solid black;
    margin: 0;
    padding: 0;
  }
  
  .tablewithlabel h2.label {
    position: absolute;
    top: 15.8px;
    left: -63px;
    transform: rotate(90deg);
    font-size: 1em;
    border: 3px solid;
    padding: 3px;
    width: 101px;
    text-decoration: none;
    background-color: lightgoldenrodyellow;
  }

  .tablewithlabel h2.label2 {
    position: absolute;
    top: 7px;
    left: -72px;
    transform: rotate(90deg);
    font-size: 1em;
    border: 3px solid;
    padding: 3px;
    width: 101px;
    text-decoration: none;
    background-color: lightgoldenrodyellow;
    background-clip: padding-box;
  }
  .tablewithlabel h2.label3 {
    position: absolute;
    top: 15.5px;
    left: -63px;
    transform: rotate(90deg);
    font-size: 14px;
    border: 3px solid;
    padding: 3px;
    width: 101px;
    text-decoration: none;
    background-color: lightgoldenrodyellow;
    background-clip: padding-box;
  }

  .tablewithlabel2 h2.label2 {
    position: absolute;
    top: 10px;
    left: -69px;
    transform: rotate(90deg);
    font-size: 15px;
    border: 3px solid;
    padding-left: 1px;
    padding-right: 2px;
    width: 101px;
    text-decoration: none;
  }

  td.labeled {
    position: relative;
  }

  .labeled input {
    height: 20px;
    text-align: center;
    border-bottom: 0;
  }

  .radiostyles {
    font-size: 1em;
    width: 120px;
    height: 58px;
  }

  .radiostyles input {
    width: 18px;
  }

  td label {
    position: absolute;
    right: 10px;
    top: 4px;
    color: grey;
    font-size: smaller;
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

  @keyframes highlight {
    from {background-color: white;}
    to {background-color: yellow;}
  }
</style>