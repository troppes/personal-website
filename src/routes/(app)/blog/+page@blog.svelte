<script lang="ts">
	import BlogPost from '$lib/components/Blog/BlogPost.svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	export let data;
</script>

<div id="layout" class="pure-g">
	<div class="sidebar pure-u-1 pure-u-md-1-4">
		<div class="header">
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
	</div>
	<div class="content pure-u-1 pure-u-md-3-4">
		{#each data.posts as post}
			<BlogPost {post} />
		{/each}

		<Footer footer={data.footer.data} />
	</div>
</div>

<style>
	#layout {
		padding-top: 8vh;
	}

	.header {
		text-align: center;
		top: auto;
		margin: 3em auto;
	}

	.sidebar {
		background: var(--secondary-color);
	}

	.brand-title,
	.brand-tagline {
		margin: 0;
	}

	.brand-title {
		text-transform: uppercase;
	}

	.brand-tagline {
		font-weight: 300;
	}

	.content {
		padding: 2em 1em 0;
		margin-top: 2vh;
	}

	@media (min-width: 48em) {
		.content {
			float: left;
			padding: 2em 3em 0;
			margin-left: 25%;
		}

		.header {
			margin: 80% 2em 0;
		}

		.sidebar {
			margin-top: 8vh;
			position: absolute;
			top: 0;
			bottom: 0;
		}
	}
</style>
