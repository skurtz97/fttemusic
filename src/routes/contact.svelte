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
  <div class="form">
    <form>
      <h4>Sign-up for Friends To The End email news and receive bonus music links.</h4>
      <label for="name">First Name (Required)</label>
      <input type="text" name="name" placeholder="Your First Name" />
      <label for="email">Email Address (Required)</label>
      <input type="email" name="email" placeholder="Your Email Address" />
      <button class="btn">Sign up</button>
    </form>
  </div>
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
  h2 {
    margin-bottom: 0.5rem;
  }
  a {
    color: #0157b9;
    text-decoration: none;
  }
  a:hover {
    color: #0e63c4;
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
  button {
    font-size: 12pt;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #333333;
    color: white;
    border: none;
    margin-top: 1rem;
  }
  button:hover {
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
