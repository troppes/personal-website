<template>
  <Navbar />
  <Header />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Notification />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Notification from './components/Notification.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Footer,
    Navbar,
    Header,
    HelloWorld,
    Notification,
  },
});
</script>
