<template>
  <div>
    <SplashScreen />

    <div class="" :class="[{ visible: show }]">
      <Navbar />
     
      <div class="content">
        <Nuxt />
      </div>
      <Footer />

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
    }, 3900)
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
  overflow-x: clip;
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
    top: 40vh;
    position: absolute;
    z-index: -3;
    height: 70vh;
    transform: scale(2);

    @include bg-tablet {
      top: 20vh ;
      height: 40vh;
    }

    @include mobile {
      top: 70vh;
      height: 80vh;
      width: 20vw;
      transform: scale(3);
    }
  }
  .blob-4 {
    right: 0;
    bottom: 200vh;
    position: absolute;
    z-index: -3;
    width: 20vw;

    @include bg-tablet {
      width: 30vw;
      bottom:170vh;
    }
    @include mobile {
      width: 50vw;
      bottom: 400vh;
    }
  }

  .blob-5 {
    right: 0;
    bottom: 0 !important;
    position: absolute;
    z-index: -3;

    @include bg-tablet {
      

    }
    @include mobile {
      height: 80vh;
      bottom: 90vh;
    }
  }

  .content {
    overflow-x: clip;
  }

  .visible {
    opacity: 0;
    visibility: hidden;
    height: 100vh;
    overflow: clip !important;
    position: fixed;
  }
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
