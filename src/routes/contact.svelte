<script lang="ts">
  import Banner from "$components/banner.svelte";
  import Instagram from "$components/icons/instagram.svelte";
  import Accordion from "$components/accordion.svelte";
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>
<Banner src="/images/contact-banner.jpg" alt="Contact Banner" />
<div class="container">
  <h2>CONTACT &amp; SUPPORT</h2>
  <h2>FRIENDS TO THE END</h2>
  <h2>MUSIC &amp; VIDEOS</h2>
  <p>
    <b>For all inquiries, please use <a href="mailto:fttemusic@gmail.com">fttemusic@gmail.com</a></b
    >
  </p>
  <div class="yt-subscribe">
    <h4>Follow us on YouTube here.</h4>
    <iframe
      scrolling="no"
      style="position: static; top: 0px; width: 196px; margin: 0px; border-style: none; left: 0px; visibility: visible; height: 48px;"
      tabindex="0"
      id="I0_1651128559805"
      name="I0_1651128559805"
      src="https://www.youtube.com/subscribe_embed?usegapi=1&amp;channelid=UCuwxFr0X-DOaVhARCSi2Ocw&amp;layout=full&amp;theme=dark&amp;count=default&amp;origin=https%3A%2F%2Ffriendstotheend.net&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.iTmf4rxOyWc.O%2Fd%3D1%2Frs%3DAHpOoo-LTnDn-AS2QlMWYZdnaV1OuFR7Iw%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&amp;id=I0_1651128559805&amp;_gfid=I0_1651128559805&amp;parent=https%3A%2F%2Ffriendstotheend.net&amp;pfname=&amp;rpctoken=24412390"
      data-gapiattached="true"
      width="100%"
      frameborder="0"
      title="Youtube Subscribe Embed"
    />
  </div>
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
  <div class="social-btns">
    <a
      class="btn-instagram"
      href="https://www.instagram.com/friendstotheendmusic/"
      target="_blank"
      rel="noopener"
    >
      <Instagram />
      Instagram
    </a>
    <a
      class="btn-soundcloud"
      href="https://soundcloud.com/friendstotheend"
      target="_blank"
      rel="noopener">Soundcloud</a
    >
  </div>
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
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80ch;
    margin: 0 auto;
    text-align: center;
  }
  p {
    text-align: left;
  }
  h2 {
    margin-bottom: 0.5rem;
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
    font-size: larger;
    margin-bottom: 2rem;
  }
  .foundee-link:hover {
    color: #3e89df;
    text-decoration: underline;
  }
  .form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
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
  .social-btns {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
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
  .btn-instagram {
    border-radius: 50em;
    color: #fefefe;
    font-weight: 500;
    text-decoration: none;
    padding: 0.8em 1.875em;
    background-color: #4d7de1;
    border: 1px solid #0000000d;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
  }
  .btn-instagram:hover {
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
  .btn-soundcloud {
    border-radius: 50em;
    color: #fefefe;
    font-weight: 500;
    text-decoration: none;
    padding: 0.85em 1.875em;
    background-color: #ff9600;
    border: 1px solid #0000000d;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
  }
  .btn-soundcloud:hover {
    cursor: pointer;
    background-color: #f8b75c;
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
    .social-btns {
      flex-direction: column;
      align-items: center;
    }
    .btn-instagram {
      display: flex;
      justify-content: center;
    }
    .btn-soundcloud {
      display: flex;
      justify-content: center;
      padding: 0.85em 2.1em;
    }
    h2 {
      font-size: 20pt;
    }
  }
</style>
