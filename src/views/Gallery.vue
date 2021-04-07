<template>
  <gallery-header />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { Post } from '../types/Post';
import GalleryHeader from '../components/gallery/GalleryHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    GalleryHeader,
  },
  data() {
    return {
      section: 'home',
      posts: [] as Post[],
    };
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get('https://cms.reitz.dev/items/projects');
        const results = response.data.data;
        this.posts = results.map((post: Post) => ({
          id: post.id.toString(),
          title: post.title,
          description: post.description,
          url: post.url,
          dateCreated: post.dateCreated,
          picture: post.picture,
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
