import { createApp } from 'vue';
import Particles from 'particles.vue3';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import './styles/index.css';
import Home from './views/Home.vue';
import About from './views/About.vue';

const routes:unknown = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[], // short for `routes: routes`
});

createApp(App).use(router).use(Particles).mount('#app');
