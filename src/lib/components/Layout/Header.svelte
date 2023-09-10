<script>
	import { loadFull } from 'tsparticles';
	import Particles from 'svelte-particles';

	let particlesInit = async (engine) => {
		await loadFull(engine);
	};

	let particlesConfig = {
		fpsLimit: 60,
		fullScreen: {
			enable: false
		},
		particles: {
			number: {
				value: 800,
				density: {
					enable: true,
					area: 900
				}
			},
			color: {
				value: ['#ffffff']
			},
			shape: {
				type: 'circle'
			},
			opacity: {
				value: 1
			},
			size: {
				value: 3,
				random: {
					enable: true,
					minimumValue: 1
				}
			},
			move: {
				size: true,
				enable: true,
				speed: 0.05,
				direction: 'none',
				random: false,
				straight: false,
				outModes: {
					default: 'out'
				},
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				},
				trail: {
					enable: true,
					length: 3,
					fillColor: '#0E1630'
				},
				warp: true
			}
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onClick: {
					enable: true,
					mode: 'push'
				},
				resize: true
			},
			modes: {
				push: {
					quantity: 4
				}
			}
		},
		detectRetina: true,
		absorbers: {
			orbits: true,
			destroy: true,
			opacity: 1,
			color: '000 ',
			size: {
				value: 10,
				limit: 20,
				random: false,
				density: 10
			},
			position: {
				x: 50,
				y: 50
			}
		}
	};
</script>

<!-- Can be used for text on top -->
<div id="welcome" />
<div class="particles">
	<Particles
		options={particlesConfig}
		style="position: absolute;top: 0;left: 0;bottom: 0;right: 0;padding: 0;margin: 0;z-index: 0;"
		{particlesInit}
	/>
</div>

<style>
	.particles {
		position: relative; /* Add this line */
		height: 40vh;
		background-color: var(--primary-color);
		margin-bottom: 10vh;
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
