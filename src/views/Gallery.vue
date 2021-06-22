<template>
  <gallery-header
    :picture-key="galleryHeader.imageKey"
    :text="galleryHeader.text"
  />
  <div class="masonry-wrapper">
    <div class="pure-g">
      <div
        v-for="tag in tags"
        :key="tag.id"
        class="pure-u-1-2 pure-u-lg-1-4 pure-u-xl-1-8"
      >
        <a
          class="tag"
          @click="tagClicked(tag)"
        >{{ tag.tag }}</a>
      </div>
      <div
        class="pure-u-1-2 pure-u-lg-1-4 pure-u-xl-1-8"
      >
        <a
          class="show-all"
          @click="moreTagsClicked"
        >{{ allTagsButton }}</a>
      </div>
      <div class="pure-u-1-2 pure-u-lg-1-4 pure-u-xl-1-8">
        <a
          class="reset"
          @click="tagClicked(null)"
        >Reset</a>
      </div>
    </div>
    <light-gallery
      :settings="{ speed: 500, plugins: plugins, licenseKey: getLicense()}"
      :on-init="onInit"
      class="masonry"
    >
      <a
        v-for="photo in galleryPhotos"
        :key="photo.id"
        :data-src="'https://cms.reitz.dev/assets/'+photo.photoKey"
        :data-sub-html="photo.description"
        data-pinterest-text="Check out this Photo I found on https://reitz.dev/gallery"
        data-tweet-text="Check out this Photo I found on https://reitz.dev/gallery"
        :data-slide-name="photo.photoKey"
        :data-facebook-share-url="'https://cms.reitz.dev/assets/'+photo.photoKey"
        :data-twitter-share-url="'https://cms.reitz.dev/assets/'+photo.photoKey"
        :data-pinterest-share-url="'https://cms.reitz.dev/assets/'+photo.photoKey"
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
import lgFullScreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';

import GalleryHeaderType from '../types/GalleryHeaderType';
import GalleryHeader from '../components/gallery/GalleryHeader.vue';
import GalleryPhotoType from '../types/GalleryPhotoType';
import GalleryTagType from '../types/GalleryTagType';

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
      plugins: [lgThumbnail, lgZoom, lgFullScreen, lgShare],
      offset: 10,
      tags: [] as GalleryTagType[],
      allTags: [] as GalleryTagType[],
      currentTag: -1,
      allTagsButton: 'More tags',
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
    this.getMoreImages();
    this.getAllTags();
  },
  methods: {
    onInit: (detail: any) => {
      lightGallery = detail.instance;
    },
    tagClicked(tag: GalleryTagType | null) {
      this.currentTag = tag !== null ? tag.id : -1;
      this.fetchGallery();
    },
    moreTagsClicked() {
      if (this.tags.length === this.allTags.length) {
        this.tags = this.tags.slice(0, 6);
        this.allTagsButton = 'More tags';
      } else {
        this.tags = this.allTags;
        this.allTagsButton = 'Less tags';
      }
    },
    async fetchGalleryHeader() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/items/gallery_cover`, {
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
        let url = `${import.meta.env.VITE_APP_BACKEND_URL}/items/gallery?limit=${this.offset}`;
        url = this.currentTag === -1 ? url : `${url}&filter[tags][gallery_tags_id]=${this.currentTag}`;
        const response = await axios.get(url, {
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
    async getMoreImages() {
      window.onscroll = async () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/items/gallery?offset=${this.offset}`, {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
            },
          });
          const results = response.data.data;
          this.galleryPhotos = this.galleryPhotos.concat(results.map((post: any) => ({
            id: post.id,
            photoKey: post.photo,
            description: post.description,
            tags: post.tags,
            alt: post.alt,
          })));
          this.offset += 10;
        }
      };
    },
    async getAllTags() {
      const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/items/gallery_tags`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
        },
      });
      const results = response.data.data;

      this.allTags = results.map((tag: any) => ({
        id: tag.id,
        tag: tag.tag,
        timesUsed: Object.keys(tag.gallery).length,
      }));

      this.allTags.sort((a, b) => {
        if (a.timesUsed > b.timesUsed) return -1;
        if (a.timesUsed < b.timesUsed) return 1;
        return 0;
      });

      this.tags = [...this.allTags].slice(0, 6);
    },
    getLicense() {
      return import.meta.env.VITE_APP_LIGHTGALLERY_KEY;
    },
  },
});
</script>

<style scoped>

.masonry-wrapper {
  padding-top: 10vh;
  margin: auto;
  width: 80%;
}

.masonry {
  columns: 1;
}

.masonry-item {
  display: inline-block;
  margin-top: 1.5vh;
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

.show-all {
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  background: var(--secondary-color);
  border-radius: 3px;
  color: var(--primary-text-color);
  display: inline-block;
  height: 1.625rem;
  line-height: 1.625rem;
  padding: 0 1.25rem 0 1.438rem;
  position: relative;
  margin: 0 0.625rem 0.625rem 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
}

.tag {
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  background: var(--secondary-color);
  border-radius: 3px 0 0 3px;
  color: var(--primary-text-color);
  display: inline-block;
  height: 1.625rem;
  line-height: 1.625rem;
  padding: 0 1.25rem 0 1.438rem;
  position: relative;
  margin: 0 0.625rem 0.625rem 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
}

.reset {
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  background: var(--secondary-color);
  border-radius: 3px;
  color: var(--headline-text-color);
  display: inline-block;
  height: 1.625rem;
  line-height: 1.625rem;
  padding: 0 1.25rem 0 1.438rem;
  position: relative;
  margin: 0 0.625rem 0.625rem 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
}

.tag::before {
  background: var(--primary-color);
  border-radius: 0.625rem;
  content: '';
  height: 0.375rem;
  left: 0.625rem;
  position: absolute;
  width: 0.375rem;
  top: 0.625rem;
}

.tag::after {
  background: var(--primary-color);
  border-bottom: 0.813rem solid transparent;
  border-left: 0.625rem solid var(--secondary-color);;
  border-top: 0.813rem solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}

.tag:hover, .reset:hover, .show-all:hover {
  background-color: var(--fourth-color);
  color: var(--headline-text-color);
}

.tag:hover::after {
  border-left-color: var(--fourth-color);
}

</style>
