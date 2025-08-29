import { get } from '$lib/requests.js';
import { env } from '$env/dynamic/private';

export async function getFooter() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/footer');
}

export async function getSocialMedia() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/social_media');
}

export async function getAboutMe() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/aboutme');
}

export async function getProjectsForHome() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/projects?limit=4&sort=sort,-date_created');
}

export async function getProjects() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/projects?sort=sort,-date_created');
}

export async function getPhotos() {
	return get(
		env.ACCESS_TOKEN,
		env.BACKEND_URL + '/items/gallery?sort=sort,-date_created&fields=*,tags.gallery_tags_id'
	);
}

export async function getTags() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/gallery_tags');
}

export async function getGalleryHeader() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/gallery_cover');
}

export async function getBlogPosts() {
	return get(
		env.ACCESS_TOKEN,
		env.BACKEND_URL + '/items/blogposts?fields=*.*&sort=sort,-date_created'
	);
}

export async function getBlogMetaData() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/blogmetadata');
}

/**
 * @param {string} id
 */
export async function getBlogPost(id) {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/blogposts/' + id + '?fields=*.*');
}

export async function getBasicInfo() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/basic_info?fields=*.*');
}

export async function getWorkExp() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/work_exp');
}

export async function getEducation() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/education');
}
