<script>
    import Footer from '$lib/components/Layout/Footer.svelte';
    import Navbar from '$lib/components/Layout/Navbar.svelte';
    
    const { data, children } = $props();
</script>

<Navbar />
{@render children()}
<Footer footer={data.footer} />
