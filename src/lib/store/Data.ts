import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { readTextFile } from '@tauri-apps/api/fs';

interface Data {
  first_name: string;
  last_name: string;
  roles: Array<Role>;
  unfiled_emails: Array<string>;
  settings: Settings;
}

interface Role {
	id: string;
	name: string;
	color: string;
	tasks: Array<Task>;
}

export interface Task {
	id: string;
	name: string;
	due: Array<string>;
	type: string;
	tags: Array<string>;
	completed: string;
	delegated_to: string;
	emails: Array<string>;
	attachments: Array<string>;
	subtasks: Array<Task>;
	notes: string;
}

interface Settings {}

export const data : Writable<Data> = writable({
  first_name: '',
  last_name: '',
  roles: [],
  unfiled_emails: [],
  settings: {}
});

// Load task data from file
// TODO: Link this up to a file path in settings

export async function openFile() {
	const contents = await readTextFile(
		'C:\\Users\\nboey\\Documents\\Code\\subtask\\docs\\example folder\\_data\\data.json'
	);
	data.set(JSON.parse(contents));
}
