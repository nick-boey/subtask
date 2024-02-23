<script lang="ts">
	import { IconSettings } from '@tabler/icons-svelte';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	import { data } from '$lib/store/Data';
	import { state } from '$lib/store/State';

	const settingsModalComponent: ModalComponent = { ref: Settings };

	const settingsModal: ModalSettings = {
		type: 'component',
		component: settingsModalComponent
	};

	const modalStore = getModalStore();

	import Settings from '$lib/components/Settings.svelte';

	function settingsButtonClick() {
		modalStore.trigger(settingsModal);
	}

	function setSelectedRole(roleIndex: number) {
		state.set({ selectedRole: roleIndex });
		console.log($state.selectedRole);
	}
</script>

<div id="sidebar-left" class="flex flex-col justify-between h-full w-[200px] p-4">
	<div class="flex flex-1 flex-col">
		<div class="text-sm mb-4">Dives</div>
		<button class="btn variant-filled-primary mb-4">Shallow</button>
		<button class="btn variant-filled-secondary mb-4">Mid</button>
		<button class="btn variant-filled-tertiary mb-4">Deep</button>

		<div class="text-sm mb-4">Roles</div>
		{#if $data.roles}
			{#each $data.roles as role, index}
				<button class="btn variant-filled-{role.color} mb-4" on:click={() => setSelectedRole(index)}
					>{role.name}</button
				>
			{/each}
		{/if}
	</div>

	<div>
		<button class="btn" on:click={settingsButtonClick}>
			<div class="flex flex-row">
				<IconSettings />
				<div class="ml-2">Settings</div>
			</div>
		</button>
	</div>
</div>
