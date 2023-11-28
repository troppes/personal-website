<script>
	export let socialMedia;
</script>

<div class="socials">
	{#each socialMedia as social}
		<a href={social.url} class="social-link">
			<img alt={social.alt} class="social-image" src={social.pictureUrl} />
			<p class="social-text">{social.alt}</p>
		</a>
	{/each}
</div>

<style>
	.social-link {
		text-decoration: none;
		display: flex;
	}

	.social-link:hover {
		color: var(--headline-text-color);
		background-color: transparent;
	}

	.social-link:hover .social-image {
		filter: brightness(0) saturate(100%) invert(48%) sepia(44%) saturate(4312%) hue-rotate(333deg)
			brightness(97%) contrast(90%);
	}

	.social-image {
		max-width: 25px;
		min-width: 25px;
		height: auto;
		margin-right: 5px;
	}

	.socials {
		display: flex;
		flex-flow: column wrap;
		justify-content: space-around;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		gap: 0;
	}
</style>
