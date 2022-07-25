<script>
  import LandingPage from "$lib/components/LandingPage.svelte";
  import Work from "$lib/components/Work.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import { fade, fly, blur } from 'svelte/transition';
  // @ts-ignore
  let activePage = 'Home'


  
  // @ts-ignore
  function navigate(where) {
    console.log(where)
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
        on:contact={()=>navigate('Work')}>
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
      <Contact on:back={()=>navigate('Home')}></Contact>
    </div>
  {/if}
</main>

<style>
  main, .landingpage, .work, .contact {
    height: 100%;
    overflow: hidden;
  }
</style>
