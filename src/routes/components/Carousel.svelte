<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	let elemCarousel: HTMLDivElement;
	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}
	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}
	const vitalEaseReviews: Array<{ name: string; review: string }> = [
		{
			name: 'John Doe',
			review:
				'VitalEase has been a lifesaver for my elderly parents. They were struggling to find doctors who could meet their specific needs, but VitalEase was able to connect them with the perfect doctors in no time. I highly recommend VitalEase to anyone who is looking for a convenient and reliable way to find doctors for their elderly loved ones.'
		},
		{
			name: 'Jane Smith',
			review:
				'I was very impressed with the service that I received from VitalEase. They were very helpful and accommodating, and they made sure to find a doctor who was a good fit for my needs. I would definitely recommend VitalEase to anyone who is looking for a new doctor.'
		},
		{
			name: 'Michael Jones',
			review:
				'I am so grateful for VitalEase for helping me to find a doctor who could provide me with the care that I needed. I am now able to manage my condition more effectively and live a healthier and happier life.'
		}
	];
</script>

<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-[#828CAE]/20">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled-primary" on:click={carouselLeft}>
		<span class=" text-white text 2xl">&larr;</span>
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-hidden">
		{#each vitalEaseReviews as review}
			<div class="snap-start shrink-0 card py-20 w-full text-center px-[10%]  grid grid-rows-[60%_auto] gap-8 bg-transparent text-white">
				<section>{review.review}</section>
				<div class="flex justify-center">
					<div class="flex">
						<Avatar width="w-14" initials={review.name} background="bg-primary-500" fill="bg-secondary-500"/><span class="p-4">{review.name}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled-primary" on:click={carouselRight}>
		<span class=" text-white text 2xl">&rarr;</span>
	</button>
</div>
