<script>
  // @ts-ignore
  import {page, session} from '$app/stores'
  import {get} from 'svelte/store'
  
  let sessionData = get(session)
  $: sessionData = get(session)
</script>

<div class="formContainer">
  {#if sessionData.user.plant == 'New Holland FP'}
    <ul>
      <li><a class:active={$page.url.pathname.includes('/forms/DailyLog')} href="/forms/DailyLog">Daily Log</a></li>
    </ul>
  {:else}
    <ul>
      <li><a class:active={$page.url.pathname.includes('/forms/DailyLog')} href="/forms/DailyLog">Daily Log</a></li>
      <li><a class:active={$page.url.pathname.includes('/forms/amf')} href="/forms/amf">AMF</a></li>
      <!-- <li><a class:active={$page.url.pathname.includes('/forms/HWP')} href="/forms/HWP">HWP</a></li> -->
      <!-- <li><a class:active={$page.url.pathname.includes('/forms/Line9')} href="/forms/Line9">Line 9 Tools</a></li> -->
    </ul>
  {/if}
</div>

<style>
  .formContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    max-width: 8vw;
    min-width: 150px;
    height: stretch;
    min-height: 94.7vh;
    text-align: center;
    background-color: #002666;
    box-shadow: inset 0px 5px 10px black;
  }
  ul {
    position: fixed;
    list-style: none;
  }
  li {
    padding: 1em;
    font-size: 1.1em;
  }
  a {
    text-decoration: none;
    color: whitesmoke;
  }

  .active {
    border-bottom: 1px solid red;
    color: red;
  }
  
</style>