<template>
  <Navbar />
  <Header />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Notification />
  <Card
    msg="Hallo this is a card"
    title="Hello World"
  />
  <Card
    msg="Hallo this is a card"
    title="Hello World"
    text-upper-left="Test"
  />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Notification from './components/Notification.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Card from './components/Card.vue';

export default defineComponent({
  name: 'App',
  components: {
    Card,
    Footer,
    Navbar,
    Header,
    HelloWorld,
    Notification,
  },
});
</script>
