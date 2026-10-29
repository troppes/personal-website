import { error } from '@sveltejs/kit';
import { EXTERNAL_ASSETS_URL } from '$app/env/private';
import { getProjects } from '#lib/backend-requests.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		const response = await getProjects();

		if (!response?.data) {
			throw new Error('Invalid projects data received');
		}

		const projects = response.data.map(
			(
				/** @type {{ id: { toString: () => any; }; title: any; description: any; url: any; picture: string; }} */ post
			) => ({
				id: post.id.toString(),
				title: post.title,
				description: post.description,
				url: post.url,
				pictureUrl: post.picture ? getImageUrl(post.picture) : null
			})
		);

		return { projects };
	} catch (e) {
		console.error('Failed to load projects:', e);
		throw error(500, 'Failed to load projects');
	}
}

/**
 * Constructs the full URL for an image
 * @param {string} imageKey - The image key/path
 * @returns {string} The complete image URL
 */
function getImageUrl(imageKey) {
	return EXTERNAL_ASSETS_URL + imageKey;
}
