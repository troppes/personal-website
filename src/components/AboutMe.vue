<template>
  <div class="pure-g about-me">
    <div class="pure-u-1-2">
      <h1>
        {{ title }}
      </h1>
      <!-- Disable ESLint since the Data is from a trusted source-->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="msg" />
    </div>
    <div
      class="pure-u-1-2 profile"
      :style="'background-image: url(https://cms.reitz.dev/assets/'+pictureKey+')'"
    />
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    title: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      required: true,
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

.about-me {
  background: black;
  color: white;
}

.profile {
  height: 50vh;
  width: 80vh;
  background-repeat: no-repeat;
  background-size: 80vh auto;
}

</style>
