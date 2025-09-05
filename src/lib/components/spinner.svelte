<script lang="ts">
  interface Props {
    color?: string;
    size?: string;
  }

  let { color = "#ffffff", size = "60px" }: Props = $props();
</script>

<div class="spinner" style="--size: {size}; --color: {color};"></div>

<style>
  .spinner {
    height: var(--size);
    width: var(--size);
    border-color: var(--color) transparent var(--color) var(--color);
    border-width: calc(var(--size) / 15);
    border-style: solid;
    border-image: initial;
    border-radius: 50%;
    animation: 0.75s linear 0s infinite normal none running rotate;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
