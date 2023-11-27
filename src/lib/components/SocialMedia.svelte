<script>
	export let socialMedia;
</script>

<div class="flex-container">
	{#each socialMedia as social}
		<a href={social.url}>
			<img alt={social.alt} class="social-image" src={social.pictureUrl} />
		</a>
	{/each}
</div>

<style>
	.social-image {
		max-width: 60px;
		min-width: 40px;
		height: auto;
	}
</style>
