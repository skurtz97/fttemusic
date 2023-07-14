<script lang="ts">
  import Head from "$components/head.svelte";
  import Accordion from "$src/lib/components/accordion.svelte";
  export let width = 0;
</script>

<Head
  title="Playlists Friends To The End | On Spotify & Soundcloud"
  description="Friends To The End track sampler playlists on Soundcloud - Where Sound And Vision Collide. Modern soft rock, curiously original joy, whimsy, wisdom and sometimes sorrow."
  slug="playlists"
/>

<svelte:window bind:innerWidth={width} />
<img
  class="banner"
  src={width === 0 || width >= 600
    ? "/images/playlists-banner.jpg"
    : "images/mobile/playlists-banner.jpg"}
  alt="home banner"
/>
<div>
  <Accordion title="PLAYLISTS Photo Credit">
    <p><a href="https://nicolagell.com"><b>Press photo by Nicola Gell, Austin, TX. </b></a></p>
  </Accordion>
  <iframe
    class="playlist-embed"
    src="https://open.spotify.com/embed/playlist/59XV57RJyLqyyAy6B0tkyb"
    allowtransparency={true}
    allow="encrypted-media"
    width="100%"
    height="360"
    frameborder="0"
    title="Modern Soft Rock Psychedelics"
  />
  <iframe
    class="playlist-embed"
    src="https://open.spotify.com/embed/playlist/59cyAP6DTR7SReJGuXHLSE"
    allowtransparency={true}
    allow="encrypted-media"
    width="100%"
    height="360"
    frameborder="0"
    title="Friends To The End Radio - Spotify Embed"
  />
  <iframe
    class="playlist-embed"
    scrolling="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/630178617&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
    width="100%"
    height="450"
    frameborder="0"
    title="Club Iguana - Soundcloud Embed"
  />
  <iframe
    class="playlist-embed"
    scrolling="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/806573073&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
    width="100%"
    height="360"
    frameborder="0"
    title="Soap Creek Saloon - Soundcloud Embed"
  />
  <iframe
    class="playlist-embed"
    src="https://open.spotify.com/embed/playlist/0WsNR26baUXTzU9p5159KD"
    allowtransparency={true}
    allow="encrypted-media"
    width="100%"
    height="360"
    frameborder="0"
    title="Modern Soft Rock Power"
  />
</div>

<style>
  div {
    width: 80ch;
    margin: 1rem auto 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  iframe {
    margin-bottom: 1rem;
  }
  @media (max-width: 900px) {
    div {
      width: 70ch;
    }
  }
  @media (max-width: 800px) {
    div {
      width: 60ch;
    }
  }
  @media (max-width: 700px) {
    div {
      width: 50ch;
    }
  }
  @media (max-width: 600px) {
    div {
      width: 40ch;
    }
  }
  @media (max-width: 500px) {
    div {
      width: 35ch;
    }
  }
  @media (max-width: 400px) {
    div {
      width: 30ch;
    }
  }
  @media (max-width: 350px) {
    div {
      width: 27ch;
    }
  }
</style>
