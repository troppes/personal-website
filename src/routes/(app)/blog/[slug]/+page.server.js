import { getBlogPost } from '$lib/backend-requests.js';

export async function load({ params }) {
	let post = null;

	try {
		post = await getBlogPost(params.slug);
	} catch (e) {
		console.error(e);
	}

	return {
		post: post
	};
}
