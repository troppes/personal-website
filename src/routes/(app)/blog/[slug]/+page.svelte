<script>
	const { data } = $props();
</script>

<div class="content blog">
	<div class="flex-container">
		<h2>{data.post.title}</h2>
		<p>{@html data.post.text}</p>
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
