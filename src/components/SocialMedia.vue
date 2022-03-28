<template>
  <div class="pure-g social">
    <div
      v-for="social in socialMedia"
      :key="social.id"
      :class="'pure-u-1-'+socialMedia.length "
    >
      <a :href="social.url">
        <img
          :alt="social.alt"
          :width="size"
          :src="getImageUrl(social)"
        >
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import SocialMediaType from '../types/SocialMediaType';

export default defineComponent({
  name: 'SocialMedia',
  components: {},
  props: {
    size: {
      type: String,
      required: false,
      default: '30',
    },
  },
  data() {
    return {
      socialMedia: [] as SocialMediaType[],
    };
  },
  mounted() {
    this.fetchSocialMedia();
  },
  methods: {
    getImageUrl(social: SocialMediaType) {
      return import.meta.env.VITE_APP_EXTERNAL_ASSETS_URL + social.imageKey;
    },
    async fetchSocialMedia() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/items/social_media`, {
          headers: {
            'Access-Control-Allow-Origin': `${import.meta.env.VITE_APP_BACKEND_URL}`,
            Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
          },
        });
        const results = response.data.data;
        this.socialMedia = results.map((social: any) => ({
          id: social.id.toString(),
          url: social.url,
          test: social.alt,
          imageKey: social.image,
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

</style>
