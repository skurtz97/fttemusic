<script lang="ts">
  import type { Link } from "$types/global";
  import Envelope from "./icons/envelope.svelte";
  import SpotifyIcon from "./icons/spotify.svelte";
  import YoutubeIcon from "./icons/youtube.svelte";
  import InstagramIcon from "./icons/instagram.svelte";
  import SoundcloudIcon from "./icons/soundcloud.svelte";
  import FacebookIcon from "./icons/facebook.svelte";
  let links: Link[] = [
    { href: "/songs", text: "SONGS" },
    { href: "/playlists", text: "PLAYLISTS" },
    { href: "/about", text: "ABOUT" },
    { href: "/press", text: "PRESS" },
    { href: "/contact", text: "CONTACT" }
  ];
  let brand = "FRIENDS TO THE END";
  let open = false;
</script>

<header>
  <nav>
    <a href="/">{brand}</a>
    <button class:open on:click={() => (open = !open)}>
      <svg width="32" height="24" fill="currentColor">
        <line id="top" x1="0" y1="2" x2="32" y2="2" />
        <line id="middle" x1="0" y1="12" x2="32" y2="12" />
        <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
      </svg>
    </button>

    <ul>
      {#each links as link}
        <a href={link.href}>{link.text}</a>
      {/each}
      <a href="/mailing-list">
        <div class="envelope">
          <Envelope />
        </div>
      </a>
    </ul>
  </nav>
  <ul>
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
</header>
{#if open}
  <nav class="drawer">
    {#each links as link}
      <a href={link.href}>{link.text}</a>
    {/each}
    <a href="/mailing-list">
      <div class="envelope">
        <Envelope />
      </div>
    </a>
  </nav>
{/if}

<style>
  header {
    background-color: #000000;
    color: white;
    min-height: 70px;
    height: 70px;
    display: flex;
    flex-direction: row;
    padding: 3px 30px 3px 10px;
    align-items: center;
    justify-content: space-between;
  }
  nav {
    min-width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .drawer {
    display: flex;
    flex-direction: column;
    background-color: #000000;
    color: white;
    height: max-content;
    padding-bottom: 1em;
  }
  .drawer > a {
    font-size: 1.5em;
    font-weight: 700;
    width: 100%;
    text-align: center;
  }
  /* Links */
  nav > a {
    font-size: 2em;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.1em;
    font-weight: 700;
    margin-left: 15px;
  }
  a:hover {
    color: #1f7bb6;
  }

  ul {
    max-width: 570px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 1rem;
    align-items: center;
  }
  .envelope {
    width: 22px;
    height: 22px;
  }

  /* Hamburger */
  button {
    display: none;
  }
  button {
    background-color: #000;
    border: none;
  }
  svg {
    min-height: 24px;
    transition: transform 0.3s ease-in-out;
  }

  svg line {
    /* `currentColor` means inherit color from the text color */
    color: #fff;
    stroke: currentColor;
    stroke-width: 3;
    transition: transform 0.3s ease-in-out;
  }
  /* adjust the Z-index, so that the icon is on top of the sidebar */
  button {
    z-index: 20;
  }

  .open {
    left: 0;
  }
  .open svg {
    transform: scale(0.7);
  }

  /* rotate the top line */
  .open #top {
    transform: translate(6px, 0px) rotate(45deg);
  }

  /* hide the middle */
  .open #middle {
    opacity: 0;
  }

  /* rotate the bottom line */
  .open #bottom {
    transform: translate(-12px, 9px) rotate(-45deg);
  }
  /* Socials */
  header > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  header > ul > a > div {
    width: 22px;
    height: auto;
    padding: 0;
    display: flex;
    margin-left: 20px;
  }

  /* Responsive */
  @media (max-width: 1140px) {
    header > nav {
      flex-direction: column;
      align-items: flex-start;
    }
    header > nav > ul > :first-child {
      margin-left: 0;
    }
  }
  @media (max-width: 800px) {
    header > nav > ul {
      display: none;
    }
    header > ul {
      display: none;
    }
    header {
      display: flex;
      flex-direction: row;
    }
    header > nav {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    header > nav > button {
      display: block;
    }
  }
  @media (max-width: 500px) {
    header > nav > a {
      font-size: 1.7em;
    }
    .drawer > a {
      font-size: 1.5em;
    }
  }
</style>
