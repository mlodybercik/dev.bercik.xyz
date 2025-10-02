<script lang="ts">
	const uptime = new Date(new Date().valueOf() - new Date(2000, 11, 27).valueOf());
	const years = uptime.getFullYear() - 1970;
	const months = uptime.getMonth() ? `${uptime.getMonth()} months` : '';

	const stripes = [
		// first row
		'bg-black-950',
		'bg-red-500',
		'bg-green-500',
		'bg-yellow-500',
		'bg-blue-500',
		'bg-purple-500',
		'bg-teal-500',
		'bg-black-200',
		'bg-gray-200',

		// second row
		'bg-black-800',
		'bg-red-400',
		'bg-green-400',
		'bg-yellow-400',
		'bg-blue-400',
		'bg-purple-400',
		'bg-teal-400',
		'bg-black-100'
	];
</script>

{#snippet block(color: string)}
	<div class="h-4 w-8 {color} float-left"></div>
{/snippet}

<div class="flex h-full flex-col items-center justify-center">
	<div>
		<p class="pb-1" aria-hidden="true">
			<span class="g">dev.bercik.xyz@froggy</span> <span class="b">~ $</span> neofetch
		</p>
		<div class="flex flex-col lg:flex-row">
			<pre role="img" class="icon pb-5">
            .-/+oo####oo+/-.
        `:+##################+:`
      -+########################+-
    .o############################o.
   /################################/
  +##################################+
 /####################################/
.######################################.
+######################################+
o######################################o
o######################################o
+######################################+
.######################################.
 /####################################/
  +##################################+
   /################################/
    .o############################o.
      -+########################+-
        `:+##################+:`
            .-/+oo####oo+/-.</pre>
			<div class="ml-5 flex flex-col items-center justify-center">
				<ul>
					<li>Przemysław Barcicki</li>
					<li>------------</li>
					<li><span class="r">Country:</span> <span class="font-bold">Poland</span></li>
					<li><span class="r">City:</span> <span class="font-bold">Wrocław</span></li>
					<li><span class="r">Uptime:</span> <span class="font-bold">{years} years, {months}</span></li>
					<li><span class="r">Trade:</span> <span class="font-bold">Information Technology</span></li>
					<li><span class="r">Specialization:</span> <span class="font-bold">Web Applications</span></li>
					<li><span class="r">Education:</span> <span class="font-bold">MSc's, BSc's, Technical</span></li>
					<li><span class="r">Languages:</span> <span class="font-bold">Python, TypeScript, Java</span></li>
					<li><span class="r">Dream job:</span> <span class="font-bold">Backend developer</span></li>
					<!-- TODO: change this -->
					<li><span class="r">Status:</span> <span class="font-bold">Unemployed</span></li>
				</ul>
				<div class="break-on-7 w-full pt-2">
					{#each stripes as color}
						{@render block(color)}
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<!-- TODO: scale font to always fit width -->
<style>
	pre {
		line-height: normal;
		font-weight: 900;
		user-select: none;
	}

	.g {
		color: var(--color-green-500);
	}

	.r {
		color: var(--color-red-400);
	}

	.b {
		color: var(--color-blue-500);
	}

	.break-on-7 > div:nth-child(9) {
		float: none;
	}

	.icon {
		background: url('https://avatars.githubusercontent.com/u/42300497?s=512&v=4') no-repeat;
		background-clip: text;
		background-size: cover;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
