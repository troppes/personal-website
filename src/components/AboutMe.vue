<template>
  <div class="about-me test">
    <div class="photo">
      <img
        class="left pure-img"
        alt="profile picture"
        :src="'https://cms.reitz.dev/assets/'+pictureKey"
      >
    </div>
    <div class="right">
      <h1>{{ title }}</h1>
      <div class="separator" />
      <p v-html="msg" />
      <social-media
        size="60"
        class="social-media"
      />
    </div>
  </div>
</template>

<script>
import SocialMedia from './SocialMedia.vue';

export default {
  name: 'AboutMe',
  components: { SocialMedia },
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    msg: {
      type: String,
      required: true,
      default: '',
    },
    pictureKey: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
/* The card */
.about-me {
  position: relative;
  height: 50vh;
  width: 100vh;
  margin: 5vh auto;
  background-color: var(--secondary-color);
  border: 2px solid var(--colour-background);
}

.about-me:before{
  content: "";
  position: absolute;
  top: calc(var(--base-grid) * -2);
  left: calc(var(--base-grid) * -2);
  border: 2px dashed var(--colour-background);
  background-image: repeating-linear-gradient(-24deg, transparent, transparent 4px, var(--colour-background-stripes) 0,
  var(--colour-background-stripes) 5px);
  z-index: -1;
  width: calc(var(--base-grid) * 110);
  height: calc(var(--base-grid) * 55);
}

/* Image on the left side */
.photo {
  float: left;
  position: relative;
  left: 5vh;
  top: -4vh;
  height: 30vh;
  width: 50vh;
  overflow: hidden;
  border: 2px solid var(--colour-background);
}

/*object-fit: cover;*/
/*object-position: center;*/
img.left {
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  width: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/* Right side of the card */
.right {
  margin-left: 590px;
  margin-right: 20px;
}

.separator {
  margin-top: 10px;
  border: 1px solid #C3C3C3;
}

p {
  text-align: justify;
  padding-top: 10px;
  font-size: 0.95rem;
  line-height: 150%;
}

.social-media {
  padding-top: 10vh;
}

</style>
