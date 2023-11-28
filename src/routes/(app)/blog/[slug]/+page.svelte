<script>
	export let data;
</script>

<div class="content blog">
	<div class="flex-container">
		<h2>{data.post.data.title}</h2>

		<p>{@html data.post.data.text}</p>
	</div>
</div>

<style>
	.content {
		padding-left: 10vh;
		padding-right: 10vh;
		padding-top: 10vh;
		color: var(--secondary-text-color);
	}
</style>
