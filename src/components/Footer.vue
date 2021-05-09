<template>
  <footer>
    <div class="pure-g">
      <div
        class="pure-u-md-1-3 pure-u-1-1"
        v-html="leftText"
      />
      <div
        class="pure-u-md-1-3 pure-u-1-1"
        v-html="middleText"
      />
      <div
        class="pure-u-md-1-3 pure-u-1-1"
        v-html="rightText"
      />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Blog',
  data() {
    return {
      leftText: '',
      middleText: '',
      rightText: '',
    };
  },
  mounted() {
    this.fetchFooter();
  },
  methods: {
    async fetchFooter() {
      try {
        const response = await axios.get('https://cms.reitz.dev/items/footer');
        const results = response.data.data;
        this.leftText = results.left_box;
        this.middleText = results.middle_box;
        this.rightText = results.right_box;
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

footer {
  text-align: center;
}

</style>
