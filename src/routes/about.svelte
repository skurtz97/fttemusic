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
  <p><b>Coming soon for spring 2023 - Chinese Underground by Friends To The End</b></p>
  <p>
    A cerulean blue android spins his regretful victory song on a keyboard odyssey from a
    bric-a-brac robot factory to a sunny, magic beach town finale, while riding sonic waves of
    piano, synth and brassy percussion shuffles. <b>ROBOT ODDiTY </b>is the summer 2022
    <b>Modern soft rock</b> track from <b>Friends To The End</b>. The accompanying edgy music video
    with a psychedelic twist paints a tale of indoctrination and moral discovery by
    <b>Thom Kurtz</b>, the creator behind his <b>Friends To The End</b> band project, with a near-death
    experience in a raging fire at a power plant, while living as “wires inside an iron can.”
  </p>
  <p>
    <b>ROBOT ODDiTY</b> is the follow-up to the Youtube music video hit
    <b>Where’d You Put The Baby?</b>, now with over 140K views. This <b>Modern soft rock</b> new wave
    satire of a romantic couple questioning their priorities finds them frantically searching the house,
    while what they find becomes msore surreal, such as a vastly oversized baby and visions of Abe Lincoln
    and Ruth Bader Ginsberg. The appropriately frantic, guitar-heavy music and accusatory vocals were
    obviously inspired by David Byrnes’ subversive lyrics and the early days of Talking Heads.
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
    <b>Friends To The End</b> was first launched to the DSPs like Spotify and Apple Music in August
    2020, with the debut in audio and music video of <b>Love On The Rocks (Shipwrecked)</b>
    featuring vocal melancholy by young <b>Julia Courtney</b>, against a dark and dreary sky
    shipwrecked on the rocks of another broken romance. A shimmering, Chopin-inspired piano riff
    brightens the
    <b>Modern soft rock ballad</b> with a hopeful glimmer as Julia surveys other ships along the
    bay. Viewership for the <b>Friends To The End</b> music channel tops 2,200 subscribers with more
    than 1 Million total views, for three more recent single releases through 2021, and also including
    promo and demo videos released since 2016, such as “Ameri-Cat Idol.”
  </p>
  <p>
    The lovely <b>Susanna Lee</b> sings the breezy Pacific coast vocals for the hopeful anthem,
    <b>A World Of Troubles</b>
    featuring peppy “Penny Lane”-meets-Haydn trumpet fanfares and a lyrical study of everlasting parts
    of life and the earth, such as air in the sky, salts in the sea, and the wind on the ocean.
  </p>
  <p>
    Kurtz mixes the inner voice of his lyrics with imaginative visions of emotional illustrations,
    unleashing the deep power of wisdoms of ‘humanhood’ and punctuated by musical touches of whimsy,
    joy and sometimes sorrow, where the sound and vision collide. What’s specially poignant is how
    each song is a destination on life’s journey, as well as a journey through the
    <b> Friends To The End </b> song catalog.
    <b>Thom Kurtz</b> produced roughly two dozen song masters over two and a half years using his background
    in literature, art and film as a guide to the musical arrangements and collaboration with over three
    dozen session musicians.
  </p>

  <p>
    Says Kurtz, “<i
      ><b>Friends To The End</b> sounds like a group of people, but it’s really a group of songs – and
      each song is one giant stepping stone.”</i
    >
    Now establishing <b>Friends To The End</b> as a performing band is Kurtz’s next near term
    challenge, in support of the exciting release of <b>ROBOT ODDiTY</b>, the next enchanting step
    on the path to bring all these friends of his to the public.
  </p>

  <div class="container-photos">
    <div class="photos">
      <img src="/images/about-artist-1.jpg" alt="Thom Kurtz" />
      <img src="/images/about-artist-2.jpg" alt="Thom Kurtz" />
    </div>

    <Accordion title="Photo Credits">
      Photos by Kevin Chin for Northshore Productions, Round Rock, TX
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
