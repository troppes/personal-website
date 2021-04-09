<template>
  <div id="welcome" />
  <Particles
    id="tsparticles"
    :options="{
      fpsLimit: 144,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
            speed: 3
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#e0f5b9'
        },
        links: {
          color: '#e0f5b9',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true,
            value_area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true
    }"
  />
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
#tsparticles {
  height: 40vh;
  background-color: var(--primary-color);
  margin-bottom: 10vh;
  border-bottom: 2px dashed var(--colour-background);
  box-shadow: inset 0 -10px 15px -10px #000000;
}

#welcome {
  position: absolute;
  margin-top: 20vh;
  left: 50%;
  transform: translate(-50%, 0);
}

</style>
