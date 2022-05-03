<script lang="ts">
  import Accordion from "$components/accordion.svelte";
  import Container from "$components/container.svelte";
  import Banner from "$components/banner.svelte";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>
<Banner src="/images/about-banner.jpg" alt="About Banner" />
<Container>
  <p>
    A cerulean blue android spins his regretful victory song on a keyboard odyssey from a
    bric-a-brac robot factory to a sunny, magic beach town finale, while riding sonic waves of
    piano, synth and brassy percussion shuffles. <b>ROBOT ODDiTY </b>is the upcoming spring 2022
    Modern soft rock track from <b>Friends To The End</b>. The accompanying edgy music video with a
    psychedelic twist paints the tale of indoctrination and moral discovery by
    <b>Thom Kurtz</b>, the creator behind his
    <b>Friends To The End</b> band project, with a near-death experience in a raging fire at a power
    plant, while living as “wires inside an iron can.”
  </p>
  <p>
    <b>ROBOT ODDiTY</b> is the follow-up to the Youtube music video hit
    <b>Where’d You Put The Baby?</b>, now with over 130K views. This Modern soft rock new wave
    satire of a romantic couple questioning their priorities finds them frantically searching the
    house, while what they find becomes more surreal, such as a vastly oversized baby and visions of
    Abe Lincoln and Ruth Bader Ginsberg. The appropriately frantic, guitar-heavy music and
    accusatory vocals were obviously inspired by David Byrnes’ subversive lyrics and the early days
    of Talking Heads.
  </p>
  <p>
    Kurtz’s trademark creative artistry, propelled by his arsenal of experimental theatre pop
    songwriting, is flavored by such wide ranging influences as Bowie to Steely Dan, Keith Jarrett
    to Duke Ellington, and Todd Rundgren to David Grisman. What <b>Thom Kurtz</b> calls Modern soft rock
    — always including top-of-the-line ensemble instrumentation fused with song-specific, custom-built
    vocals – is a kind of singer-songwriter storyteller fusing various shades of chamber pop, and art
    and prog rock.
  </p>
  <p>
    <b>Friends To The End</b> was first launched to the DSPs like Spotify and Apple Music in August 2020,
    with the debut in audio and music video of Love On The Rocks (Shipwrecked) featuring vocal melancholy
    by young Julia Courtney, against a dark and dreary sky shipwrecked on the rocks of another broken
    romance. A shimmering, Chopin-inspired piano riff brightens the Modern soft rock ballad with a hopeful
    glimmer as Julia surveys other ships along the bay. Viewership for the Friends To The End music channel
    tops 2,000 subscribers with more than 700K total views, for three more recent single releases through
    2021, and also including promo and demo videos released since 2016, such as “Ameri-Cat Idol.”
  </p>
  <p>
    The lovely Susanna Lee sings the breezy Pacific coast vocals for the hopeful anthem, <b
      >A World Of Troubles</b
    >
    featuring peppy “Penny Lane”-meets-Haydn trumpet fanfares and a lyrical study of everlasting parts
    of life and the earth, such as air in the sky, salts in the sea, and the wind on the ocean. Kurtz
    mixes the inner voice of his lyrics with imaginative visions of emotional illustrations, unleashing
    the deep power of wisdoms of ‘humanhood’ and punctuated by musical touches of whimsy, joy and sometimes
    sorrow, where the sound and vision collide. What’s specially poignant is how each song is a destination
    on life’s journey, as well as a journey through the
    <b> Friends To The End </b> song catalog.
    <b>Thom Kurtz</b> produced roughly two dozen song masters over two and a half years using his background
    in literature, art and film as a guide to the musical arrangements and collaboration with over three
    dozen session musicians.
  </p>
  <p>
    Says Kurtz, “<i
      ><b>Friends To The End</b> sounds like a group of people, but it’s really a group of songs – and
      each song is one big step in my life.”</i
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
</Container>

<style>
  .container-photos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
  }
  .photos {
    margin-top: 2rem;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
