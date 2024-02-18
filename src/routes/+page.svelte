<script lang="ts">
	import type { fromJSON } from 'postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { IconSettings } from '@tabler/icons-svelte';
	import { IconMenu2 } from '@tabler/icons-svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			Subtask
			<svelte:fragment slot="trail"><IconSettings /></svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden lg:block m-4">
			<button class="btn variant-filled">Test skeleton button</button>
		</div>
	</svelte:fragment>

	<slot>
		<h1>Hello world!</h1>
	</slot>
</AppShell>
