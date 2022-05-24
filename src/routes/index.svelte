<script lang="ts">
  import Head from "$components/head.svelte";

  export let width = 0;
</script>

<Head
  title="Friends To The End | Modern soft rock | Sound & Vision collide"
  description="Modern soft rock where Sound & Vision collide - curiously original music and pointy video mix-ups of joy, whimsy, wisdom and sometimes sorrow."
  slug=""
/>
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
  <p>
    Announcing our latest streaming music and music video, <b class="RO">ROBOT ODDiTY</b>, coming June 10, 2022.
  </p>
  <a href="https://found.ee/ftteRO">Pre-Save Links Here</a>
  <p></p>

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
   <div class="videos">
    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/iCaQE-hg93w?origin=https://friendstotheend.net"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="iframe-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Mf6hLwoBtTk?origin=https://friendstotheend.net"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/h_udJ-gV56E?origin=https://friendstotheend.net"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/Ru-5ls0eQfs?origin=https://friendstotheend.net"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/u9uY9la3zLA?origin=https://friendstotheend.net"
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
  br {
    margin-bottom: .25rem;
  }
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
.RO { 
  font-size: larger;
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
