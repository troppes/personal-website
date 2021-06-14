<template>
  <gallery-header
    :image-key="galleryHeader.imageKey"
    :text="galleryHeader.text"
  />
  <light-gallery
    :settings="{ speed: 500, plugins: plugins }"
    :on-init="onInit"
  >
    <a
      v-for="photo in galleryPhotos"
      :key="photo.id"
      data-lg-size="1406-1390"
      class="gallery-item"
      :data-src="'https://cms.reitz.dev/assets/'+photo.photoKey"
      :data-sub-html="photo.description"
    >
      <img
        :alt="photo.alt"
        class="img-responsive"
        :src="'https://cms.reitz.dev/assets/'+photo.photoKey+'?fit=cover&width=800&quality=80'"
      >
    </a>
  </light-gallery>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import axios from 'axios';
import LightGallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import GalleryHeaderType from '../types/GalleryHeaderType';
import GalleryHeader from '../components/gallery/GalleryHeader.vue';
import GalleryPhotoType from '../types/GalleryPhotoType';

let lightGallery: any = null;

export default defineComponent({
  name: 'App',
  components: {
    GalleryHeader,
    LightGallery,
  },
  data() {
    return {
      galleryPhotos: [] as GalleryPhotoType[],
      galleryHeader: { text: '', imageKey: '' },
      isModalVisible: false,
      modalImage: '',
      plugins: [lgThumbnail, lgZoom],
    };
  },
  watch: {
    galleryPhotos() {
      this.$nextTick(() => {
        lightGallery.refresh();
      });
    },
  },
  mounted() {
    this.fetchGalleryHeader();
    this.fetchGallery();
  },
  methods: {
    onInit: (detail: any) => {
      lightGallery = detail.instance;
    },
    async fetchGalleryHeader() {
      try {
        const response = await axios.get('https://cms.reitz.dev/items/gallerycover');
        const results: GalleryHeaderType = response.data.data;
        this.galleryHeader.text = results.text;
        this.galleryHeader.imageKey = results.image;
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
    async fetchGallery() {
      try {
        // if tag selected -> Filter
        const response = await axios.get('https://cms.reitz.dev/items/gallery');
        const results = response.data.data;
        this.galleryPhotos = results.map((post: any) => ({
          id: post.id,
          photoKey: post.photo,
          description: post.description,
          tags: post.tags,
          alt: post.alt,
        }));
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
