<template>
  <gallery-header
    :image-key="galleryHeader.imageKey"
    :text="galleryHeader.text"
  />
  <div id="gallery">
    <GalleryPhoto
      v-for="photo in galleryPhotos"
      :key="photo.id"
      :photo="photo"
      @open-photo="openPhoto"
    />
  </div>
  <teleport to="body">
    <div
      v-if="isModalVisible"
      class="modal-wrapper"
      @click="isModalVisible = false"
    >
      <div class="modal">
        <img
          :src="modalImage"
          width="400"
        >
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import GalleryHeaderType from '../types/GalleryHeaderType';
import GalleryHeader from '../components/gallery/GalleryHeader.vue';
import GalleryPhotoType from '../types/GalleryPhotoType';
import GalleryPhoto from '../components/gallery/GalleryPhoto.vue';

export default defineComponent({
  name: 'App',
  components: {
    GalleryHeader,
    GalleryPhoto,
  },
  data() {
    return {
      galleryPhotos: [] as GalleryPhotoType[],
      galleryHeader: { text: '', imageKey: '' },
      isModalVisible: false,
      modalImage: '',
    };
  },
  mounted() {
    this.fetchGalleryHeader();
    this.fetchGallery();
  },
  methods: {
    openPhoto(photo: GalleryPhotoType) {
      this.modalImage = `https://cms.reitz.dev/assets/${photo.photoKey}`;
      this.isModalVisible = true;
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

.modal-wrapper {
  z-index: 20;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  transition: opacity .3s ease;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
