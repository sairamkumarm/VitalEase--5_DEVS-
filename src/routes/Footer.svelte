<script lang="ts">
	import { stringify } from 'postcss';

	let FooterArray1: string[] = ['About', 'Our Mission', 'Our Story', 'FAQs', 'Careers', 'Blogs'];
	let FooterArray2: string[] = [
		'Emergency Contacts',
		'Pharamacy',
		'Planner',
		'Appointments',
		'Lab Reports'
	];
</script>

<div id="bottom" class="Footer w-screen bg-secondary-500 bottom-0 right-0 left-0">
	<div class="Inner-Footer">
		<div class="Info">
			<div class="info">
				<h2 class="h2 text-white">VitalEase</h2>
				<p class="text-white">
					VitalEase is a leading healthcare company dedicated to patient-centered excellence. With a
					profound commitment to empathy, privacy, and informed decision-making, VitalEase offers a
					compassionate and secure environment for individuals seeking exceptional healthcare. Our
					team's expertise and dedication ensure that patients are actively engaged in their
					healthcare journey, resulting in positive outcomes and a profound impact on their lives.
					VitalEase is not just a healthcare provider; it's a promise of outstanding care,
					transparency, and unwavering respect for patient privacy.
				</p>
			</div>
			<!-- info -->
			<div class="location text-white grid-cols-2">
				<img src="assets/location.svg" alt="location img">
				<p>
					VitalEase Healthcare Solutions 567 Birchwood Avenue, Suite 123 Serenity City, State 78901,
					USA
				</p>
			</div>
			<!-- location -->
		</div>
		<!-- Info -->

		<div>
			<div class="list">
				<div class="details text-white">
					{#each FooterArray1 as item}
						<li>{item}</li>
					{/each}
					<p style="display: flex; text-align: start; padding-left: 5px; padding-top : 20px">
						Follow us :
					</p>
					<div class="Social-media-links">
						<img src="assets/socialmedia.svg" alt="socialMediaLinks" style="cursor: pointer;">
					</div>
				</div>
				<div class="details text-white">
					{#each FooterArray2 as item}
						<li>{item}</li>
					{/each}
					<p style="display: flex; text-align: start; padding-left: 0;">Download App :</p>
					<div class="Socail-media-links">
						<img src="assets/stores.svg" style="cursor: pointer;" alt="downloadLinks">
					</div>
				</div>
			</div>
			<!-- list -->
		</div>
	</div>
	<!-- Inner Footer -->

	<div class="copyright">© Copyright 2023, VitalEase. All rights reserved</div>
</div>

<style>
	.info {
		padding: 10px;
	}
	h2 {
		margin: 30px;
		padding-bottom: 30px;
	}
	p {
		margin: 10px;
		padding: 20px;
		max-width: 650px;
	}

	.Info {
		width: 50vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 60px;
		border: none;
		border-right: 1px white solid;
		margin-right: 0%;
	}

	.Footer {
		display: grid;
		grid-template-rows: 1fr 25px;
		justify-content: center;
		align-content: center;
	}
	.details {
		text-align: center;
	}
	.list {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}

	li {
		margin: 15px;
	}
	.copyright {
		color: gray;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 10px 0px;
	}

	.Inner-Footer {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	.location {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.location > p {
		max-width: 500px;
	}

	.Social-media-links {
		padding-left: 20px;
		padding-top: 0px;
	}
</style>
