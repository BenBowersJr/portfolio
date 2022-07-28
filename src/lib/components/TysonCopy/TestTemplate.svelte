<script>
  import { onMount } from 'svelte'
  export let activeTest
  export let selected = []
  export let percentScore
  
  $: updateTest(activeTest)
  let Test, answerKey = [], submitted = false
  async function submit() {
    let right=0, total = answerKey.length, submitted = true

    answerKey.forEach((el, i)=> {
      if (selected[el.question-1] == el.answer) {
        right++
      } 
    })

    percentScore = Math.ceil((right/total)*100)
  }

  async function updateTest(name) {
    Test = undefined
    const req = await fetch("training.json", {
      method: "POST",
      body: JSON.stringify({
        get: name
      })
    })
    Test = await req.json()
    Test = Test.testData.data
    
    //makes the answer key
    answerKey = []
    Test.questions.forEach((el, i)=> {
      if (el.answer == 'true') {
        answerKey = [...answerKey, {answer: 'A', question: i+1}]
      } else if (el.answer == 'false') {
        answerKey = [...answerKey, {answer: 'B', question: i+1}]
      } else {
        answerKey = [...answerKey, {answer: el.answer, question: i+1}]
      }
    })
  }
  
  function reset() {
    submitted = false
    answerKey = []
    activeTest = undefined
    Test = undefined
  }
  
</script>

<main>
  {#if Test}
    <h1>{activeTest}</h1>
    <small>80% Required to Pass</small>

    <div class="testContainer">
      {#each Test.questions as question, i}
        <div class="question">
          <p class="prompt"><span>{i+1}.</span> {question.prompt}</p>

          <div class="options">
            {#if question.optionA}
              {#if selected[i] == 'A' && question.optionA}
                <p class="answer" on:click="{() => selected[i] = 'A'}">
                  <span>✔️)</span>{question.optionA}
                </p>
                {:else}
                <p class="answer" on:click="{() => selected[i] = 'A'}">
                  <span>A)</span>{question.optionA}
                </p>
              {/if}
            {/if}

            {#if question.optionB}
              {#if selected[i] == 'B' && question.optionB}
                <p class="answer" on:click="{() => selected[i] = 'B'}">
                  <span>✔️)</span>{question.optionB}
                </p>
                {:else}
                <p class="answer" on:click="{() => selected[i] = 'B'}">
                  <span>B)</span>{question.optionB}
                </p>
              {/if}
            {/if}

            {#if question.optionC}
              {#if selected[i] == 'C'}
                <p class="answer" on:click="{() => selected[i] = 'C'}">
                  <span>✔️)</span>{question.optionC}
                </p>
                {:else}
                <p class="answer" on:click="{() => selected[i] = 'C'}">
                  <span>C)</span>{question.optionC}
                </p>
              {/if}
            {/if}

            {#if question.optionD}
              {#if selected[i] == 'D'}
                <p class="answer" on:click="{() => selected[i] = 'D'}">
                  <span>✔️)</span>{question.optionD}
                </p>
                {:else}
                <p class="answer" on:click="{() => selected[i] = 'D'}">
                  <span>D)</span>{question.optionD}
                </p>
              {/if}
            {/if}
          </div>

          
        </div>
        {/each}

        {#if !submitted}
          <button on:click="{submit}">Submit Test</button>
        {:else}
          <button on:click="{reset}">Reset Test</button>
        {/if}
    </div>
  {:else}
    <div class="loading">
      <h1>...Loading {activeTest}</h1>
    </div>
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    font-family: 'Roboto';
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 94vh;
    /* outline: 1px solid; */
  }

  .question {
    padding: 15px;
    margin: 30px 0px;
  }

  p.prompt {
    font-size: 23px;
    margin-bottom: 10px;
  }

  .answer {
    text-align: center;
    padding: 20px;
    font-size: 22px;
  }

  .answer span {
    margin-right: 10px;
  }

  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;

  }

  h1 {
    font-size: 30px;
    font-family: 'Lora';
  }

  button {
    padding: 15px;
    width: 200px;
    margin-bottom: 40px;
  }
  
  small {
    color: grey;
  }

</style>