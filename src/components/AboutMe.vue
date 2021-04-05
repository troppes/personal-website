<template>
  <div class="flex flex-row">
    <div>
      <h1 class="text-8xl">
        {{ title }}
      </h1>
      <p
        class="text-2xl"
        v-html="msg"
      />
    </div>
    <div class="flex flex-wrap justify-center">
      <div class="w-6/12 sm:w-4/12 px-4">
        <img
          :src="'https://cms.reitz.dev/assets/'+pictureKey"
          alt="Me"
          class="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
        >
      </div>
    </div>
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

</style>
