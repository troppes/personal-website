import { error } from '@sveltejs/kit';
import { getFooter } from '../../lib/backend-requests.js';
import { sanitizeFooterHtml } from '../../lib/sanitize.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	try {
		const response = await getFooter();

		if (!response?.data) {
			throw new Error('Invalid footer data received');
		}

		const { data } = response;
		return {
			footer: {
				...data,
				left_box: sanitizeFooterHtml(data.left_box),
				middle_box: sanitizeFooterHtml(data.middle_box),
				right_box: sanitizeFooterHtml(data.right_box)
			}
		};
	} catch (e) {
		console.error('Failed to load footer:', e);
		throw error(500, 'Failed to load footer content');
	}
}
