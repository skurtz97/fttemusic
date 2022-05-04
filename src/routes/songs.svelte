<script lang="ts" context="module">
  import type { SongPageMetadata } from "$types/global";
  import type { Load } from "@sveltejs/kit";
  import type { get } from "./songs/api/songs.json";
  type Params = {};

  type InputProps = NonNullable<Awaited<ReturnType<typeof get>>["body"]>;
  type OutputProps = Params & InputProps;
  export const load: Load<Params, InputProps, OutputProps> = async ({ fetch }) => {
    const res = await fetch("/songs/api/songs.json");
    const body = await res.json();
    console.log(body);
    return {
      props: {
        songs: body.songs
      }
    };
  };
</script>

<script lang="ts">
  import Accordion from "$components/accordion.svelte";

  export let songs: SongPageMetadata[];
</script>

<svelte:head>
  <title>Songs</title>
</svelte:head>
<div class="banner" />
<div id="container" class="container">
  <h1>Where Sound And Vision Collide</h1>
  <h2>Modern Soft Rock, Curiously Original</h2>
  <div class="grid">
    {#each songs as song}
      <a href={`/songs/${song.slug}`}>
        <img
          class="song"
          src={song.image !== ""
            ? `/images/songs/${song.image}`
            : `/images/songs/${song.slug.replace(".svx", "")}.jpg`}
          alt={`Picture of ${song.title}`}
        />
      </a>
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
    margin-bottom: 2rem auto;
    display: flex;
    flex-direction: column;
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
  .banner {
    width: 100%;
    height: 300px;
    background-image: url("/images/songs-banner.jpg");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    background-position: center center;
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
      margin: 0 auto;
    }
  }
  @media (max-width: 725px) {
    #container {
      max-width: 600px;
      margin: 0 auto;
    }
    .grid {
      max-width: 600px;
    }
  }
  @media (max-width: 650px) {
    #container {
      max-width: 500px;
      margin: 0 auto;
    }
    .grid {
      max-width: 500px;
    }
  }
  @media (max-width: 500px) {
    #container {
      max-width: 400px;
      margin: 0 auto;
    }
    .grid {
      max-width: 400px;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
  @media (max-width: 420px) {
    #container {
      max-width: 300px;
      margin: 0 auto;
    }
    .grid {
      max-width: 300px;
    }
  }
</style>
