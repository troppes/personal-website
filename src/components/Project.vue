<template>
  <div
    class="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4 card"
  >
    <ol class="articles">
      <li
        class="articles__article"
        style="--animation-order:1"
      >
        <a
          :href="url"
          class="articles__link"
        >
          <div
            class="articles__content articles__content--lhs"
            :style="pictureKey ? 'background-image:url(https://cms.reitz.dev/assets/'+pictureKey+')' : 'background-color: var(--colour-background)'"
          >
            <h2 class="articles__title">
              {{ title }}
            </h2>
            <div class="articles__footer">
              <p>{{ msg }}</p>
            </div>
          </div>
          <div
            class="articles__content articles__content--rhs"
            :style="pictureKey ? 'background-image:url(https://cms.reitz.dev/assets/'+pictureKey+')' : 'background-color: var(--colour-background)'"
            aria-hidden="true"
          >
            <h2 class="articles__title">
              {{ title }}
            </h2>
            <div class="articles__footer">
              <p>{{ msg }}</p>
            </div>
          </div>
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    title: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
    url: {
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

.articles {
  margin: calc(var(--base-grid) * 2) auto calc(var(--base-grid) * 5);
  display: grid;
  grid-row-gap: calc(var(--base-grid) * 8);
  grid-column-gap: calc(var(--base-grid) * 6);
  grid-template-columns: repeat(auto-fit, minmax(calc(var(--base-grid) * 35), 1fr));
  justify-items: center;
}

.articles__article {
  cursor: pointer;
  display: block;
  position: relative;
  perspective: 1000px;
  animation-name: animateIn;
  animation-duration: .35s;
  animation-delay: calc(var(--animation-order) * 100ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

.articles__article:before {
  content: "";
  position: absolute;
  top: calc(var(--base-grid) * -2);
  left: calc(var(--base-grid) * -2);
  border: 2px dashed var(--colour-background);
  background-image: repeating-linear-gradient(-24deg, transparent, transparent 4px, var(--colour-background-stripes) 0,
    var(--colour-background-stripes) 5px);
  z-index: -1;
}

.articles__article,
.articles__article:before {
  width: calc(var(--base-grid) * 35);
  height: calc(var(--base-grid) * 35);
}

.articles__link {
  background-color: var(--main-color);
  border: 2px solid var(--colour-background);
  display: block;
  width: 100%;
  height: 100%;
}

.articles__link:after {
  content: "";
  position: absolute;
  top: 50%;
  right: calc(var(--base-grid) * 3);
  width: calc(var(--base-grid) * 2);
  height: calc(var(--base-grid) * 2);
  margin-top: calc(var(--base-grid) * -1);
  clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
  background-color: var(--colour-background);
  opacity: 0;
  transition: opacity .5s ease-in, transform .3s ease-in-out 0ms;
}

.articles__content {
  background-color: var(--colour-background);
  color: var(--colour-text);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: calc(var(--base-grid) * 2);
  display: flex;
  flex-direction: column;
  border: 2px solid var(--colour-background);
}

.articles__content--lhs {
  clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
}

.articles__content--rhs {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  transition: transform .5s ease-in-out, background-color .4s ease-in-out;
}

.articles__title {
  font-size: calc(var(--base-grid) * 4);
  line-height: 1.125;
  font-weight: 700;
  letter-spacing: -.02em;
}

.articles__footer {
  background: rgba(255, 128, 128, 0.6);
  border: var(--colour-background) 2px dashed;
  padding-left: 2%;
  padding-right: 2%;
  margin-top: auto;
  font-size: calc(var(--base-grid) * 2);
  line-height: calc(var(--base-grid) * 2);
  display: flex;
  justify-content: space-between;
}

.articles__link:hover .articles__content--rhs {
  background-color: var(--colour-background-folded);
  transform: rotateY(-50deg);
}

.articles__link:hover:after {
  opacity: 1;
  transform: translateX(calc(var(--base-grid) * 1.5));
  transition: opacity .5s ease-in, transform .3s ease-in-out .25s;
}

</style>
