<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Carousel from './components/Carousel.svelte';

	const cardData = [
		{
			src: 'assets/DOC1.jpg',
			title: 'Empathy',
			desc: 'Empathy is a fundamental value for a patient-doctor connection system. It involves understanding and sharing the feelings and concerns of the patient'
		},
		{
			src: 'assets/DOC2.jpg',
			title: 'Transparency',
			desc: 'Transparency in medical interactions is crucial. Patients should have access to understandable information about their condition, treatment options, and outcomes'
		},
		{
			src: 'assets/DOC3.jpg',
			title: 'Privacy',
			desc: 'Protecting the privacy and security of patient data is paramount in a patient-doctor connection system. It ensures that patients can openly and honestly discuss their health'
		}
	];

	const svgSrc = [
		{ src: 'assets/arr.svg', title: 'Lookup at VitalEase' },
		{ src: 'assets/phn.svg', title: 'Schedule appointment' },
		{ src: 'assets/px.svg', title: 'Get Prescribed' }
	];
	const faq = [
		{
			question: 'How does VitalEase help me find the right doctor for my needs?',
			answer:
				'VitalEase provides a user-friendly platform that allows you to search for doctors based on specialization or specific symptoms. You can easily filter and find healthcare providers that match your requirements, ensuring you receive the care that best suits your needs.'
		},
		{
			question: 'Can I search for doctors near my location using VitalEase?',
			answer:
				'Absolutely! VitalEase includes a location-based search feature, so you can find doctors and healthcare facilities in your area. This makes it convenient for you to access medical services close to home.'
		},
		{
			question: 'How does the daily tasks feature work?',
			answer:
				"VitalEase's daily tasks feature is designed to help you manage your healthcare routine. It sends you reminders for appointments, physiotherapy sessions, and medication schedules. You'll receive timely notifications, ensuring you never miss an important healthcare task."
		},
		{
			question: 'Is my personal information secure on VitalEase?',
			answer:
				'Yes, we take your privacy seriously. VitalEase follows strict security protocols and complies with privacy regulations to ensure your personal information is safe and confidential. Your data is protected, so you can use our platform with peace of mind.'
		},
		{
			question: 'How can I get started with VitalEase for my healthcare needs?',
			answer:
				"Getting started with VitalEase is easy. Simply sign up on our platform, create your profile, and start searching for doctors and managing your healthcare tasks. You'll have access to a range of features designed to simplify your healthcare journey and improve your overall well-being."
		}
	];
</script>

<main>
	<div class="hero-container h-screen pt-16 pr-6 pl-6">
		<div class="hero text-white absolute bottom-40 left-28">
			<div class="hero-text-container">
				<div class="hero-title h1  w-96 capitalize">
					A Healthier And More Connected Future For All
				</div>
				<div class="hero-subtitle h4 w-[400px] mb-2">
					Our mission is to enhance accessibility, affordability and overall quality of healthcare
				</div>
				<div class="hero-buttons flex gap-5">
					<a href="#doctor" class="btn variant-ghost-primary">Consult Now</a>
					<a href="#fdoctor" class="btn variant-ghost-secondary">I am a doctor</a>
				</div>
			</div>
		</div>
	</div>
	<div class="doctor-search-container-wrapper flex flex-col items-center mt-40 mb-72 relative">
		<div class="doctor-search-container bg-[#828CAE]/20 p-12 flex flex-col gap-7 rounded-xl">
			<div class="search-filter flex items-center justify-center gap-7">
				<span id="doctor" class=" scroll-mt-[100px]">Find Doctors based on</span><select
					class="select input w-96"
					name="option"
					id="dummy"
				>
					<option value="specilization">specilization</option>
					<option value="symptoms">symptoms</option>
				</select>
			</div>
			<div class="main-search-container flex justify-center">
				<div class="input-group input-group-divider grid-cols-[70%_auto] w-[600px]">
					<input type="text" placeholder="doctors @" />
					<select>
						<option>Bengaluru</option>
						<option>Patna</option>
						<option>Coimbatore</option>
					</select>
				</div>
			</div>
			<div class="card-container flex gap-10">
				{#each cardData as card}
					<div class="card overflow-hidden flex flex-col gap-2 w-80">
						<img src={card.src} alt={card.title} />
						<header class="card-header font-bold text-lg pl-4">{card.title}</header>
						<section class="text-sm pl-4 pr-4 pb-4">{card.desc}</section>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="doctor-join-container-wrapper flex flex-col items-center relative">
		<div
			class="doctor-join-container bg-[#828CAE]/20 p-12 flex flex-col gap-7 rounded-xl w-4/6 max-w-[1000px]"
		>
			<div class="join-content-box flex items-center justify-center gap-7 text-secondary-500">
				<img src="assets/DOC4.jpeg" alt="doctor" class="w-80 h-80 object-cover object-center" />
				<div class="  doctor-join-text flex flex-col gap-5">
					<div id="fdoctor" class="h2 scroll-mt-[200px]">Are you a doctor?</div>
					<div class="text-sm max-w-3xl">
						As a doctor, your expertise and dedication are invaluable to our mission. We encourage
						you to explore the possibilities of becoming a part of our team by visiting our website.
						You'll find detailed information about our values, our commitment to patient privacy and
						data security, and how we champion transparency and informed decision-making in
						healthcare.
					</div>
					<button class="btn variant-filled-secondary w-5/12">Join us</button>
				</div>
			</div>
		</div>
	</div>
	<div class="review-container-wrapper flex flex-col items-center p-12 mt-72 mb-72 relative">
		<div
			class="review-container bg-[#828CAE]/20 flex flex-col gap-8 items-center rounded-xl p-12 max-w-[1200px]"
		>
			<div class="h2 text-white">Our reputation speaks for itself</div>
			<Carousel />
		</div>
	</div>
	<div class="faq-container-wrapper flex flex-col p-12 mt-72 mb-72 items-center">
		<div class="faq-container bg-[#828CAE]/20 flex flex-col gap-8 items-center rounded-xl p-12 max-w-[1200px]">
			<Accordion autocollapse >
				<AccordionItem open >
					<svelte:fragment slot="summary"><p class="font-bold">{faq[0].question}</p></svelte:fragment>
					<svelte:fragment slot="content">{faq[0].answer}</svelte:fragment>
				</AccordionItem>
				{#each faq.slice(1) as item}
					<AccordionItem>
						<svelte:fragment slot="summary"><p class="font-bold">{item.question}</p></svelte:fragment>
						<svelte:fragment slot="content">{item.answer}</svelte:fragment>
					</AccordionItem>
				{/each}
				<!-- ... -->
			</Accordion>
		</div>
	</div>
	<div class="graphic-container-wrapper flex flex-col p-12 mt-72 mb-72 items-center relative">
		<div
			class="graphic-container bg-[#828CAE]/20 flex flex-col gap-8 items-center rounded-xl p-12 text-white"
		>
			<div class="h2">How our process works</div>
			<div class="graphic-container relative p-5 flex gap-64">
				{#each svgSrc as svg}
					<div class="sub-container flex flex-col items-center gap-4">
						<div
							class="svg-container relative flex justify-center items-center w-24 h-24 bg-[#d9d9d9] rounded-3xl"
						>
							<img src={svg.src} alt="" class="absolute" />
						</div>
						<span class=" text-lg">{svg.title}</span>
					</div>
				{/each}
				<img src="assets/Line.svg" class="w-44 absolute top-[50px] left-[200px]" alt=">" />
				<img src="assets/Line.svg" class="w-44 absolute top-[50px] right-[200px]" alt=">" />
			</div>
		</div>
	</div>
</main>

<style>
	.hero-container {
		background: linear-gradient(
				75deg,
				#000 1.37%,
				rgba(0, 0, 0, 0.98) 15.48%,
				rgba(0, 0, 0, 0.91) 39.75%,
				rgba(0, 0, 0, 0.09) 99.99%,
				rgba(0, 0, 0, 0) 100%,
				rgba(0, 0, 0, 0.12) 100%
			),
			url('assets/kaipudi.jpg'), lightgray 50%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.doctor-search-container-wrapper::after {
		content: ' ';
		background-color: #0fb880;
		position: absolute;
		inset: 0;
		z-index: -1;
		transform: skewY(10deg);
	}
	.review-container-wrapper::after {
		content: ' ';
		background-color: #510656;
		position: absolute;
		inset: 0;
		z-index: -1;
		transform: skewY(10deg);
	}
	.graphic-container-wrapper::after {
		content: ' ';
		background-color: #0ea5e9;
		position: absolute;
		inset: 0;
		z-index: -1;
		transform: skewY(10deg);
	}
</style>
