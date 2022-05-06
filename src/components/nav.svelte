<script lang="ts" context="module">
  export interface Link {
    href: string;
    text?: string;
  }
</script>

<script lang="ts">
  import Envelope from "./icons/envelope.svelte";
  export let brand = "My Brand";
  export let links: Link[] = [
    { href: "/about", text: "About" },
    { href: "/press", text: "Press" },
    { href: "/contact", text: "Contact" }
  ];
  export let open = false;
</script>

<aside class:open>
  <nav>
    <a href="/">Sidebar Test</a>
  </nav>
</aside>
<nav class="navbar open">
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

<style>
  aside {
    display: none;
    left: -100%;
    transition: left 0.3s ease-in-out;
  }
  .open {
    /* slide on screen */
    display: flex;
    left: 0;
  }
  .navbar .open {
    display: none;
  }
  nav {
    min-width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  nav > a {
    font-size: 2em;
    font-weight: 700;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.1em;
    font-weight: 700;
    margin-left: 15px;
  }
  ul {
    max-width: 570px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 1rem;
    align-items: center;
  }
  a:hover {
    color: #1f7bb6;
  }
  .envelope {
    width: 22px;
    height: 22px;
  }
  button {
    background-color: #000;
    border: none;
    display: none;
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

  @media (max-width: 900px) {
    nav {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }
    button {
      display: flex;
    }
    button:hover {
      cursor: pointer;
    }
    svg line {
      /* `currentColor` means inherit color from the text color */
      stroke: currentColor;
      stroke-width: 3;
      transition: transform 0.3s ease-in-out;
    }
    ul {
      display: none;
    }
  }
  @media (max-width: 520px) {
    :first-of-type(a) {
      margin-left: 0px;
    }
    a {
      font-size: 12pt;
    }
    ul {
      margin-left: 0rem;
    }
  }
  @media (max-width: 450px) {
    ul {
      flex-direction: column;
    }
    nav > a {
      font-size: 22pt;
    }
  }
  @media (max-width: 390px) {
    nav > a {
      font-size: 18pt;
    }
    nav > ul > a {
      letter-spacing: 2px;
    }
  }
</style>
