<script lang="ts">
  import Container from "$components/container.svelte";
  import Banner from "$components/banner.svelte";
</script>

<svelte:head>
  <title>Playlists</title>
</svelte:head>
<Banner src="/images/playlists-banner.jpg" alt="Playlists Banner" />
<Container flex flexdir="col">
  <iframe
    class="playlist-embed"
    src="https://open.spotify.com/embed/playlist/59cyAP6DTR7SReJGuXHLSE"
    allowtransparency={true}
    allow="encrypted-media"
    width="100%"
    height="290px"
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
    height="450"
    frameborder="0"
    title="Soap Creek Saloon - Soundcloud Embed"
  />
  <iframe
    class="playlist-embed"
    src="https://open.spotify.com/embed/playlist/54c5s2DBsAsal2uylmkyI5"
    allowtransparency={true}
    allow="encrypted-media"
    width="100%"
    height="380"
    frameborder="0"
    title="The Modern soft rock pioneers - Spotify Embed"
  />
</Container>

<style>
  iframe {
    margin-bottom: 1rem;
  }
  @media (max-width: 865px) {
    iframe {
      width: 90%;
    }
  }
</style>
