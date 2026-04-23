import { env } from '$env/dynamic/private';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event);

	const assetOrigin = new URL(env.EXTERNAL_ASSETS_URL).origin;
	const csp = response.headers.get('Content-Security-Policy') ?? '';
	response.headers.set('Content-Security-Policy', `${csp}; img-src 'self' ${assetOrigin} data:`);

	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

	return response;
}
