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
		<header class="pt-1 pb-3">
			<div class="flex justify-center text-xl font-medium">
				<nav>
					<a class="px-2" href="/" aria-current={page.url.pathname === '/'}>whoami</a>
					<a class="px-2" href="/projects" aria-current={page.url.pathname.startsWith('/projects')}>Projects</a>
					<a class="px-2" href="/hire" aria-current={page.url.pathname.startsWith('/hire')}>Hire me</a>
				</nav>
			</div>
		</header>
		<main class="grow">
			{@render children?.()}
		</main>
		<footer class="pt-5 text-xs font-thin">
			<p class="text-gray-300">
				Seen an issue? Submit it <a href="https://github.com/mlodybercik/dev.bercik.xyz">here</a>
			</p>
		</footer>
	</div>
</div>

<style>
	nav > a[aria-current='true'] {
		text-decoration: underline;
	}
</style>
