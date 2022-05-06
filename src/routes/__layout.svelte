<script lang="ts">
  import "$src/normalize.css";
  import "$src/app.css";
  import Footer from "$components/footer.svelte";
  import Header from "$components/header.svelte";
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
  :global(main) {
    background-color: var(--background);
    display: flex;
    flex-direction: column;
  }
</style>
