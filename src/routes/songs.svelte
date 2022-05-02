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
  import Container from "$components/container.svelte";
  export let songs: SongPageMetadata[];
</script>

<svelte:head>
  <title>Songs</title>
</svelte:head>
<div class="banner" />
<Container textcenter>
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
</Container>

<style>
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
</style>
