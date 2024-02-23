<script lang="ts">
	import { Modal } from '@skeletonlabs/skeleton';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { IconMenu2, IconMail, IconInfoSquare } from '@tabler/icons-svelte';

	import Sidebar from '$lib/components/Sidebar.svelte';
	import Body from '$lib/components/Body.svelte';

	import { initializeStores } from '@skeletonlabs/skeleton';

	import { data, openFile } from '$lib/store/Data';

	initializeStores();

	openFile();
	$: console.log($data);
</script>

<Modal />

<AppShell>
	<!-- Header -->
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<button class="btn-icon btn-icon-sm"><IconMenu2 /></button>
			</svelte:fragment>
			Subtask
			<svelte:fragment slot="trail">
				<button class="btn-icon btn-icon-sm" on:click={openFile}>
					<IconInfoSquare />
				</button>
				<button class="btn-icon btn-icon-sm">
					<IconMail />
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Sidebar -->
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>

	<!-- Body -->
	<slot>
		<Body />
	</slot>
</AppShell>
