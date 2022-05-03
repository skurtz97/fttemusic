<script lang="ts">
  import Container from "$components/container.svelte";
  import Banner from "$components/banner.svelte";
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>
<Banner src="/images/contact-banner.jpg" alt="Contact Banner" />
<div class="container">
  <h2>CONTACT &amp; SUPPORT</h2>
  <h2>FRIENDS to the END</h2>
  <h2>MUSIC &amp; VIDEOS</h2>
  <p>
    <b>For all inquiries, please use <a href="mailto:fttemusic@gmail.com">fttemusic@gmail.com</a></b
    >
  </p>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80ch;
    margin: 0 auto;
    text-align: center;
  }
  a {
    color: #0157b9;
    text-decoration: none;
  }
  a:hover {
    color: #0e63c4;
    text-decoration: underline;
  }
  @media (max-width: 850px) {
    .container {
      width: 60ch;
    }
  }
  @media (max-width: 600px) {
    .container {
      width: 50ch;
    }
  }
  @media (max-width: 550px) {
    .container {
      width: 45ch;
    }
  }
  @media (max-width: 450px) {
    .container {
      width: 35ch;
    }
  }
  @media (max-width: 400px) {
    .container {
      width: 30ch;
    }
    h2 {
      font-size: 22pt;
    }
  }
  @media (max-width: 400px) {
    .container {
      width: 28ch;
    }
    h2 {
      font-size: 20pt;
    }
  }
</style>
