<template>
  <footer>
    <div class="pure-g">
      <div class="pure-u-1-2">
        <div class="pure-g">
          <div class="pure-u-1">
            <h2>Contact</h2>
          </div>
          <div class="pure-u-1">
            For questions criticism or feedback: <a href="mailto:florian@reitz.dev">florian@reitz.dev</a>
          </div>
          <div class="pure-u-1">
            © 2019 Florian Reitz
          </div>
        </div>
      </div>
      <div class="pure-u-1-2">
        <div class="pure-g">
          <div class="pure-u-1">
            <h2>Social Media</h2>
          </div>
          <div class="pure-u-1 social">
            <a href="https://www.linkedin.com/in/florian-reitz-16a10b150/">
              <img
                alt="linkedin"
                width="30"
                src="../assets/social/linkedin.svg"
              >
            </a>
            <a href="https://www.instagram.com/floreitz/">
              <img
                alt="instagram"
                width="30"
                src="../assets/social/instagram.svg"
              >
            </a>
            <a href="https://github.com/troppes/">
              <img
                alt="github"
                width="30"
                src="../assets/social/github.svg"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.social a{
  margin-right: 1vh;
}

</style>
