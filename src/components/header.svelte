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
  @media (max-width: 1150px) {
    header {
      flex-direction: column;
    }
  }
  @media (max-width: 900px) {
    header {
      flex-direction: column;
      min-height: 90px;
      height: 90px;
    }
  }
  @media (max-width: 450px) {
    header {
      flex-direction: column;
      min-height: 160px;
      height: 160px;
    }
  }
</style>
