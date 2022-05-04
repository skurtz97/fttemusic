<script>
  import Accordion from "$components/accordion.svelte";

  //@ts-nocheck
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="outer">
  <div class="inner">
    <div class="content">
      <slot />
    </div>
    <div class="embeds">
      <slot name="embeds" />
    </div>
  </div>
  <Accordion title="Credits">
    <slot name="credits" />
  </Accordion>
</div>

<style>
  .outer {
    width: 90%;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .inner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .content {
    max-width: 80ch;
    width: 80ch;
    min-width: 40%;
  }
  .embeds {
    margin-left: 4rem;
    min-width: 40%;
    height: 100%;
  }
  :global(.embeds > div) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  :global(.embeds > div > iframe) {
    margin-bottom: 1rem;
  }
  :global(.outer > .accordion) {
    text-align: left;
  }
  :global(.outer > .accordion > .content > div > p > a) {
    color: #0157b9;
    text-decoration: none;
  }
  :global(.outer > .accordion > .content > div > p > a:hover) {
    text-decoration: underline;
    color: #0e63c4;
  }

  @media (max-width: 1100px) {
    .inner {
      flex-direction: column;
      text-align: center;
      margin: 0 auto;
    }
    :global(.outer > .accordion) {
      margin-top: 2rem;
    }
    .embeds {
      margin-left: 0;
    }
  }
  @media (max-width: 900px) {
    .content {
      width: 70ch;
      text-align: center;
      margin: 0 auto;
    }
    :global(.outer > .accordion) {
      width: 70ch;
    }
  }
  @media (max-width: 850px) {
    .content {
      width: 65ch;
    }
    :global(.outer > .accordion) {
      width: 65ch;
    }
  }
  @media (max-width: 750px) {
    .content {
      width: 60ch;
    }
    :global(.outer > .accordion) {
      width: 60ch;
    }
  }
  @media (max-width: 700px) {
    .content {
      width: 55ch;
    }
    :global(.outer > .accordion) {
      width: 55ch;
    }
  }
  @media (max-width: 700px) {
    .content {
      width: 52ch;
      margin-left: 0;
      margin-right: 0;
      word-wrap: break-word;
    }
    :global(.content > p) {
      font-size: 15px;
    }
    :global(.outer > .accordion) {
      margin: 2rem auto 0rem auto;
      width: 52ch;
    }
  }
  @media (max-width: 600px) {
    .content {
      width: 40ch;
    }
    :global(.outer > .accordion) {
      width: 40ch;
    }
  }
  @media (max-width: 500px) {
    .content {
      width: 35ch;
    }
    :global(.embeds > div > iframe) {
      max-width: 375px;
    }
    :global(.outer > .accordion) {
      width: 35ch;
    }
  }

  @media (max-width: 400px) {
    .content {
      width: 33ch;
    }
    :global(.embeds > div > iframe) {
      max-width: 300px;
    }
    :global(.outer > .accordion) {
      width: 33ch;
    }
  }
  @media (max-width: 350px) {
    .content {
      width: 30ch;
    }
    :global(.outer > .accordion) {
      width: 30ch;
    }
  }
</style>
