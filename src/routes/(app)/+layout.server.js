import { error } from '@sveltejs/kit';
import { getFooter } from '../../lib/backend-requests.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	try {
		const response = await getFooter();

		if (!response?.data) {
			throw new Error('Invalid footer data received');
		}

		return {
			footer: response.data
		};
	} catch (e) {
		console.error('Failed to load footer:', e);
		throw error(500, {
			message: 'Failed to load footer content'
		});
	}
}
