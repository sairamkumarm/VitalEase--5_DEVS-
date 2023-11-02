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
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
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
<Footer />
