<script lang="ts">
	import BlogPost from '$lib/components/Blog/BlogPost.svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	export let data;

	let page = 1;
	let pageSize = 3;

	function getPage(array, page, pageSize) {
		const start = (page - 1) * pageSize;
		const end = start + pageSize;
		return array.slice(start, end);
	}
</script>

<div class="sidebar">
	<h1 class="brand-title">
		{data.metadata.data.title}
	</h1>
	<div class="brand-tagline">
		{@html data.metadata.data.tagline}
	</div>
	<div class="social-media">
		<SocialMedia socialMedia={data.socialMedia} />
	</div>
</div>
<div class="flex-container">
	<div class="content">
		{#each getPage(data.posts, page, pageSize) as post}
			<BlogPost {post} />
		{/each}
		<div class="navigation">
			<button on:click={() => (page -= 1)} disabled={page === 1}>Previous</button>
			<button
				on:click={() => (page += 1)}
				disabled={page === Math.ceil(data.posts.length / pageSize)}>Next</button
			>
		</div>
	</div>
</div>

<style>
	.sidebar {
		display: flex;
		flex-flow: column wrap;
		text-align: center;
		justify-content: space-between;
		align-items: center;
	}

	.navigation {
		display: flex;
		flex-flow: row wrap;
		text-align: center;
		justify-content: space-around;
		align-items: center;
	}

	.navigation > button {
		all: unset;
		background-color: var(--secondary-color);
		padding: 0.5em;
		border-radius: 5px 5px 5px 5px;
		box-shadow: 1px 1px 1px 1px #000000;
	}

	.navigation > button:disabled {
		all: unset;
		background-color: var(--primary-color);
		padding: 0.5em;
		border-radius: 5px 5px 5px 5px;

		border: 1px solid var(--secondary-color);
	}

	.brand-title,
	.brand-tagline {
		margin: 0;
	}

	.content {
		padding: 2em 1em 0;
		margin-top: 2vh;
	}

	.brand-title {
		display: block;
		text-transform: uppercase;
		font-size: 3em;
		padding-top: 10vh;
	}

	@media (min-width: 1300px) {
		.flex-container {
			min-height: 90vh; /* Set the minimum height here */
		}

		.content {
			float: left;
			padding: 2em 3em 0;
			margin-left: 25%;
		}

		.social-media {
			margin-left: 5vh;
		}

		.sidebar {
			border-radius: 0px 5px 5px 0px;
			box-shadow: 0px 1px 1px 1px #000000;
			margin-top: 20vh;
			align-items: normal;
			padding: 10vh 2vh 10vh 2vh;
			width: 400px; /* Set the width of the sidebar */
			position: absolute; /* Fixed Sidebar (stay in place on scroll) */
			z-index: 1; /* Stay on top */
			top: 0; /* Stay at the top */
			left: 0;
			background-color: var(--secondary-color);
		}

		.brand-title {
			padding-top: 0vh;
		}
	}
</style>
