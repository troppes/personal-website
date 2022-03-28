<template>
  <div class="pure-g cards">
    <Card
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :msg="post.description"
      :url="post.url"
      :picture-key="post.picture"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Card from '../components/Project.vue';
import ProjectsType from '../types/ProjectsType';

export default defineComponent({
  name: 'App',
  components: {
    Card,
  },
  data() {
    return {
      posts: [] as ProjectsType[],
    };
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/items/projects?sort=sort,-date_created`, {
          headers: {
            'Access-Control-Allow-Origin': `*`,
            Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
          },
        });
        const results = response.data.data;
        this.posts = results.map((post: ProjectsType) => ({
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

.cards{
  padding-top: 10vh;
}

</style>
