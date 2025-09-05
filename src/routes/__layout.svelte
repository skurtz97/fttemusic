<script lang="ts">
  import "$src/normalize.css";
  import "$src/app.css";
  import Footer from "$src/lib/components/footer.svelte";
  import Header from "$src/lib/components/header.svelte";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<Header />
<main>
  {@render children?.()}
</main>
<Footer />

<style>
  :global(main) {
    background-color: var(--background);
    display: flex;
    flex-direction: column;
  }
</style>
