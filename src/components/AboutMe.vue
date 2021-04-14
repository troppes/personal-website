<template>
  <div class="pure-g">
    <div class="pure-u-md-4-24" />
    <div class="about-me pure-u-md-16-24 pure-g">
      <div class="photo pure-u-1 pure-u-lg-1-2">
        <img
          class="left pure-img"
          alt="profile picture"
          :src="'https://cms.reitz.dev/assets/'+pictureKey"
        >
      </div>
      <div class="content pure-u-1 pure-u-lg-1-2">
        <h1>{{ title }}</h1>
        <div class="separator" />
        <p v-html="msg" />
        <social-media
          size="60"
          class="social-media"
        />
      </div>
    </div>
    <div class="pure-u-md-4-24" />
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
  background-color: var(--secondary-color);
  border: 2px solid var(--colour-background);
}

.photo {
  position: relative;
  top: -8vh;
  margin-bottom: -8vh;
  overflow: hidden;
}

.photo img{
  border: 2px solid var(--colour-background);
}

.separator {
  margin-top: 5vh;
  border: 1px solid #C3C3C3;
}

p {
  text-align: justify;
  padding-top: 10px;
  font-size: 0.95rem;
  line-height: 150%;
}

.social-media {
  padding-top: 2vh;
}

@media (min-width: 80em) {
  .photo {
    float: left;
    position: relative;
    top: -10vh;
    height: 40vh;
  }

  .social-media {
    padding-top: 10vh;
  }

}

</style>
