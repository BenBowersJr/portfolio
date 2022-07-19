<script>
  import LandingPage from "$lib/components/LandingPage.svelte";
  import Work from "$lib/components/Work.svelte";
  import { fade, fly, blur } from 'svelte/transition';
  // @ts-ignore
  let activePage = 'Home'

  function navigate(where) {
    activePage = ''
    setTimeout(() => {
      activePage = where
    }, 1000);
  }
// 
</script>

<main>
  {#if activePage == 'Home'}
    <div transition:blur={{ duration: 1000}} class="landingpage">
      <LandingPage 
        on:work={()=>navigate('Work')} 
        on:contact={()=>navigate('Contact')}>
      </LandingPage>
    </div>
  {/if}

  {#if activePage == 'Work'}
    <div transition:blur={{ duration: 1000}} class="work">
      <Work on:back={()=>navigate('Home')}></Work>
    </div>
  {/if}

  {#if activePage == 'Contact'}
    <div transition:blur={{ duration: 1000}} class="contact">
      <Work on:back={()=>navigate('Home')}></Work>
    </div>
  {/if}
</main>

<style>
  main, .landingpage, .work, .contact {
    height: 100%;
    overflow: hidden;
  }
</style>
