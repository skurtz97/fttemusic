<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<img {src} {alt} />

<style>
  img {
    width: 100%;
    height: auto;
  }
</style>
