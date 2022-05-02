<script>
  //@ts-nocheck
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="container">
  <slot name="content" />
  <slot name="embeds" />
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }
</style>
