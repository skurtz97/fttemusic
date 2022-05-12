<div class="container">
  <div class="embed-container">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/hcxFO_caXOQ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
  <div class="form">
    <form>
      <label for="name">First Name (Required)</label>
      <input type="text" name="name" placeholder="Your First Name" />
      <label for="email">Email Address (Required)</label>
      <input type="email" name="email" placeholder="Your Email Address" />
      <button class="btn">Sign up</button>
    </form>
  </div>
  <h2>The Indie music video event of 2022!</h2>
  <h5>
    Sign up for all the news and avoid FOMO Modern soft rock music by Friends To The End, creator of
    2021 hits "Where'd You Put The Baby?" and "A World Of Troubles." Sign-up for Friends To The End
    email news for advance screening of our upcoming release, ROBOT ODDiTY, plus a bonus track link
    in mail box.
  </h5>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80ch;
    margin: 2rem auto;
  }
  .form {
    display: flex;
    flex-direction: column;
    max-width: 80ch;
    margin-bottom: 2rem;
  }
  h2 {
    width: 100%;
    margin-bottom: 0.25rem;
    margin-top: 0rem;
  }
  h5 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .form {
    width: 100%;
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
  @media (max-width: 1000px) {
    .container {
      width: 60ch;
    }
  }
  @media (max-width: 850px) {
    .container {
      width: 55ch;
    }
  }
  @media (max-width: 700px) {
    .container {
      width: 50ch;
    }
  }
  @media (max-width: 600px) {
    .container {
      width: 40ch;
    }
  }
  @media (max-width: 500px) {
    .container {
      width: 35ch;
    }
  }
  @media (max-width: 420px) {
    .container {
      width: 32ch;
    }
  }
  @media (max-width: 370px) {
    .container {
      width: 30ch;
    }
  }
</style>
