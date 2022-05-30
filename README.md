# Friends To The End Music Website

## Project Structure
We are using SvelteKit for this website. SvelteKit has a file-based routing system. Every page is a file, and they are all under src/routes.

* src/routes: contains all the pages in the website. Index corresponds to the '/' route/page, all other pages routes are just what the file is named. So the playlists page would be a file src/routes/playlists.svelte and it would be located at friendstotheend.net/playlists.
* Directories inside of src/routes create subtrees of pages. So the src/routes/songs contains all the songs. An index file at the root of a directory
indicates the '/' route at the end of the directories above it. So, src/routes/songs/index.svelte would be located at the url friendstothend.net/songs
and src/routes/songs/a-world-of-troubles.svx would be located at the url friendstotheend.net/songs/a-world-of-troubles.svx.

## Environment Setup
### git
1. Install the latest version of git. A prebuilt windows version is available [here](https://git-scm.com/download/win).
2. Add git to the path if it isn't automatically added, and verify the install with `git --version`

### node, npm, pnpm, and svelte
1. Install the latest version of node and npm (not LTS).  Prebuilt binaries are available  [here](https://nodejs.org/en/download/current/). 
2. Make sure node and npm are added to PATH. To verify, run `node -v` and `npm -v`. 
3. Install pnpm with `npm install -g pnpm`.
4. Verify pnpm is installed and on the PATH with `pnpm -v`.

### vscode
1. Download and install visual studio code.
2. Install the [svelte extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). 
3. Install the [prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## Development
Clone the repository `git clone https://github.com/skurtz97/fttemusic`, navigate into the directory that was created, and run `pnpm install`. When the install is completed, run `pnpm run dev` to start a development server on port 3000.

## Deployment

Just push to the main branch and it will be deployed automatically. `git push -u origin main` or use the vscode integration I set up.
