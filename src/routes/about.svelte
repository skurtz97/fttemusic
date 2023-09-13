<script lang="ts">
  import Head from "$components/head.svelte";
  import Accordion from "$src/lib/components/accordion.svelte";
  export let width = 0;
</script>

<Head
  title="About Friends To The End & Thom Kurtz | Sound And Vision Collide"
  description="Modern soft rock where Sound & Vision collide - curiously original music and pointy video mix-ups of joy, whimsy, wisdom and sometimes sorrow."
  slug="about"
/>

<svelte:window bind:innerWidth={width} />
<img
  class="banner"
  src={width === 0 || width >= 600 ? "/images/about-banner.jpg" : "images/mobile/about-banner.jpg"}
  alt="home banner"
/>
<div class="container">
  <p>
    <b>Dropped!! </b> Our summer release for 2023, <b>Soap Creek Saloon</b> (August 25, 2023).
    <br /><br />
    Another poignant commentary, this time turning the musical clock back to the legendary Austin cosmic
    cowboy era. The ensemble's creative powerhouse, Thom Kurtz, presents his latest single,
    <b>Soap Creek Saloon</b>, a twangy western swing that is a distinct departure from his previous
    Frank Zappa-inspired hit, with a twangy pop Americana western swing & a brilliant Animé American
    music video by Max McDermott.
  </p>
  <p>
    Released April 28, 2023 - <b>Chinese Underground</b> by <b>Friends To The End</b> - now getting traction
    on Spotify playlists with listeners from around the world.
  </p>
  <p>
    Marching Chinese marimbas, pining erhu players, and guzheng samples are the orchestral flairs
    that Austin, TX-based <b>Thom Kurtz</b> mixes with his lyrical witticisms in
    <b>Friends To The End</b>’s new single, <b>Chinese Underground</b>. The upbeat and playful
    ballad takes sardonic stabs at authoritarian attitudes, with killer lines like:<br />
    <i>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“I thought Mao Zedong was dead and buried / the kind of man who
      never married.”<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“Now that he’s back up on his throne / you better watch out or he’ll
      break your bones.</i
    ><br /><br />
    At first, the song seems to be mocking Mao, but the focal point is that some ideas never wither,
    wilt, or waver. Even though they ebb, they will resurface later.
  </p>
  <p>
    <b>ROBOT ODDiTY</b> was the summer 2022 psychedelic <b>Modern soft rock</b> hit from
    <b>Friends To The End</b>, riding sonic waves of piano, synth and brassy percussion shuffles.
    The accompanying edgy music video with a psychedelic twist paints a tale of indoctrination and
    moral discovery by <b>Thom Kurtz</b>, the creator behind his
    <b>Friends To The End</b> band project, with a near-death experience in a raging fire at a power
    plant, while living as “wires inside an iron can.”
  </p>
  <p>
    Previously our summer 2021 <b>Modern soft rock</b> new wave Youtube music video hit was
    <b>Where’d You Put The Baby?</b>, now with over 140K views. The appropriately frantic,
    guitar-heavy music and accusatory vocals were obviously inspired by David Byrne's subversive
    lyrics and the early days of Talking Heads.
  </p>
  <p>
    Kurtz’s trademark creative artistry, propelled by his arsenal of experimental theatre pop
    songwriting, is flavored by such wide ranging influences as Bowie to Steely Dan, Keith Jarrett
    to Duke Ellington, and Todd Rundgren to David Grisman. What <b>Thom Kurtz</b> calls
    <b>Modern soft rock</b>
    — always including top-of-the-line ensemble instrumentation fused with song-specific, custom-built
    vocals – is a kind of singer-songwriter storyteller fusing various shades of chamber pop, and art
    and prog rock.
  </p>
  <p>
    The lovely <b>Susanna Lee</b> sings the breezy Pacific coast vocals for the hopeful anthem,
    <b>A World Of Troubles</b>
    featuring peppy “Penny Lane”-meets-Haydn trumpet fanfares and a lyrical study of everlasting parts
    of life and the earth, such as air in the sky, salts in the sea, and the wind on the ocean.
  </p>
  <p>
    <b>Friends To The End</b> first launched to DSPs like Spotify and Apple Music in August 2020,
    with the debut of <b>Love On The Rocks (Shipwrecked)</b> featuring top-notch vocals by young
    <b>Julia Courtney</b>, against a dark and dreary sky shipwrecked on the rocks of another broken
    romance. Viewership for the <b>Friends To The End</b> music channel tops 2,300 subscribers with more
    than 1 Million total views.
  </p>
  <p>
    Kurtz mixes the inner voice of his lyrics with imaginative visions of emotional illustrations,
    unleashing the deep power of ‘humanhood’ wisdoms, punctuated by whimsy, joy and sometimes
    sorrow, where the sound and vision collide. What’s specially poignant is how each song is a
    destination on life’s journey, as well as a journey through the <b> Friends To The End </b> song
    catalog.
    <b>Thom Kurtz</b> produced roughly two dozen song masters over two and a half years using his background
    in literature, art and film as a guide to the musical arrangements and collaboration with over three
    dozen session musicians.
  </p>

  <p>
    Says Kurtz, “<i
      ><b>Friends To The End</b> sounds like a group of people, but it’s really a group of songs – and
      each song is one giant stepping stone.”</i
    >
    Now establishing <b>Friends To The End</b> as a performing band is Kurtz’s next challenge, in
    support of the exciting spring 2023 release of <b>Chinese Underground</b>, the next enchanting
    introduction of these friends of his to the public.
  </p>

  <div class="container-photos">
    <Accordion title="Photo Credit">
      <p><a href="https://nicolagell.com"><b>Press photo by Nicola Gell, Austin, TX. </b></a></p>
    </Accordion>
  </div>
</div>

<style>
  .container {
    max-width: 80ch;
    margin: 0.5rem auto 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .container-photos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }
  .photos {
    margin-top: 2rem;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
  .photos > img {
    width: 40%;
    margin: 0.25rem auto;
  }
  @media (max-width: 1000px) {
    .container {
      max-width: 70ch;
    }
  }
  @media (max-width: 850px) {
    .container {
      max-width: 60ch;
    }
  }
  @media (max-width: 750px) {
    .container {
      max-width: 55ch;
    }
    .photos {
      flex-direction: column;
      height: 100%;
      width: 100%;
    }
    .photos > img {
      width: 90%;
      margin: 0.25rem auto;
    }
  }
  @media (max-width: 600px) {
    .container {
      max-width: 45ch;
    }
  }
  @media (max-width: 500px) {
    .container {
      max-width: 35ch;
    }
  }
  @media (max-width: 400px) {
    .container {
      max-width: 30ch;
    }
  }
</style>
