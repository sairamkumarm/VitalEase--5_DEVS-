<script lang="ts">
	import '../app.postcss';
	import { fly } from 'svelte/transition';

	export let data;
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { cubicInOut } from 'svelte/easing';
	import Chatbot from './Chatbot.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let botActive: boolean = false;

	const handleClick = (): void => {
		botActive = !botActive;
		console.log(botActive);
	};
</script>

<Header />{#key data.url}
	<div
		in:fly={{ y: 200, duration: 300, delay: 299, easing: cubicInOut }}
		out:fly={{ y: -200, duration: 300, easing: cubicInOut }}
		class="w-screen"
	>
		<slot />
	</div>
{/key}
{#if botActive}
	<Chatbot />
{/if}
<!-- svelte-ignore a11y-img-redundant-alt -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="bot" on:click={handleClick}>
	<img
		src="assets/chatbot.svg"
		class="fixed -bottom-7 -right-5 scale-[0.75] cursor-pointer"
		alt="chatbot image"
	/>
</div>
<Footer />
