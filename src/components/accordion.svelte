<script lang="ts">
  import { slide } from "svelte/transition";
  let open = false;
</script>

<div>
  <slot name="label" />
  {#if open}
    <div transition:slide>
      <slot name="content" />
    </div>
  {/if}
</div>

<style></style>
