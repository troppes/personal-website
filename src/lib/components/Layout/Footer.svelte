<script>
	export let footer;
</script>

<footer>
	<div class="flex-container">
		<div>{@html footer.left_box}</div>
		<div>{@html footer.middle_box}</div>
		<div>{@html footer.right_box}</div>
	</div>
</footer>

<style>
	footer {
		text-align: center;
	}
	.flex-container {
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}

	@media (min-width: 1200px) {
		.flex-container {
			flex-direction: row;
		}
	}
</style>
