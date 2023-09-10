<template>
  <div id="welcome">
    {{ text }}
  </div>
  <Particles
    id="tsparticles"
    :style="pictureKey? 'background-image: url('+getImageUrl+')' : 'background-color: var(--secondary-color)'"
    :options="{
      fpsLimit: 60,
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
          value: 50,
          random: {
            enable: true,
            minimumValue: 10
          },
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
          speed: 10,
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
    }"
  />
</template>

<script>
export default {
  name: 'GalleryHeader',
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
    pictureKey: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    getImageUrl() {
      return import.meta.env.VITE_APP_EXTERNAL_ASSETS_URL + this.pictureKey;
    },
  },
};
</script>

<style scoped>

#tsparticles {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  z-index: -1;

  background-color: #000000;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {
  color: #fff !important;
  text-align: center;
}

#tsparticles {
  height: 40vh;
}

#welcome {
  position: absolute;
  margin-top: 20vh;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
