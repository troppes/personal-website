import { env } from '$env/dynamic/private';
import {
	getSocialMedia,
	getAboutMe,
	getProjectsForHome,
	getBasicInfo
} from '../../lib/backend-requests.js';

export async function load() {
	let socialMedia = null;
	let aboutMe = null;
	let projects = null;
	let basicInfo = null;

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
		basicInfo = await getBasicInfo();
		basicInfo.data.education = basicInfo.data.education.map((education) => ({
			id: education.education_id.id.toString(),
			date: education.education_id.date,
			details: education.education_id.details
		}));
		basicInfo.data.work_exp = basicInfo.data.work_exp.map((work_exp) => ({
			id: work_exp.work_exp_id.id.toString(),
			date: work_exp.work_exp_id.date,
			details: work_exp.work_exp_id.details
		}));
	} catch (e) {
		console.error(e);
	}

	try {
		aboutMe = await getAboutMe();

		aboutMe.data.picture = getImageUrl(aboutMe.data.picture);
	} catch (e) {
		console.error(e);
	}

	try {
		projects = await getProjectsForHome();

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
		socialMedia: socialMedia,
		aboutMe: aboutMe.data,
		projects: projects,
		basicInfo: basicInfo.data
	};
}

function getImageUrl(imageKey) {
	return env.EXTERNAL_ASSETS_URL + imageKey;
}
