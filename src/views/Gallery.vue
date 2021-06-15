<template>
  <gallery-header
    :picture-key="galleryHeader.imageKey"
    :text="galleryHeader.text"
  />
  <div class="masonry-wrapper">
    <light-gallery
      :settings="{ speed: 500, plugins: plugins }"
      :on-init="onInit"
      class="masonry"
    >
      <a
        v-for="photo in galleryPhotos"
        :key="photo.id"
        :data-src="'https://cms.reitz.dev/assets/'+photo.photoKey"
        :data-sub-html="photo.description"
        class="masonry-item"
      >
        <img
          :alt="photo.alt"
          class="masonry-content pure-img"
          :src="'https://cms.reitz.dev/assets/'+photo.photoKey+'?fit=cover&width=400&quality=80'"
        >
      </a>
    </light-gallery>
  </div>
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
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/items/gallerycover`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
          },
        });

        const results: GalleryHeaderType = response.data.data;
        if (results.text != null) this.galleryHeader.text = results.text;
        if (results.image != null) this.galleryHeader.imageKey = results.image;
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
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/items/gallery`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
          },
        });
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

.masonry-wrapper {
  padding-top: 8vh;
  max-width: 130vh;
  margin-right: auto;
  margin-left: auto;
}

.masonry {
  columns: 1;
  column-gap: 2vh;
}

.masonry-item {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 1vh;
  transition: transform .5s ease-in-out;

}

.masonry-item:hover {
  transform: scale(1.05);
  cursor: pointer;
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    columns: 2;
  }
}

@media only screen and (min-width: 1024px) {
  .masonry {
    columns: 3;
  }
}

.masonry-item, .masonry-content {
  border-radius: 4px;
  overflow: hidden;
}

</style>
