<script lang="ts">
	import Badge from './badge.svelte';
	import type { Project } from './projects';

	const { project }: { project: Project } = $props();
	const buttons = [...project.urls, { name: 'See more', url: `/projects/${project.name.toLowerCase()}` }];
</script>

<!-- md:w-xl lg:w-4xl -->
{#snippet urlButton({ url, name }: { url: string; name: string })}
	<a href={url}><span class="m-1 rounded-md bg-black-600 p-2 text-lg font-bold">{name}</span></a>
{/snippet}

<article class="float-left mb-10 rounded-lg bg-black font-light ring ring-black-600 lg:w-3/5">
	<header class="h-30 lg:h-60">
		<img src={project.image} class="rounded-t-lg" alt="Project overview" />
	</header>
	<main class="clip relative rounded-b-lg bg-black-950 p-5 font-normal">
		<h1 class="mb-2 text-2xl font-bold text-shadow-black text-shadow-lg lg:text-3xl">{project.name}</h1>
		<p class="text-justify">{project.description}</p>
		{#each project.badges as areas}
			<h2 class="pt-2 text-xl font-bold">{areas.name}</h2>
			{#each areas.icons as badge}
				<Badge {badge} />
			{/each}
		{/each}
		<p class="mt-4 text-center">
			{#each buttons as urlInfo}
				{@render urlButton(urlInfo)}
			{/each}
		</p>
	</main>
</article>

<style>
	.clip {
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			var(--color-black-950) 15%,
			var(--color-black-950) 90%
		);
	}
</style>
