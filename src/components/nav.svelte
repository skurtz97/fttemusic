<script lang="ts">
  import type { Link } from "$types/global";
  export let brand = "My Brand";
  export let links: Link[] = [
    { href: "/about", text: "About" },
    { href: "/press", text: "Press" },
    { href: "/contact", text: "Contact" }
  ];
</script>

<nav>
  <a href="/">{brand}</a>
  <ul>
    {#each links as link}
      <a href={link.href}>{link.text}</a>
    {/each}
  </ul>
</nav>

<style>
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
</style>
