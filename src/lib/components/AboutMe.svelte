<script>
	import SocialMedia from './SocialMedia.svelte';

	export let aboutMe;
	export let socialMedia;
</script>

<div class="flex-container">
	<div class="pure-u-md-4-24" />
	<div class="about-me pure-u-md-16-24 pure-g">
		<div class="photo pure-u-lg-12-24 pure-u-1">
			{#if aboutMe.picture}
				<img class="left pure-img" alt="profile" src={aboutMe.picture} />
			{/if}
		</div>
		<div class="content pure-u-lg-11-24 pure-u-1">
			<h1>{aboutMe.title}</h1>
			<div class="separator" />
			<p>{@html aboutMe.description}</p>
			<div class="social-media">
				<SocialMedia {socialMedia} />
			</div>
		</div>
	</div>
	<div class="pure-u-md-4-24" />
</div>

<style>
	.about-me {
		background-color: var(--secondary-color);
		border: 2px solid var(--secondary-color);
		color: var(--primary-text-color);
	}

	h1 {
		font-size: 3em;
	}

	.photo {
		position: relative;
		top: -8vh;
		margin-bottom: -8vh;
	}

	.photo img {
		border: 2px solid var(--secondary-color);
		max-width: 600px;
		min-width: 400px;
		height: auto;
	}

	.separator {
		margin-top: 5vh;
		border: 1px solid var(--secondary-color);
	}

	p {
		text-align: justify;
		padding-top: 10px;
		font-size: 0.95rem;
		line-height: 150%;
	}

	.social-media {
		padding-top: 2vh;
	}

	@media (min-width: 80em) {
		.photo {
			float: left;
			position: relative;
			top: -10vh;
			height: 40vh;
		}

		.social-media {
			padding-top: 10vh;
		}
	}
</style>
