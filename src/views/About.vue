<template>
  <Card
    msg="Hallo this is a card"
    title="Hello World"
  />
  <Card
    msg="Hallo this is a card"
    title="Hello World"
    text-upper-left="Test"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '../components/Card.vue';

export default defineComponent({
  name: 'App',
  components: {
    Card,
  },
});
</script>
