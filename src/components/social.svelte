<script lang="ts">
  import SpotifyIcon from "./icons/spotify.svelte";
  import YoutubeIcon from "./icons/youtube.svelte";
  import InstagramIcon from "./icons/instagram.svelte";
  import SoundcloudIcon from "./icons/soundcloud.svelte";
  import FacebookIcon from "./icons/facebook.svelte";
  export let display = true;
</script>

<ul class={`${display ? "" : "none"}`}>
  <a href="https://open.spotify.com/artist/7iSfLI1iAcghpThO7zwHjC?si=-poFBG_hQMOzEkZ5QGwGQw">
    <div>
      <SpotifyIcon />
    </div>
  </a>
  <a href="http://youtube.com/friendstotheendmusic">
    <div>
      <YoutubeIcon />
    </div>
  </a>
  <a href="https://www.instagram.com/friendstotheendmusic/">
    <div>
      <InstagramIcon />
    </div>
  </a>
  <a href="https://soundcloud.com/friendstotheend">
    <div>
      <SoundcloudIcon />
    </div>
  </a>
  <a href="https://www.facebook.com/friendstotheendmusic/">
    <div>
      <FacebookIcon />
    </div>
  </a>
</ul>

<style>
  a:hover {
    color: #1f7bb6;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  ul > a > div {
    width: 22px;
    height: auto;
    padding: 0;
    display: flex;
    margin-left: 20px;
  }
  .none {
    display: none;
  }
  @media (max-width: 450px) {
    ul {
      display: none;
    }
    .none {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
</style>
