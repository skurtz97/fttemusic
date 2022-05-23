<script lang="ts">
  import Head from "$components/head.svelte";
  import Accordion from "$src/lib/components/accordion.svelte";
  export let width = 0;
</script>

<Head
  title="Contact Thom Kurtz about Friends To The End | Sound And Vision Collide"
  description="Now promoting 2021 drops for digital singles and music videos by Friends To The End (Thom Kurtz band project). Where'd You Put The Baby? Coming this spring."
  slug="contact"
/>

<svelte:window bind:innerWidth={width} />
<img
  class="banner"
  src={width === 0 || width >= 600
    ? "/images/contact-banner.jpg"
    : "images/mobile/contact-banner.jpg"}
  alt="home banner"
/>
<div class="container">
  <h2>CONTACT &amp; SUPPORT</h2>
  <p class="inquiry">
    <b>For all inquiries, please use <a href="mailto:fttemusic@gmail.com">fttemusic@gmail.com</a></b
    >
  </p>
  <div class="form">
    <form>
      <h4>Be a Friend to the End and sign-up for our regular email news updates.</h4>
      <label for="name">First Name (Required)</label>
      <input type="text" name="name" placeholder="Your First Name" />
      <label for="email">Email Address (Required)</label>
      <input type="email" name="email" placeholder="Your Email Address" />
      <button class="btn">Sign up</button>
    </form>
  </div>
  <p>Help us support fellow artist and musician collaborators through our PAYPAL patron link.</p>
  <a class="btn-donate" href="https://www.paypal.me/friendstotheend" target="_blank" rel="noopener"
    >Donate via Paypal</a
  >
  <p>
    Your donations allow us to create more studio recordings and music videos, which support working
    musicians, artists, developers, videographers and editors, and other hard working members of the
    music biz in our region, who stoke the star-maker machinery behind the popular song.
  </p>
  <p>
    Any donation will be happily rewarded with a bonus download or link to a private stream. Any
    donation of <strong>$10 or more</strong> will be very gratefully rewarded with
    <strong>bonus downloads and private stream links for EVERYTHING</strong> presently available in our
    bonus catalog.
  </p>
  <h4>Visit us on all our social media platforms.</h4>
  <a class="foundee-link" href="found.ee/ftte" target="_blank" rel="noopener"
    >Streaming Platform Links</a
  >
  <p>
    <strong
      >FROM THE FOUNDER AND PRODUCER OF EVERY SORT OF DIY THING FOR FRIENDS TO THE END
    </strong> - Thank you so very much for visiting our site, and specially for considering any action
    to support our DIY music effort. My commitment is to personally read and answer all correspondence
    and, in every way possible, make our audience’s experience enjoyable and memorable.
  </p>
  <p class="signoff">Sincerely yours,</p>
  <div class="signature">
    <img src="/images/signature.gif" alt="Signature" />
    <p>Friends To The End Founder</p>
  </div>
  <Accordion title="Photo Credit">
    <p>Press photo by Kevin Chin, Northshore Media Productions, Round Rock, TX.</p>
  </Accordion>
</div>

<style>
  .banner {
    width: 100%;
    height: auto;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80ch;
    margin: 0 auto;
    text-align: center;
  }
  .inquiry {
    text-align: center;
  }
  p {
    text-align: left;
    width: 100%;
  }
  h2 {
    margin-bottom: 0.1rem;
  }
  h4 {
    margin-top: 0.1rem;
  }
  .container > p > b > a {
    color: #0157b9;
    text-decoration: none;
  }
  .container > p > b > a:hover {
    color: #0e63c4;
    text-decoration: underline;
  }
  .foundee-link {
    color: #0157b9;
    text-decoration: none;
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  .foundee-link:hover {
    color: #3e89df;
    text-decoration: underline;
  }
  .form {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  label {
    margin-bottom: 0.25rem;
    text-align: left;
  }
  form > button {
    font-size: 12pt;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #333333;
    color: white;
    border: none;
    margin-top: 1rem;
  }
  form > button:hover {
    background-color: #4d4d4d;
    cursor: pointer;
  }
  input {
    font-size: 12pt;
    margin-bottom: 1rem;
    padding: 0.4rem;
    border-radius: 4px;
    border: none;
    box-shadow: 1px 1px 1px #ccc;
  }

  .btn-donate {
    border-radius: 50em;
    color: #fefefe;
    font-weight: 500;
    text-decoration: none;
    padding: 0.8em 1.875em;
    background-color: #4d7de1;
    border: 1px solid #0000000d;
    margin-bottom: 1rem;
  }
  .btn-donate:hover {
    background-color: #82a5f3;
    cursor: pointer;
  }

  :global(.btn-instagram > svg) {
    width: 22px;
    height: 22px;
    margin-right: 5px;
  }
  :global(.btn-instagram > svg:hover) {
    color: #ffffff;
  }

  .signoff {
    width: 100%;
    text-align: left;
  }
  .signature {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .signature > img {
    width: 300px;
    height: 113px;
  }
  .signature > p {
    margin-left: 2.4rem;
  }
  @media (max-width: 850px) {
    .container {
      width: 60ch;
      max-width: 400px;
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
