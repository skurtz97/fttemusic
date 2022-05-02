<script lang="ts">
  import Nav from "$components/nav.svelte";
  import Social from "$components/social.svelte";
  import type { Link } from "$types/global";
  export let brand = "My Brand";
  export let links: Link[] = [
    { href: "/songs", text: "Songs" },
    { href: "/playlists", text: "Playlists" },
    { href: "/about", text: "About" },
    { href: "/press", text: "Press" },
    { href: "/contact", text: "Contact" }
  ];
</script>

<header>
  <Nav {brand} {links} />
  <Social />
</header>

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
    border-bottom: 1px solid #fff;
  }
</style>
