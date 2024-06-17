import type { Writable } from 'svelte/store';
import { writable, get } from 'svelte/store';
import { readTextFile, writeTextFile, exists, BaseDirectory } from '@tauri-apps/api/fs';

interface AppSettings {
	file_path: string;
}

export const appSettings: Writable<AppSettings> = writable({
	file_path: ''
});

export async function readAppSettingsFile() {
	const file_exists = await exists('config.json', { dir: BaseDirectory.AppConfig });
	let contents = '';
	if (file_exists) {
		contents = await readTextFile('config.json', { dir: BaseDirectory.AppConfig });
	} else {
		contents = JSON.stringify({
			file_path: ''
		});
		await writeTextFile('config.json', JSON.stringify(contents), { dir: BaseDirectory.AppConfig });
	}
  appSettings.set(JSON.parse(contents));
}

export async function writeAppSettingsFile() {
	await writeTextFile('config.json', JSON.stringify(get(appSettings)), {
		dir: BaseDirectory.AppConfig
	});
}