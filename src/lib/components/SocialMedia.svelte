<script>
	export let socialMedia;
</script>

<div class="pure-g social">
	{#each socialMedia as social}
		<div class="pure-u-1-{socialMedia.length}">
			<a href={social.url}>
				<img alt={social.alt} class="social-image" src={social.pictureUrl} />
			</a>
		</div>
	{/each}
</div>

<style>
	.social-image {
		width: 40%;
	}
</style>
