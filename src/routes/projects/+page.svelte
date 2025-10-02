<script lang="ts">
	import ProjectCard from '$lib/projectCard.svelte';
	import projects from '$lib/projects';
</script>

<div class="flex flex-col items-center justify-center">
	<ProjectCard project={projects[0]} />
	<ProjectCard project={projects[1]} />
</div>
