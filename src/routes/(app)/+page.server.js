import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import {
	getSocialMedia,
	getAboutMe,
	getProjectsForHome,
	getBasicInfo,
	getWorkExp,
	getEducation
} from '../../lib/backend-requests.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		const [socialMediaRes, basicInfoRes, workExpRes, educationRes, aboutMeRes, projectsRes] =
			await Promise.all([
				getSocialMedia(),
				getBasicInfo(),
				getWorkExp(),
				getEducation(),
				getAboutMe(),
				getProjectsForHome()
			]);

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

		const basicInfo = {
			...basicInfoRes.data,
			education: educationRes.data.map(
				(/** @type {{ id: { toString: () => any; }; date: any; details: any; }} */ edu) => ({
					id: edu.id.toString(),
					date: edu.date,
					details: edu.details
				})
			),
			work_exp: workExpRes.data.map(
				(/** @type {{ id: { toString: () => any; }; date: any; details: any; }} */ work) => ({
					id: work.id.toString(),
					date: work.date,
					details: work.details
				})
			)
		};

		const aboutMe = {
			...aboutMeRes.data,
			picture: getImageUrl(aboutMeRes.data.picture)
		};

		const projects = projectsRes.data.map(
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

		return {
			socialMedia,
			aboutMe,
			projects,
			basicInfo
		};
	} catch (e) {
		console.error('Failed to load page data:', e);
		throw error(500, {
			message: 'Failed to load page data'
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
