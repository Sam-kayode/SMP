<template>
  <div>
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
</style>
