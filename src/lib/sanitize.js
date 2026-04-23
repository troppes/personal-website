import sanitizeHtml from 'sanitize-html';

const BLOG_OPTIONS = {
	allowedTags: [
		'p',
		'br',
		'b',
		'i',
		'em',
		'strong',
		'a',
		'ul',
		'ol',
		'li',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'blockquote',
		'code',
		'pre',
		'img',
		'figure',
		'figcaption',
		'table',
		'thead',
		'tbody',
		'tr',
		'th',
		'td',
		'div',
		'span',
		'hr'
	],
	allowedAttributes: {
		a: ['href', 'title', 'target', 'rel'],
		img: ['src', 'alt', 'title', 'width', 'height'],
		div: ['style'],
		span: ['style'],
		'*': ['class']
	},
	allowedSchemes: ['http', 'https', 'mailto']
};

const FOOTER_OPTIONS = {
	allowedTags: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'span'],
	allowedAttributes: {
		a: ['href', 'title', 'target', 'rel']
	},
	allowedSchemes: ['http', 'https', 'mailto']
};

/** @param {string} html */
export function sanitizeBlogHtml(html) {
	return sanitizeHtml(html, BLOG_OPTIONS);
}

/** @param {string} html */
export function sanitizeFooterHtml(html) {
	return sanitizeHtml(html ?? '', FOOTER_OPTIONS);
}
