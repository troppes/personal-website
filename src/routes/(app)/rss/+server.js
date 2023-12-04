import { getBlogMetaData, getBlogPosts } from '$lib/backend-requests.js';
import { env } from '$env/dynamic/private';

export async function GET() {
	let posts = null;
	let metaData = null;

	try {
		posts = await getBlogPosts();
		posts = posts.data.map((post) => ({
			id: post.id.toString(),
			title: post.title,
			shortDescription: post.short_description,
			dateCreated: new Date(Date.parse(post.date_created)),
			author: `${post.user_created.first_name} ${post.user_created.last_name}`
		}));
	} catch (e) {
		console.error(e);
	}

	try {
		metaData = await getBlogMetaData();
	} catch (e) {
		console.error(e);
	}

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	const body = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
        <atom:link href="${env.URL}/rss" rel="self" type="application/rss+xml" />
        <title>${metaData.data.title}</title>
        <link>${env.URL}</link>
        <description>${metaData.data.tagline}</description>
    ${posts
			.map(
				(post) =>
					`<item>
                        <guid>${env.URL}/blog/${post.id}</guid>
                        <title>${post.title}</title>
                        <link>${env.URL}/blog/${post.id}</link>
                        <description>${post.shortDescription}</description>
                        <pubDate>${post.dateCreated.toUTCString()}</pubDate>
                    </item>`
			)
			.join('\n')}
        </channel>
    </rss>`;

	return new Response(body, { headers });
}
