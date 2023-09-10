<script>
	export let footer;
</script>

<footer>
	<div class="pure-g">
		<div class="pure-u-md-1-3 pure-u-1-1">{@html footer.left_box}</div>
		<div class="pure-u-md-1-3 pure-u-1-1">{@html footer.middle_box}</div>
		<div class="pure-u-md-1-3 pure-u-1-1">{@html footer.right_box}</div>
	</div>
</footer>

<style>
	footer {
		text-align: center;
	}
</style>
