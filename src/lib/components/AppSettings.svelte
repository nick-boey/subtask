<script lang="ts">
	import { writeAppSettingsFile, appSettings, readAppSettingsFile } from '$lib/store/AppSettings';

	import { IconFolderOpen } from '@tabler/icons-svelte';

	import { open } from '@tauri-apps/api/dialog';

	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	async function openFolder() {
		const selected = await open({
			multiple: false,
			directory: true
		});

		if (selected != null) {
			if (Array.isArray(selected)) {
				appSettings.set({ ...appSettings, file_path: selected[0] });
			} else {
				appSettings.set({ ...appSettings, file_path: selected });
			}
		}
	}

	function saveAppSettings() {
		writeAppSettingsFile();
		modalStore.close();
	}

	function cancelAppSettings() {
		readAppSettingsFile();
		modalStore.close();
	}
</script>

<div class="card p-4 w-modal shadow-xl space-y-4">
	<h1 class="text-3xl">Settings</h1>
	<label class="label">
		<span>Location</span>
		<div class="input-group input-group-divider grid-cols-[auto_48px]">
			<input
				type="text"
				class="input"
				placeholder="Path to folder"
				bind:value={$appSettings.file_path}
			/>
			<button class="variant-filled-primary w-12" on:click={openFolder}><IconFolderOpen /></button>
		</div>
	</label>
	<!-- TODO: Move the buttons so they're on the right -->
	<div class="justify-self-right">
		<button class="btn variant-filled-primary" on:click={saveAppSettings}>Save</button>
		<button class="btn variant-filled-secondary" on:click={cancelAppSettings}>Cancel</button>
	</div>
</div>
