<script>
	const { post } = $props();
</script>

<div class="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4 card center">
	<div class="articles__article" style="--animation-order:1">
		<a href={post.url} class="articles__link">
			<div
				class="articles__content articles__content--lhs"
				style={post.pictureUrl
					? 'background-image:url(post.pictureUrl)'
					: 'background-color: var(--secondary-color)'}
			>
				<h2 class="articles__title">
					{post.title}
				</h2>
				<div class="articles__footer">
					<p>{post.description}</p>
				</div>
			</div>
			<div
				class="articles__content articles__content--rhs"
				style={post.pictureUrl
					? 'background-image:url(post.pictureUrl)'
					: 'background-color: var(--secondary-color)'}
				aria-hidden="true"
			>
				<h2 class="articles__title">
					{post.title}
				</h2>
				<div class="articles__footer">
					<p>{post.description}</p>
				</div>
			</div>
		</a>
	</div>
</div>

<style>
	.center {
		display: flex;
		justify-content: center;
	}

	.articles__article {
		cursor: pointer;
		display: block;
		position: relative;
		perspective: 1000px;
		animation-name: animateIn;
		animation-duration: 0.35s;
		animation-delay: calc(var(--animation-order) * 100ms);
		animation-fill-mode: both;
		animation-timing-function: ease-in-out;
	}

	*,
	:after,
	:before {
		box-sizing: border-box;
		margin: 0;
	}

	.articles__article,
	.articles__article:before {
		box-shadow: 1px 1px 1px 1px #000000;

		width: calc(var(--base-grid) * 35);
		height: calc(var(--base-grid) * 35);
	}

	.articles__link {
		background-color: var(--primary-color);
		border: 2px solid var(--secondary-color);
		display: block;
		width: 100%;
		height: 100%;
	}

	/* Kleiner pfeil */
	.articles__link:after {
		content: '';
		position: absolute;
		top: 50%;
		right: calc(var(--base-grid) * 3);
		width: calc(var(--base-grid) * 2);
		height: calc(var(--base-grid) * 2);
		margin-top: calc(var(--base-grid) * -1);
		clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
		background-color: var(--secondary-color);
		opacity: 0;
		transition:
			opacity 0.5s ease-in,
			transform 0.3s ease-in-out 0ms;
	}

	.articles__content {
		background-color: var(--secondary-color);
		color: var(--primary-text-color);
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding: calc(var(--base-grid) * 2);
		display: flex;
		flex-direction: column;
	}

	.articles__content--lhs {
		clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
	}

	.articles__content--rhs {
		clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
		transition:
			transform 0.5s ease-in-out,
			background-color 0.4s ease-in-out;
	}

	.articles__title {
		font-size: calc(var(--base-grid) * 4);
		line-height: 1.125;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.articles__footer {
		background: var(--secondary-color);
		padding: 1vh;
		margin-top: auto;
		font-size: calc(var(--base-grid) * 2);
		line-height: calc(var(--base-grid) * 2);
		display: flex;
	}

	.articles__link:hover .articles__content--rhs {
		background-color: var(--secondary-color);
		transform: rotateY(-50deg);
	}

	.articles__link:hover:after {
		opacity: 1;
		transform: translateX(calc(var(--base-grid) * 1.5));
		transition:
			opacity 0.5s ease-in,
			transform 0.3s ease-in-out 0.25s;
	}
</style>
