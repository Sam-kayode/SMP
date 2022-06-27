<template>
  <div class="body" :style="styleObject">
    <Navbar :visible="visible" />
    <img src="~/static/images/shape1.svg" alt="" class="blob-1" />
    <img src="~/static/images/shape5.svg" alt="" class="blob-2" />
    <img src="~/static/images/shape6.svg" alt="" class="blob-3" />
    <div class="content"><Nuxt /></div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
      scroll: true,
    }
  },
  computed: {
    styleObject() {
      return {
        'overflow-y': this.scroll ? 'auto' : 'hidden',
      }
    },
  },
  methods: {
    visible() {
      this.scroll = !this.scroll
    },
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 16px;
  font: sans-serif;

  @include mobile {
    font-size: 8px;
  }
  @include tablet {
    font-size: 10px;
  }
  @include bg-tablet {
    font-size: 12px;
  }
}

body {
  overflow-x: hidden;
  font-family: 'open sans', sans-serif;

  .blob-1 {
    left: -7vw;
    top: -6vw;
    position: absolute;
    z-index: -3;
    width: 25vw;

    @include mobile {
      width: 80vw;
      left: -30vw;
    }
  }
  .blob-2 {
    right: 20vw;
    top: -13vw;
    position: absolute;
    z-index: -3;
    width: 20vw;
  }

  .blob-3 {
    left: -5px;
    top: 50vh;
    position: absolute;
    z-index: -3;
    height: 70vh;
    @include mobile {
      top: 100vh;
    }
  }

  .content {
    padding-top: 7vh;

    @include mobile {
      padding-top: 2vh;
    }
  }
}
</style>
