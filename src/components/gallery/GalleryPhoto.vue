<template>
  <img
    class="img-responsive"
    :alt="photo.alt"
    :src-full="'https://cms.reitz.dev/assets/'+photo.photoKey"
    :desc="photo.description"
    :src="'https://cms.reitz.dev/assets/'+photo.photoKey+'?fit=cover&width=800&quality=80'"
    @click="$emit('open-photo', photo)"
  >
</template>

<script lang="ts">
import { PropType } from 'vue';
import GalleryPhotoType from '../../types/GalleryPhotoType';

export default {
  name: 'GalleryPhoto',
  props: {
    photo: {
      type: Object as PropType<GalleryPhotoType>,
      required: true,
      default: '',
    },
  },
  emits: ['open-photo'],
  methods: {

  },
};
</script>

<style scoped>
</style>
