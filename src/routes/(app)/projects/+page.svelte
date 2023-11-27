<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
</script>

<div class="pure-g cards">
	{#each data.projects as post}
		<Card {post} />
	{/each}
</div>

<style>
	.cards {
		padding-top: 10vh;
	}
</style>
