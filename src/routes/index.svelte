<script lang="ts">
  import Banner from "$components/banner.svelte";
</script>

<svelte:head>
  <title>Friends To The End</title>
</svelte:head>
<Banner src="/images/home-banner.jpg" alt="Home Banner" />
<div>
  <h1>Modern Soft Rock</h1>
  <h2><i>Where Sound And Vision Collide</i></h2>
  <iframe
    src="https://open.spotify.com/embed/playlist/59cyAP6DTR7SReJGuXHLSE"
    width="100%"
    height="290px"
    frameborder="0"
    title="Spotify Playlist Embed"
  />
  <p>
    Welcome to <b><i>Friends To The End</i></b> where Modern soft rock music collides with videos of
    joy, whimsy, wisdom, and sometimes, sorrow.
  </p>
  <div class="videos">
    <iframe
      src="https://www.youtube.com/embed/iCaQE-hg93w"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <iframe
      src="https://www.youtube.com/embed/Mf6hLwoBtTk?feature=oembed"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <iframe
      src="https://www.youtube.com/embed/h_udJ-gV56E?feature=oembed"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <iframe
      src="https://www.youtube.com/embed/Ru-5ls0eQfs?feature=oembed"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <iframe
      src="https://www.youtube.com/embed/u9uY9la3zLA?feature=oembed"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</div>

<style>
  div {
    width: 70ch;
    margin: 2rem auto;
  }
  h1 {
    text-align: center;
    margin: 0 0 0.25rem 0;
  }
  h2 {
    margin: 0;
    text-align: center;
    margin: 0 0 2rem 0;
  }
  .videos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
  }
  .videos > iframe {
    width: 100%;
    height: 378px;
    margin-bottom: 1rem;
  }
</style>
