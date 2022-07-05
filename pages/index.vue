<template>
  <div>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <Testimonial />
    <ContactMe />
  </div>
</template>

<script>
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

<style scoped lang="scss"></style>
