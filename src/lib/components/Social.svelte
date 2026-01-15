<script>
    import Spotify from "./icons/Spotify.svelte";
    import Youtube from "./icons/Youtube.svelte";
    import Instagram from "./icons/Instagram.svelte";
    import Soundcloud from "./icons/Soundcloud.svelte";
    import Facebook from "./icons/Facebook.svelte";
    let display = true;
</script>

<ul class={`socials ${display ? "" : "none"}`}>
  <a href="https://open.spotify.com/artist/7iSfLI1iAcghpThO7zwHjC?si=-poFBG_hQMOzEkZ5QGwGQw">
    <div>
      <Spotify />
    </div>
  </a>
  <a href="http://youtube.com/friendstotheendmusic">
    <div>
      <Youtube />
    </div>
  </a>
  <a href="https://www.instagram.com/friendstotheendmusic/">
    <div>
      <Instagram />
    </div>
  </a>
  <a href="https://soundcloud.com/friendstotheend">
    <div>
      <Soundcloud />
    </div>
  </a>
  <a href="https://www.facebook.com/friendstotheendmusic/">
    <div>
      <Facebook />
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
    .none {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
    }
  }
</style>