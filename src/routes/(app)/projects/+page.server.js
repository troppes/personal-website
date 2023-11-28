import { env } from '$env/dynamic/private';
import { getProjects } from '$lib/backend-requests.js';

export async function load() {
	let projects = null;

	try {
		projects = await getProjects();

		projects = projects.data.map((post) => ({
			id: post.id.toString(),
			title: post.title,
			description: post.description,
			url: post.url,
			pictureUrl: post.picture ? getImageUrl(post.picture) : null
		}));
	} catch (e) {
		console.error(e);
	}

	return {
		projects: projects
	};
}

function getImageUrl(imageKey) {
	return env.EXTERNAL_ASSETS_URL + imageKey;
}
