<template>
  <div class="carousel-container">
    <VueSlickCarousel
      :arrows="true"
      :dots="true"
      v-bind="settings"
      @beforeChange="handleChange"
    >
      <div class="contain"><div class="item">1</div></div>
      <div class="contain"><div class="item">2</div></div>
      <div class="contain"><div class="item">3</div></div>
      <div class="contain"><div class="item">4</div></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
      },
    }
  },
  methods: {
    handleChange(lop, val) {
      console.log(val)
      this.index = val
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  width: 60vw !important;
  height: 300px;
  font-size: 150px;
  text-align: center;
  background: rgb(234, 177, 253);
  margin: 0 auto !important;
}

.carousel-container {
  overflow: hidden;
   margin: 170px auto 40px auto;
  width: 60vw;

  @include bg-tablet {
    margin-top: 15vh;
  }

}
</style>
