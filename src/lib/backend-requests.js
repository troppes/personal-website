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
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/projects?limit=3&sort=sort,-date_created');
}

export async function getProjects() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/projects?sort=sort,-date_created');
}

// Only fetches 100 objects to not overload the browser and server
export async function getPhotos() {
	return get(
		env.ACCESS_TOKEN,
		env.BACKEND_URL +
			'/items/gallery?sort=sort,-date_created&limit=100&fields=*,tags.gallery_tags_id'
	);
}

export async function getTags() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/gallery_tags');
}

export async function getGalleryHeader() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/gallery_cover');
}
