<template>
  <!-- A single blog post -->
  <router-link :to="{ name: 'BlogDetail', params: { id: pkey }}">
    <section class="post">
      <div
        :style="'background-image:url(https://cms.reitz.dev/assets/'+pictureKey+')'"
      />
      <header
        class="post-header"
      >
        <h2 class="post-title">
          {{ title }}
        </h2>

        <p class="post-meta">
          By
          <router-link
            to="/"
            class="post-author"
          >
            {{ author }}
          </router-link>
          under <a
            class="post-category post-category-design"
            href="#"
          >CSS</a> <a
            class="post-category post-category-pure"
            href="#"
          >Pure</a>
        </p>
      </header>

      <div class="post-description">
        <p>
          {{ shortDesc }}
        </p>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    pkey: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
      default: null,
    },
    pictureKey: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: rgb(61, 146, 201);
}

a:hover,
a:focus {
  text-decoration: underline;
}

h3 {
  font-weight: 100;
}

.nav-item a {
  background: transparent;
  border: 2px solid rgb(176, 202, 219);
  color: #fff;
  margin-top: 1em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 85%;
}

.nav-item a:hover,
.nav-item a:focus {
  border: 2px solid rgb(61, 146, 201);
  text-decoration: none;
}

.post {
  padding-bottom: 2em;
}

.post-title {
  font-size: 2em;
  margin-bottom: 0.2em;
}

.post-description {
  font-family: Georgia, "Cambria", serif;
  color: #ffffff;
  line-height: 1.8em;
}

.post-meta {
  color: #999;
  font-size: 90%;
  margin: 0;
}

.post-category {
  margin: 0 0.1em;
  padding: 0.3em 1em;
  color: #fff;
  background: #999;
  font-size: 80%;
}

.post-category-design {
  background: #5aba59;
}

.post-category-pure {
  background: #4d85d1;
}

</style>
