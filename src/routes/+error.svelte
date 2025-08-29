<script>
	const { errors } = $props();
</script>

<h1 class="code">{errors?.status ?? '404'}</h1>
<div class="message">
	<p>{errors?.message ?? 'That should not happen! The page you are looking for does not exist.'}</p>
</div>

<style>
	.code,
	.message {
		padding-top: 8vh;
		padding-bottom: 1dvb;
		text-align: center;
	}

	.code {
		font-size: 4rem;
		font-weight: bold;
		color: var(--headline-text-color);
	}

	.message {
		font-size: 1.2rem;
	}
</style>
