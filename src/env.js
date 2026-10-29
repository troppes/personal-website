import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	// required: the app can't function without these, so fail fast at startup if missing
	EXTERNAL_ASSETS_URL: {},
	URL: {},
	ACCESS_TOKEN: {},
	BACKEND_URL: {},
	// optional: lightGallery falls back to a watermarked trial mode without a license key
	LIGHTGALLERY_KEY: { schema: (input) => input ?? '' }
});
