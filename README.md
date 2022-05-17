# Friends To The End Music Website

## Old Version
[friendstotheend.net](https://friendstotheend.net)

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
