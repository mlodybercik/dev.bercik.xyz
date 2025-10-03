<script lang="ts">
	const { text }: { text: 'Academic' | 'Private' | 'Deprecated' } = $props();
	const color = {
		Private: { style: '--color-red-800', description: 'Private project' },
		Academic: { style: '--color-green-800', description: 'Made while in school/university' },
		Deprecated: { style: '--color-yellow-800', description: 'Old and unmaintained project' }
	}[text];
</script>

<div class="ribbon transform-bottom-right font-bold" style:background-color={`var(${color.style})`}>
	<span title={color.description}>{text}</span>
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
