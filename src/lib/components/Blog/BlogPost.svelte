<script>
	export let post;

	function datePosted(date) {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		return date.toLocaleDateString('de-DE', options);
	}
</script>

<!-- A single blog post -->
<div class={post.id % 2 === 0 ? 'blog-card alt' : 'blog-card'}>
	<div class="meta">
		<div
			class="photo"
			style={post.pictureUrl
				? 'background-image: url(' + post.pictureUrl + ')'
				: 'background-color: var(--secondary-color)'}
		/>
		<ul class="details">
			<li class="author">
				{post.author}
			</li>
			<li class="date">
				{datePosted(post.dateCreated)}
			</li>
		</ul>
	</div>
	<div class="description">
		<h1>{post.title}</h1>
		<p>{post.shortDescription}</p>
		<p class="read-more"><a href={'/blog/' + post.id}>Read more</a></p>
	</div>
</div>

<style>
	* {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.blog-card {
		box-shadow: 0px 1px 1px 1px #000000;
		display: flex;
		flex-direction: column;
		margin: 1rem auto 1.6%;
		background: var(--secondary-color);
		line-height: 1.4;
		border-radius: 5px;
		overflow: hidden;
		z-index: 0;
	}
	.blog-card a {
		color: inherit;
	}
	.blog-card a:hover {
		color: var(--primary-color);
	}
	.blog-card:hover .photo {
		transform: scale(1.3) rotate(3deg);
	}
	.blog-card .meta {
		position: relative;
		z-index: 0;
		height: 200px;
	}
	.blog-card .photo {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-size: cover;
		background-position: center;
		transition: transform 0.2s;
	}
	.blog-card .details,
	.blog-card .details ul {
		margin: auto;
		padding: 0;
		list-style: none;
	}
	.blog-card .details {
		position: absolute;
		top: 0;
		bottom: 0;
		left: -100%;
		margin: auto;
		transition: left 0.2s;
		background: rgba(0, 0, 0, 0.6);
		color: var(--secondary-text-color);
		padding: 10px;
		width: 100%;
		font-size: 0.9rem;
	}
	.blog-card .details a {
		text-decoration: dotted underline;
	}
	.blog-card .details ul li {
		display: inline-block;
	}

	.blog-card .details .tags li {
		margin-right: 2px;
	}
	.blog-card .details .tags li:first-child {
		margin-left: -4px;
	}
	.blog-card .description {
		padding: 1rem;
		background: var(--secondary-color);
		position: relative;
		z-index: 1;
	}

	.blog-card .description h1 {
		line-height: 1;
		margin: 0;
		font-size: 1.7rem;
	}

	.blog-card .description .read-more {
		text-align: right;
	}
	.blog-card .description .read-more a {
		color: var(--primary-text-color);
		display: inline-block;
		position: relative;
	}

	.blog-card .description .read-more a:hover:after {
		margin-left: 5px;
		opacity: 1;
	}
	.blog-card p {
		position: relative;
		margin: 1rem 0 0;
	}
	.blog-card p:first-of-type {
		margin-top: 1.25rem;
	}
	.blog-card p:first-of-type:before {
		content: '';
		position: absolute;
		height: 5px;
		background: var(--secondary-color);
		width: 35px;
		top: -0.75rem;
		border-radius: 3px;
	}
	.blog-card:hover .details {
		left: 0;
	}
	@media (min-width: 640px) {
		.blog-card {
			flex-direction: row;
			max-width: 700px;
		}
		.blog-card .meta {
			flex-basis: 40%;
			height: auto;
		}
		.blog-card .description {
			flex-basis: 60%;
		}
		.blog-card .description:before {
			transform: skewX(-3deg);
			content: '';
			background: var(--secondary-color);
			width: 30px;
			position: absolute;
			left: -10px;
			top: 0;
			bottom: 0;
			z-index: -1;
		}
		.blog-card.alt {
			flex-direction: row-reverse;
		}
		.blog-card.alt .description:before {
			left: inherit;
			right: -10px;
			transform: skew(3deg);
		}
		.blog-card.alt .details {
			padding-left: 25px;
		}
	}
</style>
