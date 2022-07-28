<!-- <script context='module'>
  export async function load({session}) {
    console.log(session)
    if (session.auhted && (session.user.role == 'Supervisor' || session.user.role =='admin')) {
      return {
        props: session
      }
    } else {
      return {
        status: 301,
        redirect: '/forms/DailyLog'
      }
    }
  }
</script> -->

<script>
  import MWP_Home from '$lib/components/MWP_Home.svelte'
  

</script>


<svelte:head>
  <title>MWP</title>
</svelte:head>

<body>
  <main>
    <h2>Maintainence Work Permit</h2>
  
    <div class="home">
      <MWP_Home></MWP_Home>
    </div>
  </main>
</body>


<style>

  body {
    width: 100%;
    height: 100%;

  }
  main {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    height: 98%;
    margin-bottom: 5em;
    margin-top: 18px;
    overflow: auto;
  }

  .home {
    font-family: 'Roboto';
  }
  
  

  h2 {
    text-align: center;
    font-size: 2em;
    text-decoration: underline;
    margin: .5em;
  }

</style>