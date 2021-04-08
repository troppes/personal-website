import { createApp } from 'vue';
import Particles from 'particles.vue3';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import './styles/index.css';
import Home from './views/Home.vue';
import Gallery from './views/Gallery.vue';
import Blog from './views/Blog.vue';
import BlogDetail from './views/BlogDetail.vue';
import Projects from './views/Projects.vue';

const routes:unknown = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/gallery', component: Gallery, name: 'Gallery' },
  { path: '/projects', component: Projects, name: 'Projects' },
  { path: '/blog/:id', component: BlogDetail, name: 'BlogDetail' },
  {
    path: '/blog', component: Blog, name: 'Blog', meta: { hideFooter: true },
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Home }, // Todo Implement not found component

];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[], // short for `routes: routes`
});

createApp(App).use(router).use(Particles).mount('#app');
