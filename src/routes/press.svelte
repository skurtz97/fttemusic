<script lang="ts">
  import Head from "$components/head.svelte";
</script>

<Head
  title="Press Friends To The End | Where Sound And Vision Collide"
  description="Modern soft rock, curiously original and pointy mash-ups of joy, whimsy, wisdom and sometimes sorrow."
  slug="press"
/>

<div class="banner" />
<div class="container">

  <div class="block">
    <h4>Feedback about our last hit single “Where'd You Put The Baby?”.</h4>
    <p>
      <b>From Bruno Kukaj of playlister.club – </b><i
        >Cool instrumental , such a nice and rich melody , also the vocal was great ! </i
      >
    </p>
    <p>
      <b>From Anonymous at playlister.club – </b><i
        >The lyrics of the song are really interesting, it is a remarkable point. I think that the guitars accompany in a solid way, they sound with a very good color. The singer has a good performance too. Great job!</i
      >
    </p>
 </div>  <h3>
    <a href="https://happymag.tv/friends-to-the-end-interview/">
      Check out the interview at HappyMag.TV
    </a>
  </h3>
  <h3>
    <a href="https://found.ee/happy01">
      Read the review for "Where'd You Put The Baby?" at HappyMag.TV
    </a>
  </h3>
  <p class="soundcloud-intro">Check out our radio interview in three parts on Soundcloud.</p>
  <iframe
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1231161115&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
    scrolling="no"
    width="100%"
    height="340"
    frameborder="no"
    title="KWVH Radio Interview - Embed"
    class="playlist-embed"
  />
  <h3>
    <a
      href="https://www.divideandconquermusic.com/indie-music-album-reviews/friends-to-the-end-4-track-music-video-series"
    >
      Try the review at Divide and Conquer Music.
    </a>
  </h3>
  <div class="block">
    <h4>Feedback about our hit debut follow-up “As Sure As Your Sorrow Is Joy”.</h4>
    <p>
      <b>From daydream of riccardopietri – </b><i
        >Really beautiful genre of music and style . . . with your amazing voice.</i
      >
    </p>
    <p>
      <b>From divideandconquermusic –</b>
      <i
        >Robust and bursts at the seams … These four songs were well produced. The recording quality
        was impressive especially given the amount of instrumentation.
        <a
          href="https://www.divideandconquermusic.com/indie-music-album-reviews/friends-to-the-end-4-track-music-video-series"
          >Read the review.</a
        >
      </i>
    </p>
  </div>
  <div class="block">
    <h4>Feedback about our debut single, “Love On The Rocks (Shipwrecked)”.</h4>
    <p>
      <b>From Niko at Indie Music Center –</b>
      <i
        >You really succeeded in creating a musical universe of your own. Amazing vocals here,
        reminding me of Kate Bush sometimes. Cool and relaxing atmosphere, soulful vocals and
        heartfelt lyrics. Nice quality of production too.
      </i>
    </p>
    <p>
      <b>From Kevin Hugger at mp3hugger – </b>
      <i
        >Nice name for an act and what a progressive rock opening you have imagined here. . . . an
        individual performance that is breathtaking.
      </i>
    </p>
  </div>
  <div class="block">
    <h4>Some early feedback about our preview music videos.</h4>
    <p>
      <i>
        This video is life-changing. The amazing SFX, the incredible OST, and the best part has to
        be the storyline and moral. There is such amazing lore to this short-film, and the video all
        together is terrific. 10/10 for me, one of the best videos ever created for sure.
      </i>
    </p>
    <p>
      <i>This is weird but I like it that way.</i>
    </p>
    <p>
      <i>This isn’t a music video. This is an experience.</i>
    </p>
    <p>
      <i
        >The picture assortment works well with the music much more lively and coordinates well with
        the song. I also like the back up singers towards the end of the song.</i
      >
    </p>
    <p>
      <i
        >Wow! that was good, I love the upbeat tempo and the arrangements of sounds with instruments
        and others. The assortment of pictures and short videos peak my interest where you displayed
        a variety of themes. Lyrics were light (not deep thinking) and fun. Once again I enjoyed the
        song.</i
      >
    </p>
    <p>
      <i>This has to be an art project of some sort.</i>
    </p>
  </div>
</div>

<style>
  .banner {
    width: 100%;
    height: 300px;
    background-image: url("/images/pendulum-trailer.jpg");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    background-position: center center;
  }
  a {
    color: var(--link);
    text-decoration: none;
  }
  a:hover {
    color: var(--link-hover);
    text-decoration: underline;
  }

  h3 {
    margin-bottom: 0.25rem;
  }
  h4 {
    text-align: left;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 80ch;
    margin: 0 auto;
  }
  .soundcloud-intro {
    font-weight: bold;
  }
  @media (max-width: 850px) {
    div {
      width: 100%;
      margin: 0 auto;
    }
  }
  @media (max-width: 900px) {
    div {
      width: 70ch;
    }
  }
  @media (max-width: 800px) {
    div {
      width: 60ch;
    }
  }
  @media (max-width: 700px) {
    div {
      width: 50ch;
    }
  }
  @media (max-width: 600px) {
    div {
      width: 40ch;
    }
  }
  @media (max-width: 500px) {
    div {
      width: 35ch;
    }
  }
  @media (max-width: 400px) {
    div {
      width: 30ch;
    }
  }
  @media (max-width: 350px) {
    div {
      width: 27ch;
    }
  }
</style>
