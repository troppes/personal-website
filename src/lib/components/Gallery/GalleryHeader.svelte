<script>
	import { loadFull } from 'tsparticles';
	import Particles from 'svelte-particles';

	export let pictureUrl;

	let particlesInit = async (engine) => {
		await loadFull(engine);
	};

	let particlesConfig = {
		fpsLimit: 60,
		fullScreen: false,
		particles: {
			number: {
				value: 0,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: '#ff0000',
				animation: {
					enable: true,
					speed: 180,
					sync: true
				}
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: false,
					speed: 3,
					opacity_min: 0.1,
					sync: false
				}
			},
			size: {
				value: 100,
				animation: {
					enable: true,
					speed: 5,
					minimumValue: 10,
					sync: true,
					startValue: 'min',
					destroy: 'max'
				}
			},
			links: {
				enable: false
			},
			move: {
				enable: true,
				speed: 3,
				direction: 'none',
				random: false,
				straight: false,
				outMode: 'destroy',
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detectsOn: 'window',
			events: {
				onhover: {
					enable: true,
					mode: 'trail'
				},
				onclick: {
					enable: true,
					mode: 'push'
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 0.8,
					speed: 3
				},
				repulse: {
					distance: 200
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				},
				trail: {
					delay: 0.005,
					quantity: 5
				}
			}
		},
		retina_detect: true,
		backgroundMask: {
			enable: true,
			cover: {
				color: '#000000'
			}
		}
	};
</script>

<!-- pictureKey? 'background-image: url('+getImageUrl+')' : 'background-color: var(--secondary-color)' -->
<!-- Can be used for text on top -->
<div id="welcome" />
<div class="particles">
	<Particles
		options={particlesConfig}
		style="position: absolute;top: 0;left: 0;bottom: 0;right: 0;padding: 0;margin: 0;z-index: 0; {pictureUrl
			? 'background-image: url(' + pictureUrl + ')'
			: 'background-color: var(--secondary-color)'}"
		{particlesInit}
	/>
</div>

<style>
	.particles {
		position: relative;
		height: 40vh;
		background-color: var(--primary-color);
		border-bottom: 2px solid var(--secondary-color);
		box-shadow: inset 0 -10px 15px -10px #000000;
	}

	#welcome {
		position: absolute;
		margin-top: 20vh;
		left: 50%;
		transform: translate(-50%, 0);
	}
</style>
