<script lang="ts">
	import type { fromJSON } from 'postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { IconSettings, IconMenu2 } from '@tabler/icons-svelte';

	import Sidebar from '$lib/components/Sidebar.svelte';
	import Body from '$lib/components/Body.svelte';

	// Load tasks
</script>

<AppShell>
	<!-- Header -->
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<button class="btn-icon btn-icon-sm variant-ringed"><IconMenu2 /></button>
			</svelte:fragment>
			Subtask
			<svelte:fragment slot="trail">
				<button class="btn-icon btn-icon-sm variant-ringed">
					<IconSettings />
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
