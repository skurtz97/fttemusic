<script>
  import Accordion from "$components/accordion.svelte";
  import ArrowLeft from "$components/icons/arrow-left.svelte";
  import ArrowRight from "$components/icons/arrow-right.svelte";

  //@ts-nocheck
  export let title;
  export let subtitle;
  export let next;
  export let previous;
  let hoverLeft = false;
  let hoverRight;

  function slugToTitle(slug) {
    // remove all hyphens
    let newTitle = slug.replace(/-/g, " ");
    // split the title into words
    let words = newTitle.split(" ");
    // capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // join the words back together
    newTitle = words.join(" ");
    // return the title
    return newTitle;
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="outer">
  <div class="inner">
    <div class="content">
      <h1 class="title">{title}</h1>
      <p class="subtitle">{subtitle}</p>
      <slot />
    </div>
    <div class="embeds">
      <slot name="embeds" />
    </div>
  </div>
  <Accordion title="Credits">
    <slot name="credits" />
  </Accordion>
  <div class="links">
    <a
      href={next}
      on:mouseenter={() => (hoverLeft = true)}
      on:mouseleave={() => (hoverLeft = false)}
    >
      <ArrowLeft hover={hoverLeft} />
      {slugToTitle(next)}
    </a>
    <a href="/songs">Songs</a>
    <a
      href={previous}
      on:mouseenter={() => (hoverRight = true)}
      on:mouseleave={() => (hoverRight = false)}
    >
      <p />
      {slugToTitle(previous)}
      <ArrowRight hover={hoverRight} />
    </a>
  </div>
</div>

<style>
  .title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-align: left;
  }
  .subtitle {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: left;
  }
  :global(p) {
    margin-bottom: 1rem;
    text-align: left;
  }
  .outer {
    margin: 4rem 1rem;
    display: flex;
    flex-direction: column;
  }
  .inner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .embeds {
    margin-left: 2rem;
  }
  .content {
    margin-bottom: 2rem;
    max-width: 80ch;
  }
  :global(.embeds > div > iframe) {
    margin-bottom: 1rem;
  }

  :global(.outer > .accordion) {
    text-align: left;
    width: 90%;
    max-width: 90%;
    margin: 2rem auto;
  }
  :global(.outer > .accordion > .content > div > p > a) {
    color: #0157b9;
    text-decoration: none;
  }
  :global(.outer > .accordion > .content > div > p > a:hover) {
    text-decoration: underline;
    color: #0e63c4;
  }

  .links {
    width: 90%;
    max-width: 90%;
    margin: 2rem auto;
    background-color: #000;
    padding: 0.75rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .links > a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    margin: 0rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .links > a:hover {
    color: #1f7bb6;
    text-decoration: underline;
  }

  @media (max-width: 1100px) {
    .inner {
      flex-direction: column;
    }
    .embeds {
      margin-left: 0;
    }
  }

  /*
  @media (max-width: 1100px) {
    .inner {
      flex-direction: column;
      text-align: center;
      margin: 0 auto;
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
  }
  @media (max-width: 850px) {
    .content {
      width: 65ch;
    }
  }
  @media (max-width: 750px) {
    .content {
      width: 60ch;
    }
  }
  @media (max-width: 700px) {
    .content {
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
  }
  @media (max-width: 600px) {
    .content {
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
  }

  @media (max-width: 400px) {
    .content {
      width: 33ch;
    }
    :global(.embeds > div > iframe) {
      max-width: 300px;
    }
  }
  @media (max-width: 350px) {
    .content {
      width: 30ch;
    }
  }
  */
</style>
