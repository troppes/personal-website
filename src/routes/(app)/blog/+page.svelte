<script>
	import BlogPost from '$lib/components/Blog/BlogPost.svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';

	const { data } = $props();

	let page = $state(1);
	let pageSize = $state(3);

	/**
	 * Get a page of items from an array
	 * @template T
	 * @param {T[]} array - The array to paginate
	 * @param {number} page - The page number
	 * @param {number} pageSize - Items per page
	 * @returns {T[]} - The paginated items
	 */
	function getPage(array, page, pageSize) {
		const start = (page - 1) * pageSize;
		const end = start + pageSize;
		return array.slice(start, end);
	}
</script>

<div class="flex-container">
	<div class="content">
		{#each getPage(data.posts, page, pageSize) as post (post.id)}
			<BlogPost {post} />
		{/each}
		<div class="navigation">
			<button onclick={() => (page -= 1)} disabled={page === 1}> Previous </button>
			<button
				onclick={() => (page += 1)}
				disabled={page === Math.ceil(data.posts.length / pageSize)}
			>
				Next
			</button>
		</div>
	</div>
	<div class="social-media">
		<h3 class="social-title">Connect</h3>
		<SocialMedia socialMedia={data.socialMedia} />
	</div>
</div>

<style>
	.navigation {
		display: flex;
		flex-flow: row wrap;
		text-align: center;
		justify-content: space-around;
		align-items: center;
	}

	.social-title {
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: 16px;
		padding: 0 16px;
		font-family:
			system-ui,
			-apple-system,
			sans-serif;
	}

	.social-media {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		margin-top: 5vh;
	}

	.navigation > button {
		all: unset;
		background-color: var(--secondary-color);
		padding: 0.5em;
		border-radius: 5px 5px 5px 5px;
		box-shadow: 1px 1px 1px 1px #000000;
		cursor: pointer;
	}

	.navigation > button:disabled {
		all: unset;
		background-color: var(--primary-color);
		padding: 0.5em;
		border-radius: 5px 5px 5px 5px;
		cursor: pointer;
		border: 1px solid var(--secondary-color);
	}
</style>
