<script>
	const { aboutMe } = $props();

	let textArray = $state(aboutMe.likes);
	let stringIndex = $state(0);
	let charIndex = $state(0);
	let isTyping = $state(true);
	let displayText = $state('');
	/** @type {number | undefined} */
	let typeInterval = $state(undefined);

	function typewriter() {
		if (stringIndex < textArray.length) {
			let currentString = textArray[stringIndex];
			currentString += '.';

			if (isTyping) {
				if (charIndex < currentString.length) {
					displayText += currentString.charAt(charIndex);
					charIndex++;
				} else {
					isTyping = false;
				}
			} else {
				if (charIndex > 0) {
					displayText = currentString.substring(0, charIndex - 1);
					charIndex--;
				} else {
					isTyping = true;
					stringIndex++;

					if (stringIndex >= textArray.length) stringIndex = 0;

					charIndex = 0;
					displayText = '';
				}
			}
		}
	}

	$effect(() => {
		typeInterval = setInterval(typewriter, 200);

		return () => {
			if (typeInterval) {
				clearInterval(typeInterval);
				typeInterval = undefined;
			}
		};
	});
</script>

<div class="flex-container">
	<div class="intro">
		<div>Hi there 👋</div>
		<div>My name is {aboutMe.name}.</div>
		<div class="typewriter">
			I love to <span>{displayText}</span>
		</div>
		<div class="show">Let me show you...</div>
	</div>
	<div class="photo">
		<div class="animation-container">
			<svg viewBox="0 -20 110 110" height="60%" width="60%">
				<path
					id="photo-line"
					fill="none"
					d="M 0 0 C 30 -10 70 0 70 30 C 70 60 38 75 30 60 C 17 29 40 0 80 10 C 110 20 50 70 100 70"
				/>
				<use class="line" xlink:href="#photo-line" />
				<use class="line-dash" xlink:href="#photo-line" />
			</svg>
			<div class="text">That's me!</div>
		</div>
		<img alt="profile" src={aboutMe.picture} />
	</div>
</div>

<style>
	.flex-container {
		flex-flow: column;
		align-items: center;
		justify-content: center;
	}
	.photo {
		display: flex;
		flex-flow: column;
		justify-content: space-around;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.photo > img {
		box-shadow: 2px 2px 2px 2px #000000;
	}

	.intro {
		font-size: 1.5em;
	}
	.show {
		padding-top: 2vh;
		font-size: 0.8em;
	}

	.animation-container {
		width: 50%;
		transform: translate(0%, 28%);
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
	}
	.text {
		transform: translate(100%, -220%);
		opacity: 0;
		animation: revealText 1s forwards 4s; /* Adjust durations and delays as needed */
		text-align: right;
	}

	@keyframes revealText {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.line {
		animation: dash 5s forwards;
		fill: none;
		stroke: var(--primary-text-color);
		stroke-dasharray: 324;
		stroke-dashoffset: 324;
		stroke-width: 1;
	}

	.line-dash {
		fill: none;
		stroke: var(--primary-color);
		stroke-dasharray: 10 10;
		stroke-width: 2;
	}

	@keyframes dash {
		from {
			stroke-dashoffset: 324;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
	@media (min-width: 1200px) {
		.photo,
		.flex-container {
			flex-flow: row;
		}

		.flex-container {
			margin-top: 10vh;
		}

		.animation-container {
			transform: translate(30%, -50%);
			display: flex;
			flex-flow: column wrap;
			justify-content: center;
			align-items: center;
		}
		.text {
			transform: translate(5%, -100%);
			opacity: 0;
			animation: revealText 1s forwards 4s; /* Adjust durations and delays as needed */
			text-align: right;
		}
	}

	.photo img {
		z-index: 99;
		max-width: 400px;
		min-width: 400px;
		height: auto;
	}
</style>
