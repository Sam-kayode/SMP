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
    <VueSlickCarousel v-bind="settings">
      <div v-for="n in 5" :key="n" class="review">
        <h3>
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          earum ex ullam harum sed, aspernatur porro deleniti nostrum quas
          impedit qui exusantium fuga maiores? Facilis, aperiam?"
        </h3>
        <p>Sam-kayode marvellous</p>
        <p>Senior developer</p>
      </div>
    </VueSlickCarousel>
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
        dots: true,
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
  width: 100vw;
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
    right: -5px;
  }

  .right {
    position: absolute;
    z-index: 50;
    top: 0;
    left: -5px;
  }
  .slick-slider {
    width: 90vw;
    margin: 0 auto;
    background: rgb(135, 135, 135);

    .slick-slide {
      .review {
        border: 1px solid red;
        padding: 10%;

        @include mobile {
          padding: 13%;
        }

        h3 {
          text-align: center;
          font-size: 18px;
        }

        p {
          text-align: center;
        }
      }
    }
  }
}
</style>
