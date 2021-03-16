<template>
  <Header />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Notification />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Notification from './components/Notification.vue';
import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    HelloWorld,
    Notification,
  },
});
</script>
