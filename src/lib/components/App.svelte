<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';

	import Sidebar from '$lib/components/Sidebar.svelte';
	import Body from '$lib/components/Body.svelte';
	import Header from '$lib/components/Header.svelte';

	import { data, readData } from '$lib/store/Data';
	import { appSettings, readAppSettingsFile } from '$lib/store/AppSettings';

	readAppSettingsFile();
	readData();
</script>

<AppShell>
	<!-- Header -->
	<svelte:fragment slot="header">
		<Header />
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
