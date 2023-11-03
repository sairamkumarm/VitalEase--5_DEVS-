<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Paginator } from '@skeletonlabs/skeleton';

	let patientHistory: {
		date: string;
		name: string;
		reason: string;
		address: string;
		status: string;
	}[] = [
		{
			date: '17 - 10 - 23',
			name: 'Dr Angela',
			reason: 'Heart Checkup',
			address: 'Peenya 3rd Stage',
			status: 'Regular Checkup Done'
		},

		{
			date: '25 - 09 - 23',
			name: 'Dr Kosaksi Pasapugazh',
			reason: 'Common Cold',
			address: 'Rajajinagar',
			status: 'Cured'
		},

		{
			date: '11 - 09 - 22',
			name: 'Dr Catherine watson',
			reason: 'Heart Checkup Done',
			address: 'Peenya',
			status: 'Regular Checkup Done'
		},
		{
			date: '17 - 10 - 23',
			name: 'Dr Angela',
			reason: 'Heart Checkup',
			address: 'Peenya 3rd Stage',
			status: 'Regular Checkup Done'
		},

		{
			date: '25 - 09 - 23',
			name: 'Dr David',
			reason: 'Common Cold',
			address: 'Rajajinagar',
			status: 'Cured'
		},

		{
			date: '02 - 07 - 23',
			name: 'Dr Thomas',
			reason: 'Diabetic Checkup',
			address: 'Basaweshwara Nagar',
			status: 'Regular Checkup Done'
		},

		{
			date: '27 - 02 - 23',
			name: 'Dr Victoria',
			reason: 'High Fever',
			address: 'Hebbal',
			status: 'Cured'
		},
		{
			date: '27 - 02 - 23',
			name: 'Dr Cathalien',
			reason: 'High Fever',
			address: 'Hebbal',
			status: 'Cured'
		}
	];

	let paginationSettings = {
		page: 0,
		limit: 5,
		size: patientHistory.length,
		amounts: [1, 2, 5, 10]
	};
	const callerData: { name: string; address: string }[] = [
		{
			name: 'Vanamuthu V',
			address: '123 Elm Street, Springfield, IL 62701, USA'
		},
		{
			name: 'Shashmith S',
			address: '456 Maple Avenue, Toronto, ON M5H 2N2, Canada'
		},
		{
			name: 'Sairamkumar M',
			address: '789 Oak Lane, London W1K 7DD, United Kingdom'
		}
	];
</script>

<div class="w-screen ctinr text-white">
	<div class="w-screen banner relative h-52 bg-secondary-500">
		<div class="fixed top-0 right-0 left-0 bg-secondary-500 h-16 z-10" />
		<div class="Profile-Div">
			<Avatar initials="SK" background="bg-primary-500" width="w-40" padding="10px" />
			<div class="Profile-Inner-Div">
				<h1 class="name">Sampath Kumar , 67</h1>
				<p class="patient-details text-lg">
					No 39, chruch street ,mentoplushalli, Bengaluru-49<br />Phone No: (088) 09998823<br
					/>E-mail: emailaddress@gmail.com<br />Blood Group: AB -ve | Height: 5’ 6” | Weight: 62 Kgs<br
					/>
				</p>
			</div>
		</div>
	</div>
	<div class="h2 text-secondary-500 mt-40 pl-20 p-2 font-bold">Caregivers</div>
	<div class="card ml-10 mr-10 mb-10 bg-primary-500 relative">
		<dl class="list-dl bg-secondary-500 rounded-md m-32 mt-9 absolute">
			{#each callerData as caller}
			<div>
				<span class="badge"
				><Avatar
				width="w-14"
				initials={caller.name}
				background="bg-primary-500"
				fill="bg-secondary-500"
				/></span
				>
				<span class="flex-auto">
					<dt><h3 class="h3 font-bold">{caller.name}</h3></dt>
					<dd>{caller.address}</dd>
				</span>
				<div class="Call-Div">
					<img src="assets/call.svg" class="cursor-pointer" alt="call" />
					<img src="assets/video.svg" class="cursor-pointer" alt="videocall" />
					<img src="assets/message.svg" class="cursor-pointer" alt="videocall" />
				</div>
			</div>
			{/each}
		</dl>
	</div>
	<div class="h2 text-secondary-500  pl-20 font-bold">Appointment history</div>
	<!-- Responsive Container (recommended) -->
	<div class="table-container w-11/12 text-black mt-10 mb-20 ml-16 mr-5">
		<!-- Native Table Element -->
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Date</th>
					<th>Name</th>
					<th>Reason</th>
					<th>Address</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{#each patientHistory as row}
					<tr>
						<td>{row.date}</td>
						<td>{row.name}</td>
						<td>{row.reason}</td>
						<td>{row.address}</td>
						<td>{row.status}</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<div class="paginator mt-6">
			<Paginator
				bind:settings={paginationSettings}
				showFirstLastButtons={false}
				showPreviousNextButtons={true}
				showNumerals
				maxNumerals={2}
			/>
		</div>
	</div>
	<div class="h-8" />
</div>

<style>
	.ctinr {
		background-color: #f0e5e5;
	}
	.name {
		font-size: 48px;
		font-weight: 700;
	}
	.patient-details {
		font-size: 16px;
		font-weight: 500;
		color: black;
	}
	.Profile-Div {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: absolute;
		left: 80px;
		top: 135px;
	}

	.Profile-Inner-Div {
		display: flex;
		flex-direction: column;
		align-items: left;
		padding: 10px 20px;
	}

	.name {
		padding: 20px 0px;
	}

	.banner {
		position: relative;
	}

	.card {
		height: 310px;
		padding-top: 90px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.list-dl {
		width: 95%;
		border-radius: 20px;
	}

	.Call-Div {
		padding: 0px 20px;
	}
	td {
		font-size: xx-large;
	}
</style>
