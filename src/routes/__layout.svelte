<script lang="ts">
  import "$src/normalize.css";
  import "$src/app.css";
  import Footer from "$src/lib/components/footer.svelte";
  import Header from "$src/lib/components/header.svelte";
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
