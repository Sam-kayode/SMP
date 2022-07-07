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
export default {
  name: 'IndexPage',
  data() {
    return {}
  },
  mounted() {
    this.$drift.identify('--090ojjpp.000jj', {
      name: 'marvellous',
      email: 'marvelloussamkayode@gmail.com',
    })
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
