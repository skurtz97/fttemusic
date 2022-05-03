<script lang="ts">
  import "../styles/global.css";
  import Header from "$components/header.svelte";
  import Footer from "$components/footer.svelte";
  import type { Link } from "$types/global";
  const links: Link[] = [
    { href: "/songs", text: "SONGS" },
    { href: "/playlists", text: "PLAYLISTS" },
    { href: "/about", text: "ABOUT" },
    { href: "/press", text: "PRESS" },
    { href: "/contact", text: "CONTACT" }
  ];
  const brand = "FRIENDS TO THE END";
  const title = "Friends To The End";
</script>

<Header {brand} {links} />
<main>
  <slot />
</main>
<Footer />

<style>
  :global(main) {
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
  }
</style>
