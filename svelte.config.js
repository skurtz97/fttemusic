import vercel from "@sveltejs/adapter-vercel";
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
          $components: resolve("./src/lib/components"),
          $songs: resolve("./src/routes/songs"),
          $icons: resolve("./src/lib/components/icons"),
          $utils: resolve("./src/utils"),
          $styles: resolve("./src/styles"),
          $util: resolve("./src/util"),
          $src: resolve("./src")
        }
      }
    },
    adapter: vercel()
  },
  extensions: [".svelte", ".svx"],
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: [".svx"],
      layout: {
        songs: resolve("./src/routes/songs/_song.svelte")
      }
    })
  ]
};

export default config;
