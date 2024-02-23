import { writable } from 'svelte/store';

export const state = writable({
	selectedRole: 0
});
