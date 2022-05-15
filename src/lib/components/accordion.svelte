<script lang="ts">
  import { slide } from "svelte/transition";
  export let title: string = "Title";
  export let open = false;
  function click() {
    open = !open;
  }
</script>

<div class="accordion">
  <div class="header" on:click={click}>
    <svg
      class:open
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
    >
      <path d="M19 9l-7 7-7-7" />
    </svg>
    {title}
  </div>
  {#if open}
    <div class="content" transition:slide={{ duration: 300 }}>
      <slot />
    </div>
  {/if}
</div>

<style>
  .accordion {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0rem;
    box-shadow: #0000001f 0px 1px 3px, #0000003d 0px 1px 2px;
    border-radius: 0.25rem;
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    font-size: 12pt;
    font-weight: 700;
    color: #000000;
    padding: 0.5rem;
  }
  svg {
    transition: transform 500ms;
    width: 25px;
    height: auto;
    stroke: #f7f7f7, #0c0c77;
  }
  :global(.accordion a) {
    color: var(--link);
    text-decoration: none;
  }
  :global(.accordion:hover) {
    cursor: pointer;
    color: var(--link-hover);
  }
  .open {
    transform: rotate(180deg);
  }
  .header:hover {
    color: #2c2cf3;
    cursor: pointer;
  }
  .content {
    background-color: #f7f7f7;
    font-weight: 400;
    padding: 0.5rem 0.5rem;
    color: black;
    cursor: text;
  }
</style>
