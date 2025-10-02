<script lang="ts">
	import ProjectCard from '$lib/projectCard.svelte';
	import projects from '$lib/projects';
</script>

<div class="flex flex-col items-center gap-8">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>
