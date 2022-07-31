<script>
  import { io } from "socket.io-client";

  const socket = io()
  let msg
  socket.on('connected', (data) => {
    console.log(data)
  })

  socket.on('msg from discord', (data) => {
    console.log('msg from discord', data)
  })

  function test() {
    socket.emit('Send Discord Message', msg, (response) => {
      console.log(response)
    })
    msg = ''
  }
</script>

<main>
  <!-- <button on:click="{test}">Click Me!</button>
  <input type="text" bind:value="{msg}" autofocus> -->

  <form on:submit|preventDefault="{test}">

    <pre>
      Brandon: &#60;@255419171821715458&gt;
      Eli: &#60;@250731213982007297&gt;
      Booz: &#60;@400109956524670976&gt;
    </pre>

    <label for="">Enter Your Msg: 
      <input bind:value="{msg}">
    </label>
  </form>
</main>

<style>
  label {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 400px;
    height: 60px;
  }

  form {
    padding: 300px;
  }
</style>