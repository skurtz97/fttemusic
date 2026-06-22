<script>
	import { onMount } from 'svelte';

	let songs = [];

	const songModules = import.meta.glob('/src/routes/songs/*/+page.svx', { eager: true });

	for (const [path, module] of Object.entries(songModules)) {
		const metadata = module.metadata;
		if (metadata) {
			const slug = path.match(/\/songs\/([^/]+)\/\+page\.svx$/)?.[1];
			const imagePath = metadata.image || `/images/songs/${slug}.jpg`;
			songs.push({
				slug,
				title: metadata.title,
				subtitle: metadata.subtitle,
				date: metadata.date,
				image: imagePath,
				feature: metadata.feature
			});
		}
	}

	songs.sort((a, b) => new Date(b.date) - new Date(a.date));
</script>

<svelte:head>
	<title>SONGS Streams &amp; Lyrics | Friends To The End | Modern soft rock</title>
</svelte:head>

<div class="songs-page">
	<div class="container">
		<div class="intro">
			<h1>Modern Soft Rock</h1>
			<h4>Where Sound And Vision Collide</h4>
		</div>

		<div class="grid">
			{#each songs as song}
				<a href="/songs/{song.slug}">
					<img 
						class="song" 
						src={song.image} 
						alt="Picture of {song.title}"
						loading="lazy"
					>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.songs-page {
		min-height: 100vh;
		padding: 2rem 1rem;
		background-color: var(--background);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.intro {
		text-align: center;
		margin-bottom: 2rem;
	}

	.intro h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: var(--text);
	}

	.intro h4 {
		font-size: 1.25rem;
		font-weight: 400;
		margin: 0;
		color: var(--text-muted);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
		gap: 1rem;
	}

	.grid a {
		display: block;
		text-decoration: none;
		border-radius: 4px;
		overflow: hidden;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.grid a:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.song {
		width: 100%;
		height: auto;
		display: block;
		aspect-ratio: 1;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.grid a:hover .song {
		transform: scale(1.02);
	}

	@media (max-width: 600px) {
		.intro h1 {
			font-size: 2rem;
		}

		.intro h4 {
			font-size: 1rem;
		}

		.grid {
			grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
			gap: 0.75rem;
		}
	}

	@media (max-width: 400px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>