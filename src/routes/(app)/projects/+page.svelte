<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
</script>

<div class="spacer" />
<div class="grid-container">
	{#each data.projects as post}
		<div class="card-wrapper">
			<Card {post} />
		</div>
	{/each}
</div>

<style>
	.spacer {
		padding-top: 15vh;
	}
	.grid-container {
		display: grid;
		row-gap: 20px;
		grid-template-columns: repeat(1, 1fr);
	}

	@media only screen and (min-width: 768px) {
		.grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media only screen and (min-width: 1200px) {
		.grid-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
