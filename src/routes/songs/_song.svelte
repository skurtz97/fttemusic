<script>
  //@ts-nocheck
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="outer">
  <div class="inner">
    <div class="content">
      <slot />
    </div>
    <div class="embeds">
      <slot name="embeds" />
    </div>
  </div>
</div>

<style>
  .outer {
    width: 90%;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .inner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .content {
    max-width: 80ch;
    width: 80ch;
    min-width: 40%;
  }
  .embeds {
    margin-left: 4rem;
    min-width: 40%;
    height: 100%;
  }
  :global(.embeds > div) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  :global(.embeds > div > iframe) {
    margin-bottom: 1rem;
  }
</style>
