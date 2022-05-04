import type { RequestHandler } from "@sveltejs/kit";
import type { SongPageMetadata } from "$types/global";

/** @type {import('@sveltejs/kit').RequestHandler<{}} */
export const get = async () => {
  // import blobs of every song page in src/routes/songs directory
  const blobs = import.meta.glob("../*.svx");
  // make blobs parseable
  const iterable = Object.entries(blobs);

  // songs is a bunch of blobs, when we want to read all the blobs we will have to await them
  let songs = await Promise.all<SongPageMetadata>(
    iterable.map(async ([slug, blob]) => {
      // read metadata from blob and wait
      const { metadata } = await blob();
      // return SongPageMetadata object
      return {
        slug: slug.replace("../", "").replace(".svx", ""),
        image: metadata.image ? metadata.image : "",
        title: metadata.title,
        date: metadata.date,
        next: metadata.next,
        previous: metadata.previous
      };
    })
  );
  // sort songs by date
  const sorted = songs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const names = sorted.map((song) => song.slug);
  console.log(`sending ${sorted.length} songs to client`);
  console.log(`${names.join(", ")}`);
  return {
    body: {
      songs: sorted
    }
  };
};
