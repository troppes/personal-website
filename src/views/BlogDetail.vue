<template>
  <div class="content">
    <div class="pure-u-xl-4-24" />
    <div class="pure-g center pure-u-xl-16-24">
      <div class="pure-u-1">
        <h2>{{ blogPost.title }}</h2>
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="pure-u-1"
        v-html="blogPost.text"
      />
    <!-- eslint-enable vue/no-v-html -->
    </div>
    <div class="pure-u-xls-4-24" />
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
.content{
  padding-top: 10vh;
  padding-bottom: 10vh;
}

.center {
  background-color: var(--secondary-color);
  box-shadow: 5px 5px 5px #575e57;
  border: 2px white dashed;
}

</style>
