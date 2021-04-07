<template>
  <Navbar />
  <router-view />
  <Footer v-if="!$route.meta.hideFooter" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Footer,
    Navbar,
  },
});
</script>
