<script lang="ts">
  import Head from "$components/head.svelte";
</script>

<Head
  title="THANKYOU! from Friends To The End Where Sound And Vision Collide."
  description="THANKYOU! for visiting Where Sound And Vision Collide - Modern soft rock, curiously original and pointy mix-ups of joy, whimsy, wisdom and sometimes sorrow."
  slug="thank-you"
/>

<div class="container">
  <h1>THANK YOU! &nbsp; Here's your preview.</h1><p></p>
    <div class="embed-container">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/-phPAiOZCUE?origin=https://friendstotheend.net"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
 <h3>You should receive an email with a link to unreleased bonus content.</h3>

  <p>
    What an encouragement to have you with us at <b>Friends To The End!</b> We’ve been charting off
    to infinity and beyond, with your continued support. Be sure to hear our recent releases
    <b>Where’d You Put The Baby?</b>
    and <b>A World Of Troubles</b> at our <a href="/songs">our Songs page</a> or any digital streaming
    platform (DSP) like Apple Music, Spotify or Amazon Music.
  </p>
  <p>
    To show our appreciation, have yourself an advance screening of our unreleased new music video
    for <b>ROBOT ODDiTY</b>, coming to all the DSPs on June 1, 2022.
  </p>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80ch;
    margin: 2rem auto;
  }
  h1 {
    width: 100%;
    text-align: left;
    margin-bottom: 0;
  }
  h3::before {
    content: "";
    border-top: 1px gray solid;
    width: 1em;
    display: block;
    padding: 0 0 15px 0;
  }

  @media (max-width: 1000px) {
    .container {
      max-width: 95%;
    }
  }
</style>
