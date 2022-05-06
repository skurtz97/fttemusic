<!--
  This file is a layout component for the individual song pages. In order to specify a named layout to use with
  given routes in mdsvex, we must adjust svelte.config.json to include the following:

  preprocess: [
    preprocess(),
    mdsvex({
      extensions: [".svx"],
      layout: {
        songs: resolve("/src/routes/songs/_song.svelte")
      }
    })
  ]

  If mdsvex was already configured without a layout, then we only need to add extensions and layout to the empty mdsvex({}).

  Note that for mdsvex version 0.10.5 and sveltejs/kit version 2.0.0-next.133 to work properly, the above preprocess configuration
  must be the last property in the config object. The config file should look something like this:

  const config = {
    kit {
      prerender {
        ... if you want to tell svelte-kit what to generate statically ...
      },
      vite {
        ... anything you need to tell vite ...
      },
      adapter: adapter()
    },
    extensions: [".svelte", ".svx"],    // all the file extensions that will be processed by svelte-kit
    preprocess: [
      preprocess(),                     // default svelte kit preprocess
      mdsvex({                          // use the mdsvex preprocessor
        extensions: [".svx"],           // run mdsvex on all .svx files, could also add .md, make sure to add to above extensions array
        layout: {                       // layout to use for the routes inside the directory with the same name as the layout name
          songs: resolve("/src/routes/songs/_song.svelte")
        }

  }

  -->
<script>
  import Accordion from "$components/accordion.svelte";
  import ArrowLeft from "$components/icons/arrow-left.svelte";
  import ArrowRight from "$components/icons/arrow-right.svelte";

  // Metadata is automatically received as a prop from the associated song page.
  export let title;
  export let subtitle;
  export let next;
  export let previous;
  export let embeds;

  let hoverLeft = false;
  let hoverRight = false;

  /**
   * Converts a slug into a title. e.g. "hello-world" -> "Hello World"
   * Removes any hyphens, and capitalizes the first letter of each word.
   * @param {string} slug The slug of a song page
   * @returns {string} The title of the song page
   */
  function slugToTitle(slug) {
    let words = slug.replace(/-/g, " ").split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  /**
   * Return the number of instagram embeds in embeds
   */
  function numInstagramEmbeds() {
    let sum = 0;
    for (let i = 0; i < embeds.length; i++) {
      if (embeds[i].includes("instagram")) {
        sum++;
      }
    }
    return sum;
  }
  /**
   * Filter out any embeds that are not instagram
   */
  function instagramEmbeds() {
    let instagramEmbeds = [];
    for (let i = 0; i < embeds.length; i++) {
      if (embeds[i].includes("instagram")) {
        instagramEmbeds.push(embeds[i]);
      }
    }
    return instagramEmbeds;
  }
  /**
   * Take an index between 0 and three, and return "first", "second", "third", or "fourth"
   * @param {number} index The index to convert
   */
  function indexToOrdinal(index) {
    switch (index) {
      case 0:
        return "first";
      case 1:
        return "second";
      case 2:
        return "third";
      case 3:
        return "fourth";
      default:
        return "";
    }
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="container">
  <div class="content">
    <section class="text">
      <h1 class="title">{title}</h1>
      <p class="subtitle">{subtitle}</p>
      <slot />
    </section>

    {#if numInstagramEmbeds() <= 1}
      <div class="embeds">
        {#each embeds as embed}
          {#if embed.includes("youtube")}
            <div class="embed-container">
              <iframe
                src={embed}
                title="YouTube video player"
                height="315"
                width="475"
                frameborder="0"
              />
            </div>
          {:else if embed.includes("spotify")}
            <div class="embed-container">
              <iframe src={embed} width=" 531" height="300" frameborder="0" title="Spotify embed" />
            </div>
          {:else if embed.includes("soundcloud")}
            <div class="embed-container">
              <iframe
                scrolling="no"
                src={embed}
                height="315"
                width="475"
                frameborder="no"
                title="Soundcloud embed"
              />
            </div>
          {:else if embed.includes("instagram")}
            <div class="insta-container">
              <iframe
                class="instagram-media instagram-media-rendered"
                src={embed}
                allowtransparency="true"
                allowfullscreen="true"
                data-instgrm-payload-id="instagram-media-payload-0"
                scrolling="no"
                frameborder="0"
                title="Instagram Embed"
              />
            </div>
          {/if}
        {/each}
      </div>
    {:else}
      <div class="embeds">
        <div class="multiple-instagram-container">
          {#each instagramEmbeds() as embed, index}
            <div class={`instagram-container ${indexToOrdinal(index)}`}>
              <iframe
                class="instagram-media instagram-media-rendered"
                src={embed}
                allowtransparency="true"
                allowfullscreen="true"
                data-instgrm-payload-id="instagram-media-payload-0"
                scrolling="no"
                frameborder="0"
                title="Instagram Embed"
              />
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <div class="credits">
    <Accordion title="Credits">
      <slot name="credits" />
    </Accordion>
  </div>
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
  .container {
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    max-width: 1040px;
    margin: 0 auto;
  }
  .text {
    margin-right: 2rem;
    max-width: 80ch;
    width: 80ch;
  }
  .subtitle {
    font-weight: bold;
  }
  .embeds {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 4rem;
    margin-left: 4rem;
    width: 100%;
  }
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 35px;
    height: 0;
    overflow: hidden;
    margin-bottom: 2rem;
  }
  .embed-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .insta-container {
    position: relative;
    padding-bottom: 73%;
    padding-top: 35px;
    height: 0;
    overflow: hidden;
    margin-bottom: 2rem;
  }
  .multiple-instagram-container {
    display: grid;
    grid-template-areas:
      "first second"
      "third fourth";
    grid-gap: 1rem;
  }
  .first {
    grid-area: first;
  }
  .second {
    grid-area: second;
  }
  .third {
    grid-area: third;
  }
  .fourth {
    grid-area: fourth;
  }

  .instagram-media {
    height: 500px;
  }
  .credits {
    margin: 0 auto;
    width: 1040px;
    max-width: 1040px;
  }
  .links {
    margin: 0 auto;
    width: 1040px;
    max-width: 1040px;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.25rem;
    font-weight: 600;
  }
  .links a {
    color: #fafafa;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
  }
  .links a:hover {
    color: var(--link-hover);
  }

  @media (max-width: 1200px) {
    .container {
      width: 90%;
      max-width: 90%;
    }
    .content {
      max-width: 90%;
      width: 90%;
      flex-direction: column;
    }
    .embeds {
      max-width: 90%;
      width: 90%;
      margin: 2rem auto;
    }
    .credits {
      max-width: 90%;
      width: 90%;
    }
    .links {
      max-width: 90%;
      width: 90%;
    }
  }
</style>
