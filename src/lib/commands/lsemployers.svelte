<script lang="ts">
</script>

<div class="w-full min-w-0 overflow-x-auto overflow-y-hidden">
	<div class="mx-auto w-max">
		<p class="mb-2 italic">lsemployers: warning, start-end times may overlap</p>
		<table class="text-left">
			<thead>
				<tr>
					<th>EID</th>
					<th>NAME</th>
					<th>START</th>
					<th>END</th>
					<th>FUNCTION</th>
					<th>TOOLS</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>00:00.00</td>
					<td>iConnect Cork</td>
					<td>MAR 2019</td>
					<td>APR 2019</td>
					<td>Repair Technician</td>
					<td>Manual</td>
				</tr>
				<tr>
					<td>01:00.00</td>
					<td>blinking.life</td>
					<td>JAN 2020</td>
					<td>SEP 2023</td>
					<td>SysOps/DevOps</td>
					<td>Django, Plesk, CentOS, Zabbix</td>
				</tr>
				<tr>
					<td>01:01.00</td>
					<td>Responsiblee</td>
					<td>JUL 2022</td>
					<td>DEC 2022</td>
					<td>Backend Developer</td>
					<td>Django, AWS, PostgreSQL</td>
				</tr>
				<tr>
					<td>02:00.00</td>
					<td>Antmicro</td>
					<td>DEC 2025</td>
					<td>-</td>
					<td>Software Engineer</td>
					<td>Linux, Go, Infrastructure, Python</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style>
	td {
		margin-right: 0.5em;
		margin-left: 0.5em;
	}

	tr :first-child {
		padding-left: 0;
	}

	tr {
		vertical-align: top;
		text-wrap-mode: nowrap;
	}

	tr :last-child {
		padding-right: 0;
		max-width: 17em;
		text-wrap-mode: wrap;
	}

	tr :nth-child(1),
	tr :nth-child(3) {
		text-align: right;
	}

	th,
	td {
		padding-left: 0.5em;
		padding-right: 0.5em;
	}

	table {
		line-height: 1em;
		border-collapse: separate;
		border-spacing: 0 0.25em;
	}

	.hide-scroll {
		scrollbar-width: 0;
		-ms-overflow-style: none;
	}

	.hide-scroll::-webkit-scrollbar {
		display: none;
	}
</style>
