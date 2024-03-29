import { env } from '$env/dynamic/private';
import { getPhotos, getTags } from '$lib/backend-requests.js';

export async function load() {
	let photos = null;
	let tags = null;
	try {
		photos = await getPhotos();
		photos = photos.data.map((post) => ({
			id: post.id.toString(),
			description: post.description,
			tags: post.tags.map((e) => e.gallery_tags_id),
			alt: post.alt,
			photoUrl: getImageUrl(post.photo)
		}));
	} catch (e) {
		console.error(e);
	}

	try {
		tags = await getTags();
		tags = tags.data.map((tag) => ({
			id: tag.id.toString(),
			tag: tag.tag,
			timesUsed: Object.keys(tag.gallery).length
		}));

		tags.sort((a, b) => {
			if (a.timesUsed > b.timesUsed) return -1;
			if (a.timesUsed < b.timesUsed) return 1;
			return 0;
		});
	} catch (e) {
		console.error(e);
	}

	return {
		galleryPhotos: photos,
		tags: tags,
		licenseKey: env.LIGHTGALLERY_KEY,
		url: env.URL
	};
}

function getImageUrl(imageKey) {
	return env.EXTERNAL_ASSETS_URL + imageKey;
}
