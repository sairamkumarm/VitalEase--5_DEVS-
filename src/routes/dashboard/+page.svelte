<script>
	import { Avatar, ProgressRadial } from '@skeletonlabs/skeleton';

	let dailyTasks = [
		{
			title: 'Take morning medications as prescribed by the doctor.',
			completed: false
		},
		{
			title: 'Prepare and enjoy a healthy breakfast.',
			completed: false
		},
		{
			title: 'Complete prescribed physiotherapy exercises or stretches.',
			completed: true
		},
		{
			title: 'Take midday medications as prescribed.',
			completed: false
		},
		{
			title: "Prepare for and attend any scheduled doctor's appointments.",
			completed: false
		},
		{
			title: 'Prepare and enjoy a balanced lunch.',
			completed: true
		},
		{
			title: 'Take evening medications as prescribed by the doctor.',
			completed: false
		}
	];
	$: completed = dailyTasks.filter((task) => task.completed === true).length;
	$: percentCompleted = (completed / dailyTasks.length) * 100;
	const messagesForPercentCompleted = [
		{ percent: 0, message: "You haven't completed any tasks today. Keep going!" },
		{ percent: 25, message: "You're making progress with your tasks. Keep it up!" },
		{ percent: 50, message: "You're halfway through your tasks. Keep pushing!" },
		{ percent: 75, message: "You're doing great! Keep going!" },
		{ percent: 100, message: "Congratulations! You've completed all your tasks for the day!" }
	];
	$: closestPercentMilestone = messagesForPercentCompleted
		.filter((milestone) => milestone.percent <= percentCompleted)
		.pop();

	$: message = closestPercentMilestone
		? closestPercentMilestone.message
		: 'Keep going and stay on track.';
	const doctors = [
		{
			name: 'Dr. Sarah Anderson',
			specialization: 'Cardiology',
			location: 'New York City'
		},
		{
			name: 'Dr. Michael Johnson',
			specialization: 'Orthopedics',
			location: 'Los Angeles'
		},
		{
			name: 'Dr. Emily Patel',
			specialization: 'Gynecology',
			location: 'Chicago'
		},
		{
			name: 'Dr. Robert Davis',
			specialization: 'Dermatology',
			location: 'Miami'
		},
		{
			name: 'Dr. Lisa Wilson',
			specialization: 'Pediatrics',
			location: 'Houston'
		}
	];
	const medicines = [
		{
			name: 'Aspirin',
			usageTimeLeft: '2 days'
		},
		{
			name: 'Lisinopril',
			usageTimeLeft: '1 week'
		},
		{
			name: 'Metformin',
			usageTimeLeft: '3 days'
		},
		{
			name: 'Simvastatin',
			usageTimeLeft: '5 days'
		},
		{
			name: 'Warfarin',
			usageTimeLeft: '4 days'
		}
	];
	const Svgdata = [
		{ title: 'Reliable', src: 'assets/lock.svg' },
		{ title: 'Secure', src: 'assets/circlecheck.svg' },
		{ title: 'Affordable', src: 'assets/wallet.svg' }
	];
</script>

<main>
	<div class="hero-container h-screen pt-20 pr-6 pl-6 pb-6">
		<div class="hero h-full text-white grid grid-cols-[60%_auto] gap-5">
			<div class="task-table-container card flex flex-col p-5 m-h-fit">
				<div class="h1 text-primary-500 font-extrabold">Today's Tasks</div>
				<div class="h3 text-tertiary-500 font-bold">
					You completed {completed}/{dailyTasks.length} tasks today
				</div>
				<div class="tasklist mt-2 flex flex-col gap-2">
					{#each dailyTasks as task}
						<label
							class="flex items-center bg-[#828CAE]/20 p-2 min-w-fit max-w-full rounded-lg text-secondary-500 text-md gap-3"
						>
							<input class="checkbox" type="checkbox" bind:checked={task.completed} />
							<p>{task.title}</p>
						</label>
					{/each}
				</div>
			</div>
			<div class="progress-container flex flex-col gap-5">
				<div class="card p-6 w-full h-full flex items-center justify-center">
					<ProgressRadial
						width="w-52"
						value={percentCompleted}
						stroke={60}
						meter="stroke-primary-500"
						track="stroke-primary-500/30"
						strokeLinecap={'round'}
						font={100}>{completed}/{dailyTasks.length}</ProgressRadial
					>
				</div>
				<div class="card p-2 w-full h-full flex items-center justify-center">
					<section class="font-bold text-lg text-primary-500">{message}</section>
				</div>
			</div>
			<div class="appointments card text-secondary-500">
				<header class="card-header flex items-center justify-between">
					<div class="h2">Upcoming appointments</div>
					<button class="btn variant-filled-secondary">Book new +</button>
				</header>
				<ul class="list p-4">
					{#each doctors as doctor}
						<li>
							<Avatar width="w-16" initials={doctor.name[4]} background="bg-tertiary-500" />
							<span class="h4 flex gap-3"
								><span class="font-bold">{doctor.name}</span><span class=" text-gray-600"
									>{doctor.specialization}, {doctor.location}</span
								></span
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="medicines card text-secondary-500 flex flex-col gap-3">
				<header class="card-header h2">Medicines</header>
				<ul class="list p-4 flex flex-col gap-3">
					{#each medicines as medicine}
						<li>
							<Avatar width="w-12" initials={medicine.name} background="bg-primary-500" />
							<span class="h4 flex gap-3"
								><span class="font-bold">{medicine.name}</span><span class=" text-gray-600"
									>{medicine.usageTimeLeft} left</span
								>
							</span>
						</li>
					{/each}
				</ul>
			</div>
			<div class="graphic col-span-2 p-12 mt-12">
				<div class="graphic-container flex items-center justify-center gap-52" >
					{#each Svgdata as {title, src}}
						<div class="svg-box flex flex-col items-center gap-5">
							<img {src} alt={title}>
							<div class="h3">{title}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="second-container h-screen bg-primary-500" />
</main>

<style>
	.hero-container {
		background: linear-gradient(
			180deg,
			#262c44 12.98%,
			#5b6370 34.35%,
			#bac6c0 60.45%,
			#0fb880 100%
		);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
</style>
