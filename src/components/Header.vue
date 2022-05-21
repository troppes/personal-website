<template>
  <div id="welcome" />
  <Particles
    id="tsparticles"
    :options="{
      fpsLimit: 60,
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
        },
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
          limit: 20 ,
          random: false,
          density: 10
        },
        position: {
          x: 50,
          y: 50
        }
          },
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
