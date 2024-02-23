<script lang="ts">
	import {
		IconChevronRight,
		IconMail,
		IconCalendarDue,
		IconCircleCheck,
		IconCircleCheckFilled
	} from '@tabler/icons-svelte';
	import { slide } from 'svelte/transition';
	import type { Task } from '$lib/store/Data';

	export let task: Task;
	let expanded = true;

	function completeTask() {
		task.completed = task.completed != '' ? '' : new Date().toISOString();
	}

	// Implement state coming from master store objects
</script>

<div class="flex flex-col">
	<div class="flex flex-row">
		{#if task.subtasks.length > 0}
			<button
				class="btn btn-icon"
				style="transform: rotate({expanded ? 90 : 0}deg); transition: transform 0.1s;"
				on:click={() => {
					expanded = !expanded;
				}}><IconChevronRight /></button
			>
		{:else}
			<div class="w-[43px]" />
		{/if}

		<!-- Implement task completion functionality-->
		<button class="btn btn-icon" on:click={completeTask}>
			{#if task.completed != ''}<IconCircleCheckFilled />
			{:else}<IconCircleCheck />
			{/if}
		</button>

		<!-- Input -->
		<div class="flex flex-1">
			<input
				type="text"
				class="appearance-none w-full border-0 border-b border-transparent
				bg-transparent focus:ring-0 focus:border-rose-400 focus:border-solid {task.completed != ''
					? 'line-through'
					: ''}"
				bind:value={task.name}
				placeholder="Task"
			/>
		</div>

		<!-- Buttons -->
		<div class="justify-right w-auto">
			<button class="btn btn-icon"><IconMail /></button>
			<button class="btn btn-icon"><IconCalendarDue /></button>
		</div>
	</div>

	<!-- Subtasks -->
	{#if task.subtasks.length > 0}
		{#if expanded}
			<div class="ml-5 border-l border-surface-400" transition:slide>
				{#each task.subtasks as subtask}
					<svelte:self bind:task={subtask} />
				{/each}
			</div>
		{/if}
	{/if}
</div>
