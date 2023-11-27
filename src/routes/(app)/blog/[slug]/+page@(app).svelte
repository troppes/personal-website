<script>
	export let data;
</script>

<div class="content blog">
	<div class="pure-u-xl-4-24" />
	<div class="pure-g center pure-u-xl-16-24">
		<div class="pure-u-1">
			<h2>{data.post.data.title}</h2>
		</div>
		<div class="pure-u-1">
			<p>{@html data.post.data.text}</p>
		</div>
	</div>
	<div class="pure-u-xls-4-24" />
</div>

<style>
	.content {
		padding-top: 10vh;
		padding-bottom: 10vh;
		color: var(--secondary-text-color);
	}

	.center {
		background-color: var(--secondary-color);
	}
</style>
