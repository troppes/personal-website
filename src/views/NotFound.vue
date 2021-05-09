<template>
  <Header />
  <div class="pure-g">
    <h1 class="pure-u-1-1">
      {{ title }}
    </h1>
    <div
      class="pure-u-1-1"
      v-html="text"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'NotFound',
  data() {
    return {
      title: '',
      text: '',
    };
  },
  mounted() {
    this.fetchFooter();
  },
  methods: {
    async fetchFooter() {
      try {
        const response = await axios.get('https://cms.reitz.dev/items/not_found');
        const results = response.data.data;
        this.title = results.title;
        this.text = results.text;
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

.pure-g{
  padding-top: 8vh;
  padding-bottom: 20vh;
  text-align: center;
}

</style>
