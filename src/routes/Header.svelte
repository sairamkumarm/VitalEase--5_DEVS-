<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="header-container fixed top-0 right-0 left-0 bg-[#585858]/20 h-16 z-50">
	<div class="header-content flex items-center justify-between p-2 pl-2">
		<div class="title-container">
			<button class="btn h3 text-white">VitalEase</button>
		</div>
		<div class="action-container text-white flex justify-between items-center gap-5">
			<a href="/" class="btn">Home</a>
			<a href="/dashboard" class="btn">Dashboard</a>
			<a href="/about" class="btn">About</a>
			<a href="/emergency" class="btn variant-filled-error">Emergency</a>
			<a href="/profile">
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
	