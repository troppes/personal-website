<script lang="ts">
	import BlogPost from '$lib/components/Blog/BlogPost.svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	export let data;
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
		{#each data.posts as post}
			<BlogPost {post} />
		{/each}

		<Footer footer={data.footer.data} />
	</div>
</div>

<style>
	.sidebar {
		display: flex;
		flex-flow: column wrap;
		margin-top: 15vh;
		text-align: center;
		top: auto;
		margin: 3em auto;
	}

	.brand-title,
	.brand-tagline {
		margin: 0;
	}

	.brand-tagline {
		font-weight: 300;
	}

	.content {
		padding: 2em 1em 0;
		margin-top: 2vh;
	}

	.social-media {
		margin-left: 5vh;
	}

	.brand-title {
		display: block;
		text-transform: uppercase;
		font-size: 3em;
		padding-top: 10vh;
	}

	@media (min-width: 1300px) {
		.content {
			float: left;
			padding: 2em 3em 0;
			margin-left: 25%;
		}

		.sidebar {
			border-radius: 5px;
			margin-top: 20vh;
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
