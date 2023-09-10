<script>
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Card from '$lib/components/Card.svelte';

	export let data;

	let allprojects = {
		description: 'All projects can be found here',
		title: 'All projects',
		url: '/projects',
		pictureUrl: null
	};
</script>

<AboutMe
	title="me.title"
	msg="me.description"
	picture-key="me.picture"
	socialMedia={data.socialMedia}
	aboutMe={data.aboutMe}
/>

<div class="pure-g cards">
	{#each data.projects as post}
		<Card {post} />
	{/each}

	<Card post={allprojects} />
</div>

<style>
	.cards {
		padding-top: 10vh;
	}
</style>
