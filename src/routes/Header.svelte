<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import Signup from "./Signup.svelte";
	import { autoModeWatcher } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	// import { Router, Route } from 'svelte-navigator';
	import CheckStore from '$lib/stores/CheckStore';					
	import { sineIn } from 'svelte/easing';

	initializeStores();
	let singed: boolean = false
	let currentId: number = 1;
	const modalStore = getModalStore();
	const modalRegistry: Record<string, ModalComponent> = {
		FormModal: {ref: Signup}
	};

	const modal: ModalSettings = {
		type: 'component',
		component: 'FormModal',
	};						
	CheckStore.subscribe(data => {
		singed = data;
	})
	const handleClick = (id:number):void => {
		currentId = id;
		console.log(currentId)
		if($page.route.id === "/"){
			modalStore.trigger(modal);
		}
	}

</script>

<svelte:head>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head>
<Modal components={modalRegistry}/>

<div class="header-container fixed top-0 right-0 left-0 bg-[#585858]/20 h-16 z-50">
	<div class="header-content flex items-center justify-between p-2 pl-2">
		<div class="title-container">
			<button class="btn h3 text-white">VitalEase</button>
		</div>
		<div class="action-container text-white flex justify-between items-center gap-5">
			<a href="#" class="btn" on:click={ () => handleClick(1)}>Home</a>
			<a href="#" class="btn" on:click={() => handleClick(2)}>Dashboard</a>
			<a href="#" class="btn" on:click={() => handleClick(3)}>About</a>
			<a href="#" class="btn variant-filled-error" on:click={() => handleClick(4)}>Emergency</a>
			<a href="#" on:click={() => handleClick(5)}>
                <Avatar
                    initials="SK"
                    width="w-10"
                    cursor="cursor-pointer"
                    background="bg-primary-500"
                    fill="bg-secondary-500"
                />
            </a>
		</div>
	</div>
</div>
	