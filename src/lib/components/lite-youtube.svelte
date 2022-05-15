<script lang="ts">
  import { onMount } from "svelte";
  export let id: string;
  export let defaultPlay = false;
  export let adLinksPreconnect = true;
  export let isPlaylist = false;
  export let noCookie = true;
  export let mute = true;
  export let isMobile = false;
  export let mobileResolution = "hqdefault";
  export let desktopResolution = "maxresdefault";
  export let lazyImage = false;
  export let iframeTitle = "YouTube video.";
  export let imageAltText = "YouTube's thumbnail image for the video.";
  export let isPreconnected = false;
  export let iframeLoaded = true;

  let muteParam = mute || defaultPlay ? "1" : "0"; // Default play must be mute
  let queryString;
  let defaultPosterUrl = isMobile
    ? `https://i.ytimg.com/vi_webp/${id}/${mobileResolution}.webp`
    : `https://i.ytimg.com/vi_webp/${id}/${desktopResolution}.webp`;
  let posterUrl = defaultPosterUrl;
  let fallbackPosterUrl = isMobile
    ? `https://i.ytimg.com/vi/${id}/${mobileResolution}.jpg`
    : `https://i.ytimg.com/vi/${id}/${desktopResolution}.jpg`;
  let ytUrl = noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
  let iframeSrc = isPlaylist
    ? `${ytUrl}/embed/videoseries?list=${id}`
    : `${ytUrl}/embed/${id}?${queryString}`; // * Lo, the youtube placeholder image!  (aka the thumbnail, poster image, etc)

  function warmConnections() {
    if (isPreconnected) return;
    isPreconnected = true;
  }
  function loadIframeFunc() {
    if (iframeLoaded) return;
    iframeLoaded = true;
  }

  onMount(() => {
    console.log(iframeLoaded);
    iframeLoaded = true;
    muteParam = mute || defaultPlay ? "1" : "0";
    queryString = `autoplay=1&mute=${muteParam}`;
    defaultPosterUrl = isMobile
      ? `https://i.ytimg.com/vi_webp/${id}/${mobileResolution}.webp`
      : `https://i.ytimg.com/vi_webp/${id}/${desktopResolution}.webp`;

    fallbackPosterUrl = isMobile
      ? `https://i.ytimg.com/vi/${id}/${mobileResolution}.jpg`
      : `https://i.ytimg.com/vi/${id}/${desktopResolution}.jpg`;
    ytUrl = noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
    iframeSrc = isPlaylist
      ? `${ytUrl}/embed/videoseries?list=${id}`
      : `${ytUrl}/embed/${id}?${queryString}`; // * Lo, the youtube placeholder image!  (aka the thumbnail, poster image, etc)
    posterUrl = defaultPosterUrl;
  });
</script>

<link rel="preload" href={posterUrl} as="image" />
{#if isPreconnected}
  <link rel="preconnect" href={ytUrl} />
  <link rel="preconnect" href="https://www.google.com" />
{/if}
{#if isPreconnected && adLinksPreconnect}
  <link rel="preconnect" href="https://static.doubleclick.net" />
  <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
{/if}
<div
  on:click={loadIframeFunc}
  on:pointerover={warmConnections}
  class={`yt-lite ${iframeLoaded ? "lyt-activated" : false}`}
  data-testid="lite-yt-embed"
>
  <img
    src={posterUrl}
    class="yt-lite-thumbnail"
    loading={lazyImage ? "lazy" : undefined}
    alt={imageAltText}
  />
  <div class="lty-playbtn" />
  {#if iframeLoaded}
    <iframe
      width="560"
      height="315"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title={iframeTitle}
      src={iframeSrc}
    />
  {/if}
</div>

<style>
  .yt-lite {
    background-color: #000;
    position: relative;
    display: block;
    contain: content;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
  }

  /* gradient */
  .yt-lite::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: repeat-x;
    height: 60px;
    padding-bottom: 50px;
    width: 100%;
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  }

  /* responsive iframe with a 16:9 aspect ratio
  thanks https://css-tricks.com/responsive-iframes/
*/
  .yt-lite::after {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }
  .yt-lite > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  /* play button */
  .yt-lite > .lty-playbtn {
    width: 70px;
    height: 46px;
    background-color: #212121;
    z-index: 1;
    opacity: 0.8;
    border-radius: 14%; /* TODO: Consider replacing this with YT's actual svg. Eh. */
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  }
  .yt-lite:hover > .lty-playbtn {
    background-color: #f00;
    opacity: 1;
  }
  /* play button triangle */
  .yt-lite > .lty-playbtn:before {
    content: "";
    border-style: solid;
    border-width: 11px 0 11px 19px;
    border-color: transparent transparent transparent #fff;
  }

  .yt-lite > .lty-playbtn,
  .yt-lite > .lty-playbtn:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  /* Post-click styles */
  .yt-lite.lyt-activated {
    cursor: unset;
  }
  .yt-lite.lyt-activated::before,
  .yt-lite.lyt-activated > .lty-playbtn {
    opacity: 0;
    pointer-events: none;
  }

  .yt-lite-thumbnail {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    object-fit: cover;
  }
</style>
