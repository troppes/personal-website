<template>
  <gallery-header
    :image-key="imageKey"
    :text="text"
  />
  <h2>Coming soon!</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import GalleryHeaderType from '../types/GalleryHeaderType';
import GalleryHeader from '../components/gallery/GalleryHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    GalleryHeader,
  },
  data() {
    return {
      text: '',
      imageKey: '',
    };
  },
  mounted() {
    this.fetchGalleryHeader();
  },
  methods: {
    async fetchGalleryHeader() {
      try {
        const response = await axios.get('https://cms.reitz.dev/items/gallerycover');
        const results: GalleryHeaderType = response.data.data;
        this.text = results.text;
        this.imageKey = results.image;
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          // eslint-disable-next-line no-console
          console.log('Server Error:', err);
        } else if (err.request) {
          // client never received a response, or request never left
          // eslint-disable-next-line no-console
          console.log('Network Error:', err);
        } else {
          // eslint-disable-next-line no-console
          console.log('Client Error:', err);
        }
      }
    },
  },
});
</script>

<style scoped>

h2 {
  text-align: center;
  font-size: 20vh;
}

</style>
