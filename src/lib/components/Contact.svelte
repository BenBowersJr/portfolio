<script>
// @ts-nocheck

  import { createEventDispatcher } from 'svelte';
  import { io } from "socket.io-client";

  const socket = io()
  const dispatch = createEventDispatcher();

  function back() {
    dispatch('back')
  }

  let msgContent = '', msgForUser, submitting
  async function sendDiscordMessage() {
    msgForUser = 'Submitting'
    submitting = true
    socket.emit('sendDiscordMessage', msgContent, (response) => {
      if (response == 'Message Sent!') {
        msgContent = ''
        msgForUser = 'Message Sent!'
      }
    })
    submitting = false
  }
</script>

<main>
  <div class="content">
    <button class="backButton" on:click="{back}">Back Home</button>
    <h1>Message Me</h1>
  
    <p>Im not active on socials. The best way to contact me either below with this textbox that instantly messages me by Discord or email at <a target="_blank" href="mailto:benbowersjr.22@gmail.com">benbowersjr.22@gmail.com</a>. Add any details you want like email, phone number, and best time to contact you.</p>
    <textarea bind:value="{msgContent}"></textarea>
  
    {#if msgForUser}
      <span id="Good">{msgForUser}</span>
    {:else if !msgForUser}
      <!-- <span id="Bad">{msgForUser}</span> -->
    {/if}
  
    <button on:click="{sendDiscordMessage}">Send me a Message!</button>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
  .content {
    max-width: 1300px;
    /* outline: auto; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Roboto Serif';
  }

  button {
    padding: 10px 25px;
    background: none;
    animation: gradient 15s ease infinite;
    border: #1B998B 3px solid;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    width: max-content;
  }

  a {
    color: #1B998B;
  }

  h1 {
    position: absolute;
    top: 30px;
    text-align: center;
    margin-top: 50px;
    font-family: 'Roboto Serif';
    font-size: 4em;
    font-weight: 700;
  }

  #Good {
    color: green;
    margin-bottom: 20px;
  }
  #Bad {
    color: crimson;
    margin-bottom: 20px;
  }

  p {
    width: 80%;
    max-width: 850px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: larger;
    font-family: 'Roboto Serif';
    font-weight: 500;
    text-align: justify;
  }

  textarea {
    padding: 5px;
    margin: 25px;
    width: 80%;
    max-width: 850px;
    height: 150px;
    background-color: #2E294E;
    color: whitesmoke;
    font-family: 'Roboto Serif';
    font-weight: 400;
    border: #1B998B solid 3px;
  }

  .backButton {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 10px 15px;
    background: none;
    animation: gradient 15s ease infinite;
    border: #ffffff 2px solid;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    width: 100px;
  }
</style>