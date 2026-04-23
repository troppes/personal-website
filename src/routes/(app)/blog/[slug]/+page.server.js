import { error } from '@sveltejs/kit';
import { getBlogPost } from '$lib/backend-requests.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	try {
		const postRes = await getBlogPost(params.slug);

		if (!postRes?.data) {
			throw error(404, 'Post not found');
		}

		return {
			post: postRes.data
		};
	} catch (e) {
		console.error('Failed to load blog post:', e);
		throw error(500, 'Failed to load blog post');
	}
}
