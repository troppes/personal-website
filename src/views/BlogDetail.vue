<template>
  <div class="pure-g">
    <div class="pure-u-1">
      <h2>{{ blogPost.title }}</h2>
    </div>
    <div
      class="pure-u-1 pure-img"
      :style="blogPost.image?'background-image: url(https://cms.reitz.dev/assets/'+blogPost.image+')': 'background-color: var(--background-colour)'"
    />
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="pure-u-1"
      v-html="blogPost.text"
    />
    <!-- eslint-enable vue/no-v-html -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import BlogPostType from '../types/BlogPostType';

export default defineComponent({
  name: 'BlogDetail',
  components: {
  },
  data() {
    return {
      blogPost: {} as BlogPostType,
    };
  },
  mounted() {
    this.fetchBlogPost();
  },
  methods: {
    async fetchBlogPost() {
      try {
        const response = await axios.get(`https://cms.reitz.dev/items/blogposts/${this.$route.params.id}?fields=*.*`);
        this.blogPost = response.data.data;
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
