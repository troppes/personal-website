<template>
  <Header />
  <Card
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :msg="post.description"
    :url="post.url"
    :picture-key="post.picture"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Card from '../components/Card.vue';
import Header from '../components/Header.vue';
import { Post } from '../types/post.ts';

export default defineComponent({
  name: 'App',
  components: {
    Card,
    Header,
  },
  data() {
    return {
      section: 'home',
      posts: [], // Todo add Post and see it crashing
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        const response = await axios.get('https://cms.reitz.dev/items/projects');
        const results = response.data.data;
        this.posts = results.map((post:Post) => ({
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
