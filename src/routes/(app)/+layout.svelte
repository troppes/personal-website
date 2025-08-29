<script>
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Navbar from '$lib/components/Layout/Navbar.svelte';

	const { data, children } = $props();
</script>

<div class="layout-container">
	<Navbar />
	<main class="main-content">
		{@render children()}
	</main>
	<div class="footer">
		<Footer footer={data.footer} />
	</div>
</div>

<style>
	.layout-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.footer {
		margin-top: 10vh;
	}

	.main-content {
		padding-top: 10vh;
		flex: 1;
	}

	@media (max-width: 480px) {
		.layout-container {
			padding: 0 0.75rem;
		}
	}
</style>
