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
        <!-- Disable ESLint since the Data is from a trusted source-->
        <!-- eslint-disable vue/no-v-html -->
        <div
          class="brand-tagline"
          v-html="tagline"
        />
        <!-- eslint-enable vue/no-v-html -->
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a
                class="pure-button"
                href="https://purecss.io"
              >Social Media Buttons</a>
            </li>
          </ul>
        </nav>
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
        :alt="post.id % 2 === 0"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import BlogPost from '../components/blog/BlogPost.vue';
import BlogPostType from '../types/BlogPostType';
import BlogMetaDataType from '../types/BlogMetaDataType';

export default defineComponent({
  name: 'Blog',
  components: {
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
        const response = await axios.get('https://cms.reitz.dev/items/blogposts?fields=*.*');
        const results = response.data.data;
        this.blogPosts = results.map((post) => ({
          id: post.id.toString(),
          title: post.title,
          image: post.image,
          shortDescription: post.short_description,
          dateCreated: post.date_created,
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
        const response = await axios.get('https://cms.reitz.dev/items/blogmetadata');
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

footer{
  color:green;
}

#layout {
  padding: 0;
}

.header {
  text-align: center;
  top: auto;
  margin: 3em auto;
}

.sidebar {
  background: var(--secondary-color);
  border-right: 2px white dashed;
  border-top: 2px white dashed;
  box-shadow: 5px 5px 5px #575e57;
  border-radius: 5px;
  color: #fff;
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

.nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-item {
  display: inline-block;
  *display: inline;
  zoom: 1;
}

.content {
  padding: 2em 1em 0;
  margin-top: 2vh;
}

@media (min-width: 48em) {
  .content {
    padding: 2em 3em 0;
    margin-left: 25%;
  }

  .header {
    margin: 80% 2em 0;
    text-align: right;
  }

  .sidebar {
    margin-top: 5vh;
    position: fixed;
    z-index: -1;
    top: 0;
    bottom: 0;
  }
}
</style>
