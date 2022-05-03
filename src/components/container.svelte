<script lang="ts">
  import { text } from "svelte/internal";
  export let flex = false;
  export let flexdir: "row" | "col" = "row";
  export let textcenter: boolean = false;
</script>

<div style:display={flex ? "flex" : "block"} class={`${flexdir} ${textcenter ? "center" : "left"}`}>
  <slot />
</div>

<style>
  div {
    width: 80ch;
    margin: 2rem auto;
  }
  .col {
    flex-direction: column;
    align-items: center;
  }
  .row {
    flex-direction: row;
  }
  .left {
    text-align: left;
  }
  .center {
    text-align: center;
  }
  @media (max-width: 850px) {
    div {
      width: 100%;
      margin: 0 auto;
    }
  }
</style>
