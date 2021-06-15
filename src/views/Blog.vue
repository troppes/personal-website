<template>
  <div
    id="layout"
    class="pure-g"
  >
    <div class="sidebar pure-u-1 pure-u-md-1-4">
      <div class="header">
        <h1 class="brand-title">
          {{ title }}
        </h1>
        <div
          class="brand-tagline"
          v-html="tagline"
        />
        <social-media size="40" />
      </div>
    </div>
    <div class="content pure-u-1 pure-u-md-3-4">
      <BlogPost
        v-for="post in blogPosts"
        :key="post.id"
        :pkey="post.id"
        :title="post.title"
        :short-desc="post.shortDescription"
        :picture-key="post.image"
        :author="post.author"
        :date="post.dateCreated"
        :alt="post.id % 2 === 0"
      />
      <Footer class="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import BlogPost from '../components/blog/BlogPost.vue';
import BlogPostType from '../types/BlogPostType';
import BlogMetaDataType from '../types/BlogMetaDataType';
import SocialMedia from '../components/SocialMedia.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Blog',
  components: {
    Footer,
    SocialMedia,
    BlogPost,
  },
  data() {
    return {
      blogPosts: [] as BlogPostType[],
      title: '',
      tagline: '',
    };
  },
  mounted() {
    this.fetchBlogPosts();
    this.fetchBlogMeta();
  },
  methods: {
    async fetchBlogPosts() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/items/blogposts?fields=*.*`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
          },
        });
        const results = response.data.data;
        this.blogPosts = results.map((post: any) => ({
          id: post.id,
          title: post.title,
          image: post.image,
          shortDescription: post.short_description,
          dateCreated: new Date(Date.parse(post.date_created)),
          author: `${post.user_created.first_name} ${post.user_created.last_name}`,
        }));
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
    async fetchBlogMeta() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/items/blogmetadata`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
          },
        });
        const result: BlogMetaDataType = response.data.data;
        this.title = result.title;
        this.tagline = result.tagline;
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

#layout {
  padding-top: 8vh;
}

.header {
  text-align: center;
  top: auto;
  margin: 3em auto;
}

.sidebar {
  background: var(--secondary-color);
}

.brand-title,
.brand-tagline {
  margin: 0;
}

.brand-title {
  text-transform: uppercase;
}

.brand-tagline {
  font-weight: 300;
}

.content {
  padding: 2em 1em 0;
  margin-top: 2vh;
}

.footer {
  padding-top: 8vh;
}

@media (min-width: 48em) {
  .content {
    float: left;
    padding: 2em 3em 0;
    margin-left: 25%;
  }

  .header {
    margin: 80% 2em 0;
  }

  .sidebar {
    margin-top: 8vh;
    position: fixed;
    top: 0;
    bottom: 0;
  }
}
</style>
