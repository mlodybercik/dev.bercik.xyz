<script lang="ts">
	import Badge from './badge.svelte';
	import type { Project } from './projects';
	import Ribbon from './ribbon.svelte';

	const { project }: { project: Project } = $props();
	const buttons = [...project.urls, { name: 'See more', url: `/projects/${project.name.toLowerCase()}` }];
</script>

<!-- md:w-xl lg:w-4xl -->
{#snippet urlButton({ url, name }: { url: string; name: string })}
	<a href={url}
		><div class="text-normal m-1 rounded-md bg-white p-1 font-normal whitespace-nowrap text-black">{name}</div></a
	>
{/snippet}

<article class="relative w-7/9 overflow-hidden rounded-lg bg-black font-light ring ring-black-600">
	{#if !!project.type}
		<Ribbon text={project.type} />
	{/if}
	<header class="h-30">
		<img src={project.image} class="relative rounded-t-lg object-contain" alt="Project overview" />
	</header>
	<main class="clip relative rounded-b-lg bg-black-950 p-6 pb-2 font-normal">
		<h1 class="mb-2 text-2xl font-bold text-shadow-black text-shadow-lg lg:text-3xl">{project.name}</h1>
		<p class="text-justify">{project.description}</p>
		{#each project.badges as areas}
			<h2 class="pt-2 text-xl font-bold">{areas.name}</h2>
			{#each areas.icons as badge}
				<Badge {badge} />
			{/each}
		{/each}
		<div class="mt-1 flex flex-row flex-wrap justify-end">
			{#each buttons as urlInfo}
				{@render urlButton(urlInfo)}
			{/each}
		</div>
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
