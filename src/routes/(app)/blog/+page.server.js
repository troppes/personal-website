import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { getBlogMetaData, getBlogPosts, getSocialMedia, getFooter } from '$lib/backend-requests.js';

/** @typedef {import('./$types').PageServerLoad} Load */

export async function load() {
	try {
		const [postsRes, metaDataRes, socialMediaRes, footerRes] = await Promise.all([
			getBlogPosts(),
			getBlogMetaData(),
			getSocialMedia(),
			getFooter()
		]);

		if (!postsRes?.data || !metaDataRes?.data || !socialMediaRes?.data || !footerRes?.data) {
			throw new Error('Failed to fetch required data');
		}

		const posts = postsRes.data.map(
			(
				/** @type {{ id: { toString: () => any; }; title: any; image: string; short_description: any; date_created: string; user_created: { first_name: any; last_name: any; }; }} */ post
			) => ({
				id: post.id.toString(),
				title: post.title,
				pictureUrl: getImageUrl(post.image),
				shortDescription: post.short_description,
				dateCreated: new Date(Date.parse(post.date_created)),
				author: `${post.user_created.first_name} ${post.user_created.last_name}`
			})
		);

		const socialMedia = socialMediaRes.data.map(
			(
				/** @type {{ id: { toString: () => any; }; url: any; alt: any; image: string; }} */ social
			) => ({
				id: social.id.toString(),
				url: social.url,
				alt: social.alt,
				pictureUrl: getImageUrl(social.image)
			})
		);

		return {
			metadata: metaDataRes.data,
			posts,
			socialMedia,
			footer: footerRes.data
		};
	} catch (e) {
		console.error('Failed to load blog page:', e);
		throw error(500, {
			message: 'Failed to load blog content'
		});
	}
}

/**
 * Constructs the full URL for an image
 * @param {string} imageKey - The image key/path
 * @returns {string} The complete image URL
 */
function getImageUrl(imageKey) {
	return env.EXTERNAL_ASSETS_URL + imageKey;
}
