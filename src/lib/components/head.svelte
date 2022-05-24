<script lang="ts">
  export let title = "";
  export let description = "";
  export let slug = "";
  export let image = "";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={`https://friendstotheend.net/${slug}`} />
  <meta property="og:site_name" content="Friends to the End" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta property="og:image" content={image} />
</svelte:head>
