import { env } from '$env/dynamic/private';
import { getBlogMetaData, getBlogPosts, getSocialMedia, getFooter } from '$lib/backend-requests.js';

export async function load() {
	let posts = null;
	let metaData = null;
	let socialMedia = null;
	let footer = null;

	try {
		posts = await getBlogPosts();
		posts = posts.data.map((post) => ({
			id: post.id.toString(),
			title: post.title,
			pictureUrl: getImageUrl(post.image),
			shortDescription: post.short_description,
			dateCreated: new Date(Date.parse(post.date_created)),
			author: `${post.user_created.first_name} ${post.user_created.last_name}`
		}));
	} catch (e) {
		console.error(e);
	}

	try {
		socialMedia = await getSocialMedia();
		socialMedia = socialMedia.data.map((social) => ({
			id: social.id.toString(),
			url: social.url,
			alt: social.alt,
			pictureUrl: getImageUrl(social.image)
		}));
	} catch (e) {
		console.error(e);
	}

	try {
		metaData = await getBlogMetaData();
	} catch (e) {
		console.error(e);
	}

	try {
		footer = await getFooter();
	} catch (e) {
		console.error(e);
	}

	return {
		metadata: metaData,
		posts: posts,
		socialMedia: socialMedia,
		footer: footer
	};
}

function getImageUrl(imageKey) {
	return env.EXTERNAL_ASSETS_URL + imageKey;
}
