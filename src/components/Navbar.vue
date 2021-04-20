<template>
  <header class="header">
    <router-link
      to="/"
      class="logo"
    >
      Florian Reitz
    </router-link>
    <input
      id="menu-btn"
      class="menu-btn"
      type="checkbox"
    >
    <label
      class="menu-icon"
      for="menu-btn"
    ><span class="navicon" /></label>
    <ul class="pure-menu-list menu">
      <li class="pure-menu-item">
        <router-link
          to="/"
          class="pure-menu-link"
        >
          Home
        </router-link>
      </li>
      <li class="pure-menu-item">
        <router-link
          to="/blog"
          class="pure-menu-link"
        >
          Blog
        </router-link>
      </li>
      <li class="pure-menu-item">
        <router-link
          to="/projects"
          class="pure-menu-link"
        >
          Projects
        </router-link>
      </li>
      <li class="pure-menu-item">
        <router-link
          to="/gallery"
          class="pure-menu-link"
        >
          Gallery
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  components: {},
});
</script>

<style scoped>

a {
  color: var(--primary-text-color);
}

a:active {
  display: none;
}

.menu .router-link-active {
  background-color: var(--secondary-color);
}

/* header */

.header {
  background-color: var(--primary-color);
  position: absolute;
  width: 100%;
  z-index: 3;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}

.header li a {
  display: block;
  padding: 20px 20px;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: var(--secondary-color);
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: var(--primary-text-color);
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: var(--primary-text-color);
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header {
    background: none;
  }

  .menu .router-link-active {
    background-color: var(--secondary-color);
    border-bottom: white 2px solid;
    border-left: white 2px solid;
    border-right: white 2px solid;
  }

  a {
    margin-left: 0.2vh;
  }

  a:hover{
    border-bottom: white 2px solid;
    border-left: white 2px solid;
    border-right: white 2px solid;
  }

  .header li {
    float: left;
  }

  .header li a {
    padding: 20px 30px;
  }

  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }

  .header .menu-icon {
    display: none;
  }

  .header li a:hover,
  .header .menu-btn:hover {
    background-color: var(--secondary-color);
    -webkit-border-bottom-right-radius: 10px;
    -webkit-border-bottom-left-radius: 10px;
    -moz-border-radius-bottomright: 10px;
    -moz-border-radius-bottomleft: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .menu .router-link-active {
    background-color: var(--secondary-color);
    -webkit-border-bottom-right-radius: 10px;
    -webkit-border-bottom-left-radius: 10px;
    -moz-border-radius-bottomright: 10px;
    -moz-border-radius-bottomleft: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

}

@media (max-width: 48em) {

  .menu .router-link-active {
    background-color: var(--secondary-color);
    border: white 2px solid;
  }
}
</style>
