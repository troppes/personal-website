<script>
	const { socialMedia } = $props();
</script>

<div class="social-section">
	<div class="socials">
		{#each socialMedia as social, i (social.id)}
			<a
				href={social.url}
				class="social-link"
				target={social.url.startsWith('http') ? '_blank' : '_self'}
				rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
				style="--delay: {i * 0.1}s"
				aria-label={`Visit my ${social.alt} profile`}
			>
				<img alt={social.alt} class="social-image" src={social.pictureUrl} loading="lazy" />
				<p class="social-text">{social.alt}</p>
			</a>
		{/each}
	</div>
</div>

<style>
	.social-section {
		animation: fadeInUp 0.6s ease forwards;
		animation-delay: 0.3s;
		opacity: 0;
		transform: translateY(20px);
	}

	.socials {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 8px;
		padding: 0 16px;
		box-sizing: border-box;
	}

	.social-link {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 16px;
		border-radius: 8px;
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		overflow: hidden;
		animation: fadeInLeft 0.4s ease forwards;
		animation-delay: var(--delay);
		opacity: 0;
		transform: translateX(-20px);
		background-color: transparent;
	}

	.social-link:hover {
		background-color: rgba(255, 255, 255, 0.1);
		color: var(--headline-text-color, #64ffda);
		transform: translateX(4px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.social-link:hover::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		background: linear-gradient(
			to bottom,
			var(--headline-text-color, #64ffda),
			rgba(255, 255, 255, 0.6)
		);
		border-radius: 0 2px 2px 0;
		animation: slideIn 0.2s ease;
	}

	.social-image {
		width: 24px;
		height: 24px;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		filter: brightness(0.9);
	}

	.social-link:hover .social-image {
		filter: brightness(0) saturate(100%) invert(48%) sepia(44%) saturate(4312%) hue-rotate(333deg)
			brightness(97%) contrast(90%);
	}

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeInLeft {
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes slideIn {
		from {
			width: 0;
		}
		to {
			width: 3px;
		}
	}
</style>
