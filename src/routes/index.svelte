<script lang="ts">
  import Head from "$components/head.svelte";

  export let width = 0;
</script>

<Head
  title="Friends To The End | Modern soft rock | Sound & Vision collide"
  description="Modern soft rock where Sound & Vision collide - curiously original music and pointy video mix-ups of joy, whimsy, wisdom and sometimes sorrow."
  slug=""
/>
<svelte:window bind:innerWidth={width} />
<img
  src={width === 0 || width >= 600 ? "/images/home-banner.jpg" : "images/mobile/home-banner.jpg"}
  width={width === 0 || width >= 600 ? "1792" : "600"}
  height={width === 0 || width >= 600 ? "1008" : "338"}
  alt="Home Banner"
/>
<div>
  <div class="intro">
    <h1>Modern Soft Rock</h1>
    <h4>Where Sound And Vision Collide</h4>
  </div>
  <p>
    Welcome to <b class="RO"><i>Friends To The End</i></b>, where Modern soft rock music collides
    with videos of joy, whimsy, wisdom, and sometimes, sorrow.
  </p>
  <p>
    Our summer release for 2023, <b>Soap Creek Saloon</b> dropped August 25, 2023.
    <b>Time Travel & Twang</b> back to the
    <b>iconic cosmic cowboy venue with music and Animé Americana video.</b> <br /><br />
    <a href="https://found.ee/ftteSCS"> Links to all Soap Creek Saloon content</a><br />
    <a href="https://found.ee/pr-scs"> Soap Creek Saloon Press Release [pdf]</a>
  </p>
  <div class="iframe-container">
    <iframe
      src="https://www.youtube-nocookie.com/embed/2jxE3cWLuVE?origin=https://friendstotheend.net"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
  <p>
    Enjoy the kinetic lyric music video below for our first single release for 2023, <b class="RO"
      >Chinese Underground</b
    > (April 28, 2023).
  </p>
  <p>
    <a href="https://kutx.org/song-of-the-day/friends-to-the-end-chinese-underground-premiere"
      ><b class="RO">kutx.org</b></a
    >
    - the Austin Music Connection -
    <b class="RO">Song Of The Day</b>, Wednesday, April 26, 2023,
    <b class="RO">Chinese Underground</b>.
  </p>
  <p>
    Marching Chinese marimbas, pining erhu players, and guzheng samples are the orchestral flairs
    that Thom Kurtz mixes with his lyrical witticisms in <b class="RO">Friends To The End</b>’s
    single, <b class="RO">Chinese Underground</b>. <br /><br />The upbeat and playful ballad takes
    sardonic stabs at authoritarian attitudes, with killer lines like,
    <i
      >“I thought MZ was dead and buried / The kind of man who never married / Now that he’s back up
      on his throne / You better watch out or he’ll break your bones."</i
    > <br /><br />At first, the song seems to be mocking Mao, but the focal point is that some ideas
    never wither, wilt, or waver. Even though they ebb, they will resurface later.<br /><br />
  </p>
  <a href="https://found.ee/ftteCU">Streaming, Music Videos, Press Release and other Links Here</a>
  <p />
  <div class="iframe-container">
    <iframe
      src="https://www.youtube-nocookie.com/embed/sXEdYtdBTsg?origin=https://friendstotheend.net"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>

  <iframe
    src="https://open.spotify.com/embed/playlist/59cyAP6DTR7SReJGuXHLSE"
    width="100%"
    height="400px"
    frameborder="0"
    title="Spotify Playlist Embed"
    class="spotify-playlist"
  />
  <p>
    Try the chill music videos released since August 2020: <b>ROBOT ODDiTY</b>,
    <b>Where'd You Put The Baby?</b>,
    <b> A World Of Troubles</b>, <b> As Sure As Your Sorrow Is Joy</b>, and
    <b> Love On The Rocks (Shipwrecked)</b>.
  </p>
  <div class="videos">
    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/-phPAiOZCUE?origin=https://friendstotheend.net"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/iCaQE-hg93w?origin=https://friendstotheend.net"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="iframe-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Mf6hLwoBtTk?origin=https://friendstotheend.net"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/h_udJ-gV56E?origin=https://friendstotheend.net"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/Ru-5ls0eQfs?origin=https://friendstotheend.net"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <p>
      Watch this video for a sneak-peak behind the scenes and in front of the camera. And discover
      lyrics and more streaming samples of Modern soft rock on our <a href="/songs">Songs page.</a>
    </p>

    <div class="iframe-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/u9uY9la3zLA?origin=https://friendstotheend.net"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</div>

<style>
  div {
    width: 70ch;
    margin: 0.5rem auto;
  }
  h1 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  img {
    width: 100%;
    height: auto;
  }
  .intro {
    text-align: center;
    margin: 0.5rem auto;
  }
  .intro > h1 {
    margin-top: 0.5rem;
  }
  .intro > h4 {
    margin-top: 0.5rem;
  }
  p {
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
  .spotify-playlist {
    margin-bottom: 0.5rem;
  }
  .RO {
    font-size: larger;
  }
  .videos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;
  }
  .videos .iframe-container {
    margin-bottom: 0;
  }

  @media (max-width: 780px) {
    div {
      width: 50ch;
    }
  }
  @media (max-width: 550px) {
    div {
      width: 40ch;
    }
  }
  @media (max-width: 450px) {
    div {
      width: 35ch;
    }
  }
  @media (max-width: 400px) {
    div {
      width: 30ch;
    }
  }
</style>
