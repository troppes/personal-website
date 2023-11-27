import { getFooter } from '../../lib/backend-requests.js';

export async function load() {
	let footer = null;
	try {
		footer = await getFooter();
	} catch (e) {
		console.error(e);
	}
	return {
		footer: footer.data
	};
}
