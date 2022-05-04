<script lang="ts">
  import "../styles/global.css";
  import Footer from "$components/footer.svelte";
  import Betterheader from "$components/betterheader.svelte";
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
