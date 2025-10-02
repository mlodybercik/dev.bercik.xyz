<script lang="ts">
	const { text }: { text: 'Academic' | 'Private' | 'Deprecated' } = $props();
	const colors = {
		Private: '--color-red-800',
		Academic: '--color-green-800',
		Deprecated: '--color-yellow-800'
	};
</script>

<div class="ribbon transform-bottom-right font-bold" style:background-color={`var(${colors[text]})`}>
	{text}
</div>

<style>
	.ribbon {
		color: var(--color-white);
		position: absolute;
		padding: 0;
		margin-left: auto;
		margin-right: auto;
		top: 2.5em;
		right: 2.5em;
		z-index: 1;
		transform-origin: 50% 50%;
		transform: translateX(50%) translateY(-50%) rotate(45deg);
	}
	.ribbon:before,
	.ribbon:after {
		content: '';
		background-color: inherit;
		z-index: -1;
		right: -0.5em;
		position: absolute;
		width: 10em;
		height: 100%;
	}
	.ribbon:before {
		left: -0.5em;
	}
</style>
