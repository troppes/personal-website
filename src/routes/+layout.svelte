<script>
	import Header from '$lib/components/Layout/Header.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Navbar from '$lib/components/Layout/Navbar.svelte';

	export let data;
</script>

<Navbar />
<Header />
<slot />
<Footer footer={data['footer']} />
