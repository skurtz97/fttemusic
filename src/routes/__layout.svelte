<script lang="ts">
  import "../styles/global.css";

  import Footer from "$components/footer.svelte";
  import type { Link } from "$types/global";
  import Betterheader from "$components/betterheader.svelte";

  const title = "Friends To The End";
</script>

<Betterheader />
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
