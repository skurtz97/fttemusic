<script>
	import '../normalize.css';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Head from '$lib/components/Head.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<Head />
<Header />
<main>
	{@render children?.()}
</main>
<Footer />

<style>
	:global(main) {
		background-color: var(--background);
		display: flex;
		flex-direction: column;
	}
</style>
