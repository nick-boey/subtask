<script lang="ts">
	import Task from './Task.svelte';

	import { IconEdit, IconCheck } from '@tabler/icons-svelte';

	import { data } from '$lib/store/Data';
	import { state } from '$lib/store/State';

	let editingRoleHeading = false;
</script>

<div class="p-4">
	{#if $data.roles.length > 0}
		{#if editingRoleHeading}
			<input
				type="text"
				class="appearance-none border-solid border-0 border-b bg-transparent focus:ring-0 text-3xl mt-2 ml-1"
				bind:value={$data.roles[$state.selectedRole].name}
			/>
			<button on:click={() => (editingRoleHeading = false)}>
				<IconCheck />
			</button>
		{:else}
			<div class="flex flex-row">
				<h1 class="text-3xl m-4">
					{$data.roles[$state.selectedRole].name}
				</h1>
				<button on:click={() => (editingRoleHeading = true)}>
					<IconEdit />
				</button>
			</div>
		{/if}

		{#each $data.roles[$state.selectedRole].tasks as dataTask}
			<Task bind:task={dataTask} />
		{/each}
	{/if}
</div>
