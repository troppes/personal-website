<script>
	import AboutMe from '$lib/components/Home/AboutMe.svelte';
	import Card from '$lib/components/Card.svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	import Details from '$lib/components/Home/Details.svelte';

	const { data } = $props();

	const allprojects = $state({
		description: 'All projects can be found here',
		title: 'All projects',
		url: '/projects',
		pictureUrl: null
	});
</script>

<div class="aboutme">
	<AboutMe aboutMe={data.aboutMe} />
</div>
<h1>Projects</h1>
<div class="cards">
	{#each data.projects as post (post.id)}
		<div class="card">
			<Card {post} />
		</div>
	{/each}
	<div class="card">
		<Card post={allprojects} />
	</div>
</div>
<h1>Skills</h1>
<div class="info">
	<div class="basic-info">
		<Details basicInfo={data.basicInfo} />
	</div>
</div>
<h1>Socials</h1>
<div class="social">
	<div>
		<SocialMedia socialMedia={data.socialMedia} />
	</div>
</div>

<style>
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center; /* Centers items horizontally */
		align-items: center; /* Centers items vertically */
		gap: 1vh;
	}

	.info {
		justify-content: center; /* Centers items horizontally */
		align-items: center; /* Centers items vertically */
	}

	@media (min-width: 1500px) {
		.card:nth-child(4) {
			display: block;
		}
	}

	@media (min-width: 1200px) {
		.cards {
			margin-top: 20vh;
			margin-bottom: 20vh;
		}

		.card:nth-child(1) {
			transform: translate(30px, 0px);
		}

		.card:nth-child(2) {
			transform: translate(100px, -200px);
		}

		.card:nth-child(3) {
			transform: translate(-125px, 200px);
		}

		.card:nth-child(4) {
			transform: translate(-100px, -50px);
		}
	}
</style>
