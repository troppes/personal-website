<template>
  <Header />
  <AboutMe
    :title="me.title"
    :msg="me.description"
    :picture-key="me.picture"
  />
  <div class="pure-g cards">
    <Card
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :msg="post.description"
      :url="post.url"
      :picture-key="post.picture"
    />
    <Card
      msg="All projects can be found here"
      title="All projects"
      :internal="true"
      url="/projects"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Card from '../components/Project.vue';
import Header from '../components/Header.vue';
import ProjectsType from '../types/ProjectsType';
import AboutMeType from '../types/AboutMeType';
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
      posts: [] as ProjectsType[],
      me: {} as AboutMeType,
    };
  },
  mounted() {
    this.fetchProjects();
    this.fetchAboutMe();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/items/projects?limit=3&sort=sort,-date_created`, {
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
    async fetchAboutMe() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/items/aboutme`, {
          headers: {
            'Access-Control-Allow-Origin': `*`,
            Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
          },
        });
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

<style scoped>

.cards{
  padding-top: 10vh;
}

</style>
