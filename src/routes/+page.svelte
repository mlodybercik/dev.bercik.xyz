<script lang="ts">
	import Lsemployers from '$lib/commands/lsemployers.svelte';
	import Neofetch from '$lib/commands/neofetch.svelte';
</script>

{#snippet prompt(command: string)}
	<div class="lg:w-full">
		<p class="pb-1" aria-hidden="true">
			<span class="g">dev.bercik.xyz@froggy</span> <span class="b">~ $</span>
			{command}
		</p>
	</div>
{/snippet}

<div class="flex h-full w-full flex-col items-center justify-center">
	{@render prompt('neofetch')}
	<Neofetch />
	{@render prompt('lsemployers')}
	<Lsemployers />
</div>

<style>
</style>
