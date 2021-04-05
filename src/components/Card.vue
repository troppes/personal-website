<template>
  <div
    class="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800
     shadow-md overflow-hidden cursor-pointer rounded-xl hover:shadow-xl"
    :style="pictureKey ? 'background-image:url(https://cms.reitz.dev/assets/'+pictureKey+')' : 'background-color: #e0f5b9'"
  >
    <div class="flex justify-between items-center ml-4 pr-8">
      <div
        v-if="textUpperLeft"
        class="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded"
      >
        {{ textUpperLeft }}
      </div>
      <div
        v-if="textUpperRight"
        class="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full"
      >
        {{ textUpperRight }}
      </div>
    </div>
    <div class="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
      <h3 class="text-xl font-bold pb-2">
        {{ title }}
      </h3>
      <p class="truncate text-gray-500 text-sm">
        <a
          v-if="url"
          :href="url"
        >Click here for more Information</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
    textUpperLeft: {
      type: String,
      required: false,
      default: null,
    },
    textUpperRight: {
      type: String,
      required: false,
      default: null,
    },
    url: {
      type: String,
      required: false,
      default: null,
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
