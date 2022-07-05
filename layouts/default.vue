<template>
  <div>
    <Transition name="fade" appear>
      <SplashScreen v-if="show" />
    </Transition>

    <div :style="{ display: show ? 'none' : '' }" class="">
      <Navbar />
      <img src="~/static/images/shape1.svg" alt="" class="blob-1" />
      <img src="~/static/images/shape5.svg" alt="" class="blob-2" />
      <img src="~/static/images/shape6.svg" alt="" class="blob-3" />
      <img src="~/static/images/shape8.svg" alt="" class="blob-4" />
      <div class="content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
      show: true,
    }
  },
  beforeCreate() {
    setTimeout(() => {
      this.show = false
    }, 3500)
  },
  methods: {},
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
  width: 100vw !important;

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
  font-family: 'open sans', sans-serif;
  overflow-x: hidden !important;
  position: relative;
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
      top: 210vh;
      height: 80vh;
      width: 40vw;
      transform: scale(3);
    }
  }
  .blob-4 {
    right: 0;
    top: 300vh;
    position: absolute;
    z-index: -3;
    width: 20vw;

    @include bg-tablet {
      width: 30vw;
    }
    @include mobile {
      width: 50vw;
      top: 490vh;
    }
  }

  .content {
    padding-top: 7vh;
    overflow-x: clip;

    @include tablet {
      padding-top: 1vh;
    }
  }
}

.body {
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
  margin-left: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  // margin-left: -100vw !important;
}
</style>
