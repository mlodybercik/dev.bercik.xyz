<script lang="ts">
	import Badge from './badge.svelte';
	import type { Icon as IconType, Project } from './projects';
	import Ribbon from './ribbon.svelte';

	const { project }: { project: Project } = $props();
	// const buttons = [...project.urls, { name: 'See more', url: `/projects/${project.name.toLowerCase()}` }];
	const buttons = project.urls;
</script>

<!-- md:w-xl lg:w-4xl -->
{#snippet urlButton({ url, name, icon: Icon }: { url: string; name: string; icon: IconType })}
	<a href={url} target="_blank">
		<div
			class="text-normal m-1 flex items-center rounded-md bg-black-800 px-2 py-1 font-normal whitespace-nowrap text-white underline"
		>
			<Icon class="pr-1" />
			<span>{name}</span>
		</div>
	</a>
{/snippet}

<article class="relative w-fit overflow-hidden rounded-lg bg-black font-light ring ring-black-600 sm:w-140">
	{#if !!project.type}
		<Ribbon text={project.type} />
	{/if}
	<header class="flex h-30 justify-center">
		<div>
			<img src={project.image} loading="lazy" class="relative rounded-t-lg object-contain" alt="Project overview" />
		</div>
	</header>
	<main class="clip relative rounded-b-lg bg-black-950 p-6 pb-2 font-normal">
		<h1 class="mb-2 text-3xl font-bold text-shadow-black text-shadow-lg">{project.name}</h1>
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
