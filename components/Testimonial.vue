<template>
  <div class="my-5 carousel-container">
    <h2>What do my clients say ?</h2>
    <VueSlickCarousel
      v-bind="settings"
      ref="carousel"
      @beforeChange="beforeChange"
    >
      <div v-for="n in 5" :key="n" class="review">
        <div class="rev-img"><img src="" alt="" /></div>
        <p class="statement">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          earum ex ullam harum sed, aspernatur porro deleniti nostrum quas
          impedit qui exusantium fuga maiores? Facilis, aperiam
        </p>
        <p class="name">Sam-kayode marvellous</p>
        <p class="title">Senior developer</p>
        <img src="~/static/images/quote.svg" alt="" class="quote" />
      </div>
    </VueSlickCarousel>
    <div class="controls">
      <div
        v-for="(n, i) in 5"
        :key="n"
        class="dash"
        :class="{ active: index == i }"
        @click="goTo(i)"
      ></div>
    </div>
    <div class="right" @click="showPrev"><p>&#x2190;</p></div>
    <div class="left"  @click="showNext"><p>&#x2192;</p></div>
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
      index: null,
      settings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {},
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  methods: {
    beforeChange(_, index) {
      console.log(index)
      this.index = index
    },
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()

    },
    goTo(index) {
      this.$refs.carousel.goTo(index)
      console.log(index)
    },
  },
}
</script>

<style lang="scss" scoped>
.carousel-container {
  position: relative;
  width: 90vw;
  margin: 0 auto;
  padding-top: 170px;

  @include bg-tablet {
    margin-top: 15vh !important;
    padding-top: 0;
  }

  h2 {
    font-family: 'josefin sans', sans-serif;
    font-size: 64px;
    font-weight: bolder;
    letter-spacing: 0.1px;
    text-align: center;

    @include bg-tablet {
      font-size: 48px;
    }
    @include mobile {
      font-size: 36px;
    }
  }
  .right,
  .left {
    display: flex;
    align-items: center;
    width: 50px;
    background: rgba(168, 12, 12, 0);
    height: 100%;
    cursor: pointer;
    p {
      font-size: 30px;
      background: rgb(205, 166, 228);
      text-align: center;
      font-weight: bold;
      padding: 0px 10px 5px 10px;
      color: rgb(255, 255, 255);
      transition: 0.2s ease-in;

      cursor: pointer;
      &:hover {
        transform: scale(1.05);
        transition: 0.2s ease-out;
      }
    }
  }

  .left {
    position: absolute;
    z-index: 50;
    top: 0;
    right: -10px;
  }

  .right {
    position: absolute;
    z-index: 50;
    top: 0;
    left: -10px;
  }
  .slick-slider {
    width: 90vw;
    margin: 0 auto;
    // background: rgb(135, 135, 135);

    .slick-slide {
      .review {
        // border: 1px solid red;
        padding: 10%;
        text-align: center;
        position: relative;

        @include mobile {
          padding: 13%;
        }

        .rev-img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          border: 1px solid purple;
          margin: 0 auto 30px auto;
        }

        .statement {
          font-family: 'open sans', sans-serif;
          text-align: center;
          font-size: 18px;
          @include tablet {
            font-size: 16px;
          }
        }
        .quote {
          position: absolute;
          z-index: -3;
          top: 150px;
          width: 70%;
          right: 15%;
          margin: auto;
          text-align: center;
          color: rgb(231, 212, 252);

          @include bg-tablet {
            width: 80%;
            top: 180px;
            right: 10%;
          }
        }

        .name {
          font-family: 'josefin sans', sans-serif;
          font-size: 18px;
          margin: 40px 0px 0px 0px;

          @include tablet {
            font-size: 16px;
          }
        }
        .title {
          font-family: 'josefin sans', sans-serif;
          font-size: 16px;
          font-weight: bolder;
          @include tablet {
            font-size: 16px;
          }
        }
      }
    }
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    .dash {
      height: 4px;
      border-radius: 1px;
      width: 35px;
      background: rgb(225, 193, 255);
      margin: 3px;
      transition: 0.3s ease-out;
      display: inline-block;
      cursor: pointer;
    }
    .active {
      background: rgb(148, 110, 184);
      transition: 0.3s ease-out;
    }
  }
}
</style>
