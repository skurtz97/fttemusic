<script lang="ts" context="module">
  export interface SongPageMetadata {
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    next: string;
    previous: string;
    embeds: string[];
    image?: string;
  }

  import type { Load } from "@sveltejs/kit";
  import type { get } from "./songs/api/songs.json";
  type Params = {};

  type InputProps = NonNullable<Awaited<ReturnType<typeof get>>["body"]>;
  type OutputProps = Params & InputProps;
  export const load: Load<Params, InputProps, OutputProps> = async ({ fetch }) => {
    const res = await fetch("/songs/api/songs.json");
    const body = await res.json();
    return {
      props: {
        songs: body.songs
      }
    };
  };
</script>

<script lang="ts">
  import Head from "$components/head.svelte";
  import Accordion from "$src/lib/components/accordion.svelte";
  import Spinner from "$src/lib/components/spinner.svelte";
  export let songs: SongPageMetadata[];
  // if the metadata has an image, use it, otherwise get the image url from the song slug
  const getImagePath = (metadata: SongPageMetadata) => {
    if (metadata.image) {
      return metadata.image;
    } else {
      return `/images/songs/${metadata.slug.replace(".svx", "")}.jpg`;
    }
  };
</script>

<Head
  title="SONGS Streams & Lyrics | Friends To The End | Modern soft rock"
  description="Songs for modern soft rock, curiously original and pointy mix-ups of joy, whimsy, wisdom and sometimes sorrow., including Old Pecan Street, Lady With the Sweetest Song, and Friends To The End [theme]."
  slug="songs"
/>

<div class="banner" />
<div id="container" class="container">
  <div class="intro">
    <h1>Modern Soft Rock</h1>
    <h4>Where Sound And Vision Collide</h4>
  </div>

  <div class="grid">
    {#each songs as song}
      <a href={`/songs/${song.slug}`}>
        <img class="song" src={getImagePath(song)} alt={`Picture of ${song.title}`} />
      </a>
    {:else}
      <Spinner />
    {/each}
  </div>
  <Accordion title="Song Credits">
    <p>
      “Old Pecan Street” is rhythmic blues piano rock dynamite that features the Fantasma Horns on
      an unpredictable brass arrangement.
    </p>
    <p>
      All songs written, produced and arranged by Thom Kurtz. Sound engineering and mix by Tim
      Dolbear.
    </p>
    <p>
      Music & lyrics by Thom Kurtz. Published by Friends to the End Music (ASCAP). Sound recordings
      ℗ 2016-2020 by Thom Kurtz.
    </p>
    <p>
      “At the Matinee” image: Douglass, Neal. Christmas Lights on Congress Avenue, photograph,
      January 1, 1947; (<a href="https://texashistory.unt.edu/ark:/67531/metapth34182/m1/1/"
        >Texas History U. North Texas Edu.Ark</a
      >): accessed September 8, 2016), University of North Texas Libraries, The Portal to Texas
      History, texashistory.unt.edu; crediting Austin History Center, Austin Public Library.
    </p>
    <p>
      OLD PECAN STREET cover art & background reworked from photo by <a
        href="https://en.wikipedia.org/wiki/Sixth_Street_%28Austin,_Texas%29#/media/File:Sixth_Street_Austin.jpg"
        >Larry D. Moore @ Wikimedia Commons CC BY-SA 3.0 (Wikipedia, Sixth Street, Austin, Texas)</a
      >
    </p>
    <p>
      Song icon original art by Max McDermott (“Club Iguana,” “Lady With the Sweetest Song,”
      “Amelia,” “Soap Creek Saloon,” “A World of Troubles”, “Poetry Pop”, and “Top of the World”)
    </p>
    <p>
      “As Sure As Your Sorrow Is Joy” painting by Vincent Van Gogh from 1889 and often titled
      “Rising Moon and Haycocks.”
    </p>
  </Accordion>
</div>

<style>
  .container {
    text-align: center;
    margin: 0.5rem auto;
    display: flex;
    flex-direction: column;
  }

  .intro {
    text-align: center;
    margin: 0.5rem auto;
  }
  .intro > h1 {
    margin: 0.5rem;
  }
  .intro > h4 {
    margin: 0.5rem;
  }
  :global(.container > .accordion > .content) {
    text-align: left;
  }
  :global(.container > .accordion > .content > p > a) {
    color: #0157b9;
    text-decoration: none;
  }
  :global(.container > .accordion > .content > p > a:hover) {
    text-decoration: underline;
    color: #0e63c4;
  }
  :global(#container > #accordion) {
    max-width: 900px;
    margin: 2rem auto;
  }
  .banner {
    width: 100%;
    height: 300px;
    background-image: url("/images/songs-banner.jpg");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    background-position: center bottom;
  }
  .grid {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 15px;
  }
  .grid > a:hover {
    cursor: pointer;
    transition-property: transform;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: scale(1.02);
  }
  .grid > a > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  :global(.accordion) {
    max-width: 900px;
  }
  @media (max-width: 850px) {
    .grid {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 15px;
    }
    .grid > a > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    #container {
      max-width: 700px;
    }
  }
  @media (max-width: 725px) {
    #container {
      max-width: 600px;
    }
    .grid {
      max-width: 600px;
    }
  }
  @media (max-width: 650px) {
    #container {
      max-width: 500px;
    }
    .grid {
      max-width: 500px;
    }
  }
  @media (max-width: 500px) {
    #container {
      max-width: 400px;
    }
    .grid {
      max-width: 400px;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
  @media (max-width: 420px) {
    #container {
      max-width: 330px;
    }
    .grid {
      max-width: 330px;
    }
  }
</style>
