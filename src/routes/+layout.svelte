<script lang="ts">
	import { page } from '$app/state';

	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen w-full justify-center">
	<div class="flex w-95 flex-col md:w-xl lg:w-4xl">
		<header>
			<div class="flex justify-center">
				<nav class="py-2">
					<a class="px-2" href="/" aria-current={page.url.pathname === '/'}>whoami</a>
					<a class="px-2" href="/projects" aria-current={page.url.pathname === '/projects'}>Projects</a>
					<a class="px-2" href="/hire" aria-current={page.url.pathname === '/hire'}>Hire me</a>
				</nav>
			</div>
		</header>
		<main class="grow">
			{@render children?.()}
		</main>
		<footer class="grey-100 mt-1 text-xs font-thin">
			Seen an issue? Submit it <a href="https://github.com/mlodybercik/dev.bercik.xyz">here</a>
		</footer>
	</div>
</div>

<style>
	nav > a[aria-current='true'] {
		text-decoration: underline;
	}
</style>
