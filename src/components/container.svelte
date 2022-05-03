<script lang="ts">
  import { text } from "svelte/internal";
</script>

<div>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    width: 80ch;
    margin: 2rem auto;
  }
</style>
