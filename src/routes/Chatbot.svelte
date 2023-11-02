<script lang="ts">
    import { Avatar } from "@skeletonlabs/skeleton";
let currentMessage: string;
let messageFeed = [
	{
		id: 0,
		host: true,
		avatar: 48,
		name: 'VitalEase',
		timestamp: 'Yesterday @ 2:30pm',
		message: 'Hi there 👋,Welcome to VitalCare, how may I help you',
		color: 'variant-soft-primary'
	},
	{
		id: 1,
		host: false,
		avatar: 14,
		name: 'Sampath Kumar',
		timestamp: 'Yesterday @ 2:45pm',
		message: 'How do i check my medications?',
		color: 'variant-soft-primary'
	},
    {
		id: 2,
		host: true,
		avatar: 48,
		name: 'VitalEase',
		timestamp: 'Yesterday @ 2:50pm',
		message: 'To check medications, please navigate to Dashboard and scroll to the medication section',
		color: 'variant-soft-primary'
	},
	{
		id: 3,
		host: false,
		avatar: 14,
		name: 'Sampath Kumar',
		timestamp: 'Yesterday @ 2:51pm',
		message: 'Oh found it! Thanks',
		color: 'variant-soft-primary'
	}
];
					

</script>

<div class="container bg-transparent overflow-hidden card h-96 w-96 fixed bottom-8 right-5 mr-24">
<div class="h-full grid grid-rows-[1fr_auto] gap-1">
	<div class=" p-4 overflow-y-auto">
     
    {#each messageFeed as mssg}
	{#if mssg.id % 2 === 0}
		<div class="grid grid-cols-[auto_1fr] gap-2 mt-3">
			<Avatar initials="VE" width="w-10" background="bg-primary-500"/>
			<div class="card p-2 variant-soft rounded-tl-none space-y-2">
				<header class="flex justify-between items-center">
					<p class="font-bold">{mssg.name}</p>
					<small class="opacity-50">{mssg.timestamp}</small>
				</header>
				<p>{mssg.message}</p>
			</div>
		</div>	
	{:else}
		<div class="grid grid-cols-[1fr_auto] gap-2 mt-3">
			<div class="card p-2 rounded-tr-none space-y-2 {mssg.color}">
				<header class="flex justify-between items-center">
					<p class="font-bold">{mssg.name}</p>
					<small class="opacity-50">{mssg.timestamp}</small>
				</header>
				<p>{mssg.message}</p>
			</div>
			<Avatar src="https://i.pravatar.cc/?img={mssg.avatar}" width="w-10" />
		</div>				
	{/if}
    {/each}
</div>		

	<div class="variant-glass-primary p-4">
        
        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
        	<button class="input-group-shim">+</button>
        	<textarea
        		bind:value={currentMessage}
        		class="bg-transparent border-0 ring-0"
        		name="prompt"
        		id="prompt"
        		placeholder="Write a message..."
        		rows="1"
        	/>
        	<button class="variant-filled-primary">Send</button>
        </div>
					
    </div>
</div>	
</div>

<style>
    .container {
        background-color: #E4E6EE;
        height: 35rem;
        width: 30rem;
    }
</style>