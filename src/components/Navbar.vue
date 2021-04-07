<template>
  <div class="pure-menu pure-menu-horizontal">
    <router-link
      to="/"
      class="pure-menu-heading pure-menu-link"
    >
      Florian Reitz
    </router-link>
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <router-link
          to="/blog"
          class="pure-menu-heading pure-menu-link"
        >
          Blog
        </router-link>
      </li>
      <li class="pure-menu-item">
        <router-link
          to="/projects"
          class="pure-menu-heading pure-menu-link"
        >
          Projects
        </router-link>
      </li>
      <li class="pure-menu-item">
        <router-link
          to="/gallery"
          class="pure-menu-heading pure-menu-link"
        >
          Gallery
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

.pure-menu{
  position: absolute;
  color: white;
}

.pure-menu-link {
  color:white;
}
.pure-menu-link:hover{
  background: #565d64;
}

</style>
