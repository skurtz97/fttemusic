import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { resolve } from "path";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: {
      crawl: true,
      enabled: true,
      default: true,
      onError: "continue"
    },
    vite: {
      resolve: {
        alias: {
          $components: resolve("./src/components"),
          $types: resolve("./src/types"),
          $songs: resolve("./src/routes/songs")
        }
      }
    },
    adapter: adapter()
  },
  extensions: [".svelte", ".svx"],
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: [".svx"],
      layout: {
        songs: resolve("/src/routes/songs/_song.svelte")
      }
    })
  ]
};

export default config;
