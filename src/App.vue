<template>
  <img alt="Vue logo" src="./assets/logo.png" class="p-6 max-w-sm mx-auto bg-white rounded-xl flex items-center space-x-4"/>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Notification />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Notification from './components/Notification.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Notification
  }
})
</script>
