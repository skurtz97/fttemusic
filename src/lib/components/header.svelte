<script lang="ts" context="module">
  export interface Link {
    href: string;
    text?: string;
  }
</script>

<script lang="ts">
  import Envelope from "$src/lib/components/icons/envelope.svelte";
  import SpotifyIcon from "$src/lib/components/icons/spotify.svelte";
  import YoutubeIcon from "$src/lib/components/icons/youtube.svelte";
  import InstagramIcon from "$src/lib/components/icons/instagram.svelte";
  import SoundcloudIcon from "$src/lib/components/icons/soundcloud.svelte";
  import FacebookIcon from "$src/lib/components/icons/facebook.svelte";
  import HamburgerIcon from "$src/lib/components/icons/hamburger.svelte";
  import Social from "$src/lib/components/social.svelte";
  import { slide } from "svelte/transition";
  let links: Link[] = [
    { href: "/songs", text: "SONGS" },
    { href: "/playlists", text: "PLAYLISTS" },
    { href: "/about", text: "ABOUT" },
    { href: "/press", text: "PRESS" },
    { href: "/contact", text: "CONTACT" }
  ];
  let brand = "FRIENDS TO THE END";
  let current: "opened" | "closed" = "closed";
  let open: boolean = false;
  let width: number = 0;

  function toggleOpen() {
    if (current === "opened") {
      current = "closed";
      open = false;
    } else {
      current = "opened";
      open = true;
    }
  }
</script>

<svelte:window bind:innerWidth={width} />
<header>
  <nav class="nav" class:open>
    <a href="/">{brand}</a>
    {#if current === "opened" || width < 900}
      <button class="burger" class:open on:click={toggleOpen}>
        <svg width="32" height="24" fill="currentColor">
          <line id="top" x1="0" y1="2" x2="32" y2="2" />
          <line id="middle" x1="0" y1="12" x2="32" y2="12" />
          <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
        </svg>
      </button>
    {/if}
    {#if current === "closed"}
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
    {/if}
  </nav>

  {#if current === "closed"}
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
  {/if}
</header>
{#if current === "opened"}
  <nav id="drawer" class="drawer" transition:slide={{ duration: 200 }}>
    {#each links as link}
      <a href={link.href} on:click={() => toggleOpen()}>{link.text}</a>
    {/each}
    <a href="/mailing-list" on:click={() => toggleOpen()}>MAILING LIST </a>
    <Social />
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
  .nav.open {
    width: 100%;
    justify-content: space-between;
  }
  .envelope {
    margin-top: 5px;
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
    margin-bottom: 0.25rem;
    padding: 1rem 0rem;
    margin-left: 0;
  }
  /* Neeed ID selector for higher specificity to overload Socials component styles with globals*/
  :global(#drawer > ul) {
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10px;
  }
  :global(#drawer > ul > div) {
    padding: 5px;
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
    background-color: #0c0c0c;
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
    padding-bottom: 5px;
  }

  /* Hamburger */
  .burger {
    background-color: #000;
    border: none;
  }
  .burger:hover {
    cursor: pointer;
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
  @media (max-width: 1230px) {
    header > nav > a {
      font-size: 1.7em;
    }
  }
  @media (max-width: 1140px) {
    header > nav {
      flex-direction: column;
      align-items: flex-start;
    }
    header > .nav.open {
      flex-direction: row;
    }
    header > nav > ul > :first-child {
      margin-left: 0;
    }
  }
  @media (max-width: 900px) {
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
  @media (max-width: 450px) {
    header > nav > a {
      font-size: 1.5em;
    }
    .drawer > a {
      font-size: 1.5em;
    }
  }
  @media (max-width: 400px) {
    header > nav > a {
      font-size: 1.2em;
    }
    .drawer > a {
      font-size: 1.2em;
    }
  }
</style>
