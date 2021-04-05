<template>
  <Header />
  <AboutMe
    :title="me.title"
    :msg="me.description"
    :picture-key="me.picture"
  />
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
import AboutMe from '../components/AboutMe.vue';

export default defineComponent({
  name: 'App',
  components: {
    AboutMe,
    Card,
    Header,
  },
  data() {
    return {
      section: 'home',
      posts: [], // Todo add Post and see it crashing
      me: [],
    };
  },
  mounted() {
    this.fetProjects();
    this.fetchAboutMe();
  },
  methods: {
    async fetProjects() {
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
    async fetchAboutMe() {
      try {
        const response = await axios.get('https://cms.reitz.dev/items/aboutme');
        this.me = response.data.data;
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
