<template>
  <div class="my-5 carousel-container">
    <h2>What do my clients say ?</h2>
    <VueSlickCarousel
      v-bind="settings"
      ref="carousel"
      @beforeChange="beforeChange"
    >
      <div v-for="(review, n) in reviews" :key="n" class="review">
        <div class="rev-img"><img :src="review.picture" alt="" /></div>
        <p class="statement">{{ review.review }}</p>
        <p class="name">{{ review.name }}</p>
        <p class="title">{{ review.title }}</p>
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
    <div class="left" @click="showNext"><p>&#x2192;</p></div>
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
        arrows: false,
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
      reviews: [
        {
          picture: require('~/static/images/firms/aa.png'),
          review:
            'She-s one of the best Social media managers you can work with. Impecable service likeno other',
          name: 'Ademakinwa Ademiluyi Driving and Co Services',
          title: 'Logistics company',
        },
        {
          picture: require('~/static/images/firms/mydee.png'),
          review:
            'She-s one of the best Social media managers you can work with. Impecable service likeno other. lorem ipsum loki fjfjutt kfifi jsuur apdoe dkdod ddiid djdor dkdoeoe',
          name: 'Ademakinwa Ademiluyi Driving and Co Services',
          title: 'Hair Care Product company',
        },
        {
          picture: require('~/static/images/firms/gobuyhub.png'),
          review:
            'She-s one of the best Social media managers you can work with. Impecable service likeno other',
          name: 'Ademakinwa Ademiluyi Driving and Co Services',
          title: 'Importation and Logistics firm',
        },
        {
          picture: require('~/static/images/firms/wristwatch.png'),
          review:
            'She-s one of the best Social media managers you can work with. Impecable service likeno other',
          name: 'Ademakinwa Ademiluyi Driving and Co Services',
          title: 'Luxury Wristwear Store',
        },
        {
          picture: require('~/static/images/firms/mbi.png'),
          review:
            'She-s one of the best Social media managers you can work with. Impecable service likeno other',
          name: 'Ademakinwa Ademiluyi Driving and Co Services',
          title: 'Financial Services firm',
        },
      ],
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
    margin-bottom: 40px;

    @include bg-tablet {
      font-size: 48px;
    }
    @include mobile {
      font-size: 36px;
    }
  }
  .slick-list {
    position: relative;
  }
  .left {
    position: absolute;
    z-index: 50;
    top: 15%;
    right: -10px;
  }

  .right {
    position: absolute;
    z-index: 50;
    top: 15%;
    left: -10px;
  }
  .right,
  .left {
    display: flex;
    align-items: center;
    width: 50px;
    height: 100%;
    background: rgba(255, 255, 255, 0);
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
          // border: 1px solid purple;
          margin: 0 auto 30px auto;

          img {
            width: 100%;
          }
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

          @include mobile {
            font-size: 14px;
          }
        }
        .title {
          font-family: 'josefin sans', sans-serif;
          font-size: 16px;
          font-weight: bolder;
          @include tablet {
            font-size: 16px;
          }
          @include mobile {
            font-size: 14px;
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
