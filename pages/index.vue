<template>
  <div class="home">
     <img src="~/static/images/shape1.svg" alt="" class="blob-1" />
      <img src="~/static/images/shape5.svg" alt="" class="blob-2" />
      <img src="~/static/images/shape6.svg" alt="" class="blob-3" />
      <img src="~/static/images/shape8.svg" alt="" class="blob-4" />
      <img src="~/static/images/shape9.svg" alt="" class="blob-5" />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <Testimonial />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'IndexPage',
  data() {
    return {}
  },
  mounted() {
    this.$drift.show()
  },
}
</script>

<style lang="scss" scoped>
#drift-frame-chat {
  max-width: 400px !important;
  margin-left: auto;
  height: 60vh;
  @include mobile {
    height: 100vh;
    width: 100vw;
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
      bottom: 360vh;
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
    padding-top: 7vh;
    overflow-x: clip;

    @include tablet {
      padding-top: 1vh;
    }
  }

  .visible {
    opacity: 0;
    visibility: hidden;
    height: 100vh;
    overflow: clip !important;
    position: fixed;
  }
}
</style>
