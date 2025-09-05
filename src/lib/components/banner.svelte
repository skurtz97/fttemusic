<script lang="ts">
  interface Props {
    src: string;
    alt: string;
  }

  let { src, alt }: Props = $props();
</script>

<img {src} {alt} />

<style>
  img {
    width: 100%;
    height: auto;
  }
</style>
