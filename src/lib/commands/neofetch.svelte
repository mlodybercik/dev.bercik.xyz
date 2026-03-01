<script lang="ts">
	const getTimeUnit = function (singularUnit: string, value: number): string {
		if (value == 0) return '';
		if (value == 1) return `1 ${singularUnit}`;
		return `${value} ${singularUnit}s`;
	};
	const formatTime = function (date: Date): string {
		const years = getTimeUnit('year', date.getFullYear() - 1970);
		const months = getTimeUnit('month', date.getMonth());
		if (years && months) {
			return `${years}, ${months}`;
		} else if (years) {
			return years;
		} else {
			return months;
		}
	};

	const now = new Date().valueOf();

	const rawUptime = new Date(now - new Date(2000, 11, 27).valueOf());
	const rawEmployed = new Date(now - new Date(2025, 12, 1).valueOf());

	const uptime = formatTime(rawUptime);
	const employed = formatTime(rawEmployed);

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

<div class="pb-5">
	<div class="flex flex-col lg:flex-row">
		<pre role="img" class="icon" aria-hidden="true">
            .-/+oo####oo+\-.
        `:+##################+:`
      -+########################+-
    .o############################o.
   /################################\
  +##################################+
 /####################################\
.######################################.
+######################################+
o######################################o
o######################################o
+######################################+
.######################################.
 \####################################/
  +##################################+
   \################################/
    .o############################o.
      -+########################+-
        `:+##################+:`
            .-\+oo####oo+/-.</pre>
		<div class="ml-5 flex flex-col items-center justify-center">
			<ul>
				<li><span class="font-bold">Przemysław Barcicki</span></li>
				<li>------------</li>
				<li><span class="r">Country:</span> <span class="font-bold">Poland</span></li>
				<li><span class="r">City:</span> <span class="font-bold">Wrocław</span></li>
				<li><span class="r">Uptime:</span> <span class="font-bold">{uptime}</span></li>
				<li><span class="r">Trade:</span> <span class="font-bold">Information Technology</span></li>
				<li><span class="r">Specialization:</span> <span class="font-bold">Linux, Infrastructure</span></li>
				<li><span class="r">Education:</span> <span class="font-bold">MSc's, BSc's, Technical</span></li>
				<li><span class="r">Languages:</span> <span class="font-bold">Python, TypeScript, Go</span></li>
				<li><span class="r">Dream job:</span> <span class="font-bold">Backend DevOps</span></li>
				<li>
					<span class="r">Status:</span>
					<span class="font-bold">Software Engineer</span>
				</li>
				<li>
					<span class="r">Employer:</span>
					<span class="font-bold"><a class="underline" href="https://antmicro.com/">Antmicro</a> for {employed}</span>
				</li>
			</ul>
			<div class="break-on-7 w-full pt-2">
				{#each stripes as color}
					{@render block(color)}
				{/each}
			</div>
		</div>
	</div>
</div>

<!-- TODO: scale font to always fit width -->
<style>
	pre {
		line-height: 1.25em;
		font-weight: 900;
		user-select: none;
	}

	.break-on-7 > div:nth-child(9) {
		float: none;
	}

	.icon {
		background: url('https://gravatar.com/avatar/02cea60e4f4cf5091ad1bdcd15febec96f9645deda271444e77173844a08d456?size=512px')
			no-repeat;
		color: transparent;
		background-clip: text;
		background-position: center;
		background-size: cover;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		border-radius: 50%;
	}

	.icon:hover {
		background-clip: unset;
	}
</style>
