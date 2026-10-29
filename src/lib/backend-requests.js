import { get } from '#lib/requests.js';
import { ACCESS_TOKEN, BACKEND_URL } from '$app/env/private';

export async function getFooter() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/footer');
}

export async function getSocialMedia() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/social_media');
}

export async function getAboutMe() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/aboutme');
}

export async function getProjectsForHome() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/projects?limit=3&sort=sort,-date_created');
}

export async function getProjects() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/projects?sort=sort,-date_created');
}

export async function getPhotos() {
	return get(
		ACCESS_TOKEN,
		BACKEND_URL + '/items/gallery?sort=sort,-date_created&fields=*,tags.gallery_tags_id'
	);
}

export async function getTags() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/gallery_tags');
}

export async function getGalleryHeader() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/gallery_cover');
}

export async function getBlogPosts() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/blogposts?fields=*.*&sort=sort,-date_created');
}

export async function getBlogMetaData() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/blogmetadata');
}

/** Fetches a single blog post by ID
 * @param {string} id
 * @returns {Promise<any>} the blog post data
 */
export async function getBlogPost(id) {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/blogposts/' + id + '?fields=*.*');
}

export async function getBasicInfo() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/basic_info?fields=*.*');
}

export async function getWorkExp() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/work_exp');
}

export async function getEducation() {
	return get(ACCESS_TOKEN, BACKEND_URL + '/items/education');
}
