<script lang="ts">
	import type { fromJSON } from 'postcss';

	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { IconSettings, IconMenu2 } from '@tabler/icons-svelte';

	import Sidebar from '$lib/components/Sidebar.svelte';
	import Body from '$lib/components/Body.svelte';
	import Settings from '$lib/components/Settings.svelte';

	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

	const settingsModalComponent: ModalComponent = { ref: Settings };

	const settingsModal: ModalSettings = {
		type: 'component',
		component: settingsModalComponent
	};

	const modalStore = getModalStore();

	function settingsButtonClick() {
		modalStore.trigger(settingsModal);
	}

	// Load tasks
</script>

<Modal />

<AppShell>
	<!-- Header -->
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<button class="btn-icon btn-icon-sm variant-ringed"><IconMenu2 /></button>
			</svelte:fragment>
			Subtask
			<svelte:fragment slot="trail">
				<button class="btn-icon btn-icon-sm variant-ringed" on:click={settingsButtonClick}>
					<IconSettings />
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Sidebar -->
	<svelte:fragment slot="sidebarLeft">
		<div class="p-4">
			<Sidebar />
		</div>
	</svelte:fragment>

	<!-- Body -->
	<slot>
		<div class="p-4">
			<Body />
		</div>
	</slot>
</AppShell>
