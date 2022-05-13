<script lang="ts">
  export let width = 0;
</script>

<svelte:head>
  <title>Friends To The End</title>
</svelte:head>
<svelte:window bind:innerWidth={width} />
<img
  src={width === 0 || width >= 600 ? "/images/home-banner.jpg" : "images/mobile/home-banner.jpg"}
  width={width === 0 || width >= 600 ? "1792" : "600"}
  height={width === 0 || width >= 600 ? "1008" : "338"}
  alt="Home Banner"
/>
<div>
  <div class="intro">
    <h1>Modern Soft Rock</h1>
    <h4>Where Sound And Vision Collide</h4>
  </div>

  <iframe
    src="https://open.spotify.com/embed/playlist/59cyAP6DTR7SReJGuXHLSE"
    width="100%"
    height="290px"
    frameborder="0"
    title="Spotify Playlist Embed"
    class="spotify-playlist"
  />
  <p>
    Welcome to <b><i>Friends To The End</i></b> where Modern soft rock music collides with videos of
    joy, whimsy, wisdom, and sometimes, sorrow.
  </p>
  <a href="https://found.ee/ftte">Streaming Platform Links</a>
  <div class="videos">
    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/iCaQE-hg93w?feature=oembed&origin=https://fttemusic.vercel.app"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/Mf6hLwoBtTk?feature=oembed?&origin=https://fttemusic.vercel.app"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/h_udJ-gV56E?feature=oembed&origin=https://fttemusic.vercel.app"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/Ru-5ls0eQfs?feature=oembed&origin=https://fttemusic.vercel.app"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/u9uY9la3zLA?feature=oembed&origin=https://fttemusic.vercel.app"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
  <p>
    Watch this video for a sneak-peak behind the scenes and in front of the camera. And discover
    lyrics and more streaming samples of Modern soft rock on our <a href="/songs">Songs page.</a>
  </p>
</div>

<style>
  div {
    width: 70ch;
    margin: 0.5rem auto;
  }
  h1 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  img {
    width: 100%;
    height: auto;
  }
  .intro {
    text-align: center;
    margin: 0.5rem auto;
  }
  .intro > h1 {
    margin-top: 0.5rem;
  }
  .intro > h4 {
    margin-top: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
  a {
    color: #0157b9;
    text-decoration: none;
  }
  a:hover {
    color: #0e63c4;
    text-decoration: underline;
  }
  .spotify-playlist {
    margin-bottom: 0.5rem;
  }
  .videos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;
  }
  .videos .iframe-container {
    margin-bottom: 0;
  }

  @media (max-width: 780px) {
    div {
      width: 50ch;
    }
  }
  @media (max-width: 550px) {
    div {
      width: 40ch;
    }
  }
  @media (max-width: 450px) {
    div {
      width: 35ch;
    }
  }
  @media (max-width: 400px) {
    div {
      width: 30ch;
    }
  }
</style>
