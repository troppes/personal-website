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

export async function get404() {
	return get(env.ACCESS_TOKEN, env.BACKEND_URL + '/items/not_found');
}
