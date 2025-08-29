import { error } from '@sveltejs/kit';
import { getBlogMetaData, getBlogPosts } from '$lib/backend-requests.js';
import { env } from '$env/dynamic/private';

/** @typedef {{
 *   id: string,
 *   title: string,
 *   shortDescription: string,
 *   dateCreated: Date,
 *   author: string
 * }} BlogPost
 */

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	try {
		const [postsResponse, metaDataResponse] = await Promise.all([
			getBlogPosts(),
			getBlogMetaData()
		]);

		if (!postsResponse?.data || !metaDataResponse?.data) {
			throw new Error('Failed to fetch blog data');
		}

		/** @type {BlogPost[]} */
		const posts = postsResponse.data.map(
			(
				/** @type {{ id: { toString: () => any; }; title: any; short_description: any; date_created: string; user_created: { first_name: any; last_name: any; }; }} */ post
			) => ({
				id: post.id.toString(),
				title: post.title,
				shortDescription: post.short_description,
				dateCreated: new Date(Date.parse(post.date_created)),
				author: `${post.user_created.first_name} ${post.user_created.last_name}`
			})
		);

		const headers = {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		};

		const body = `<?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <channel>
                <atom:link href="${env.URL}/rss" rel="self" type="application/rss+xml" />
                <title>${metaDataResponse.data.title}</title>
                <link>${env.URL}</link>
                <description>${metaDataResponse.data.tagline}</description>
                ${posts
									.map((post) =>
										`
                    <item>
                        <guid>${env.URL}/blog/${post.id}</guid>
                        <title>${escapeXml(post.title)}</title>
                        <link>${env.URL}/blog/${post.id}</link>
                        <description>${escapeXml(post.shortDescription)}</description>
                        <pubDate>${post.dateCreated.toUTCString()}</pubDate>
                    </item>
                    `.trim()
									)
									.join('\n')}
            </channel>
        </rss>`;

		return new Response(body, { headers });
	} catch (e) {
		console.error('Failed to generate RSS feed:', e);
		throw error(500, 'Failed to generate RSS feed');
	}
}

/**
 * Escapes special characters in XML content
 * @param {string} unsafe - The string to escape
 * @returns {string} The escaped string
 */
function escapeXml(unsafe) {
	return unsafe.replace(/[<>&'"]/g, (c) => {
		switch (c) {
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '&':
				return '&amp;';
			case "'":
				return '&apos;';
			case '"':
				return '&quot;';
			default:
				return c;
		}
	});
}
