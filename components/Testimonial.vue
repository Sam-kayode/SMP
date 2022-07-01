<template>
  <!-- <div class="carousel-containr">
    <VueSlickCarousel v-bind="settings" @beforeChange="handleChange">
      <div class="item">1
        <br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel sequi, mollitia possimus dolores debitis reprehenderit distinctio, quod ex consequuntur explicabo quis ut vero dolorum quae necessitatibus voluptas provident saepe itaque!
      </div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </VueSlickCarousel>
    <div class="right"><p>&#x2190;</p></div>
    <div class="left"><p>&#x2192;</p></div>
  </div> -->
  <div class="my-5 carousel-container">
    <h2>What do my clients say ?</h2>
    <VueSlickCarousel v-bind="settings">
      <div v-for="n in 5" :key="n" class="review">
        <div class="rev-img"><img src="" alt="" /></div>
        <p class="statement">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          earum ex ullam harum sed, aspernatur porro deleniti nostrum quas
          <span class="quote">&#x201D;</span>
          impedit qui exusantium fuga maiores? Facilis, aperiam
        </p>
        <p class="name">Sam-kayode marvellous</p>
        <p class="title">Senior developer</p>
      </div>
    </VueSlickCarousel>
    <div class="controls"></div>
    <div class="right"><p>&#x2190;</p></div>
    <div class="left"><p>&#x2192;</p></div>
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
        focusOnSelect: true,
        infinite: true,
        speed: 500,
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
    handleChange(lop, val) {
      console.log(val)
      this.index = val
    },
  },
}
</script>

<style lang="scss" scoped>
// .item {
//   height: 50vh;
//   font-size: 16px;
//   max-width:180px;
//   text-align: center;
//   background: rgb(234, 177, 253);
//   margin: 0 auto !important;

//   @include mobile {
//   }
// }

// .carousel-container {
//   margin: 170px auto 200px auto;
//   z-index: 30;
//   position: relative;
//   height: 50vh;
//   @include bg-tablet {
//   }
//   @include mobile {
//   }

//   .right,
//   .left {
//     display: flex;
//     align-items: center;
//     width: 50px;
//     background: rgba(101, 68, 68, 0);
//     height: 50vh;

//     p {
//       font-size: 30px;
//       background: rgb(117, 65, 148);
//       text-align: center;
//       font-weight: bold;
//       padding: 0px 10px 5px 10px;
//       color: rgb(255, 255, 255);
//       transition: 0.2s ease-in;

//       cursor: pointer;
//       &:hover {
//         transform: scale(1.05);
//         transition: 0.2s ease-out;
//       }
//     }
//   }

//   .left {
//     position: absolute;
//     z-index: 50;
//     top: 0;
//     right: -30px;
//   }

//   .right {
//     position: absolute;
//     z-index: 50;
//     top: 0;
//     left: -30px;
//   }
// }
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
    right: -30px;
  }

  .right {
    position: absolute;
    z-index: 50;
    top: 0;
    left: -30px;
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
          font-size: 540px;
          line-height: 160px;
          font-family: 'Times New Roman', Times, serif;
          position: absolute;
          z-index: -3;
          text-align: center;
          color: rgb(231, 212, 252);
          right: 25%;
          bottom: 15px;
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
}
</style>
