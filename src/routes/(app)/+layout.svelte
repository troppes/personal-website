<script>
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Navbar from '$lib/components/Layout/Navbar.svelte';

	export let data;
</script>

<Navbar />
<slot />
<Footer footer={data['footer']} />
