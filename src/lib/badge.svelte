<script lang="ts">
	import type { Component } from 'svelte';
	import type { SVGAttributes } from 'svelte/elements';

	const { badge }: { badge: { icon: Component<SVGAttributes<SVGSVGElement>>; name: string } } = $props();
</script>

<div class="m-1 inline-flex items-center justify-center rounded-md bg-black-800 px-2 text-sm font-thin">
	<badge.icon class="inline pr-1" />
	{badge.name}
</div>
