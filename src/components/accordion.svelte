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

<style>
  div {
    background-color: #bbbbbb;
    width: calc(100% - 2rem);
    margin: 1rem 0rem;
    padding: 0rem 1rem;
  }
</style>
