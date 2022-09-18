<template>
  <div class="services">
    <h1 class="intro p-0 m-0 name">Works</h1>

    <div class="projects">
      <div class="project">
        <div class="info">
          <h2 class="title">Mokago Business Intentional</h2>
          <ul>
            <li>Wireframing</li>
            <li>Research</li>
            <li>Feasibility studies</li>
            <li>Mapping stuff</li>
          </ul>
        </div>
        <div class="scope">
          <div class="header">
            <div class="desc">Financial services</div>
            <div class="arrow"></div>
          </div>
          <div class="graphic">
            <VueSlickCarousel v-bind="settings" ref="carousel">
              <div class="review">
                <img
                  src="~/static/images/mockups/mock1.png"
                  alt=""
                  class="quote"
                />
              </div>
              <div class="review">
                <img
                  src="~/static/images/mockups/mock2.png"
                  alt=""
                  class="quote"
                />
              </div>
              <div class="review">
                <img
                  src="~/static/images/mockups/mock3.png"
                  alt=""
                  class="quote"
                />
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
      <div class="project">
        <div class="info">
          <h2 class="title">Go buy hub</h2>
          <ul>
            <li>Wireframing</li>
            <li>Research</li>
            <li>Feasibility studies</li>
            <li>Mapping stuff</li>
          </ul>
        </div>
        <div class="scope">
          <div class="header">
            <div class="desc">Service based business (Importation)</div>
            <div class="arrow"></div>
          </div>
          <div class="graphic">
            <VueSlickCarousel v-bind="settings" ref="carousel">
              <div class="review">
                <img
                  src="~/static/images/mockups/mock1.png"
                  alt=""
                  class="quote"
                />
              </div>
              <div class="review">
                <img
                  src="~/static/images/mockups/mock2.png"
                  alt=""
                  class="quote"
                />
              </div>
              <div class="review">
                <img
                  src="~/static/images/mockups/mock3.png"
                  alt=""
                  class="quote"
                />
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Works',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {},
          {
            breakpoint: 900,
            settings: {
              fade: true,
              slidesToShow: 1,
              slidesToScroll: 1,
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
}
</script>

<style lang="scss" scoped>
.services {
  padding: 0px 10%;

  @include bg-tablet {
    padding: 0px 5%;
  }

  h1 {
    font-family: 'josefin sans', sans-serif;
    font-size: 99px;
    font-weight: bolder;
    color: #7949a7;
    text-align: center;

    @include mobile {
      font-size: 80px;
    }

    span {
    }
  }

  .projects {
    margin-top: 0px;
    .review {
      img {
        width: 280px;

        @include mobile {
          margin: 0 auto;
        }
      }
    }
    .project {
      font-family: 'open sans', sans-serif;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-gap:40px;
      border-top: 1px solid #7949a7;
      padding-top: 40px;
      margin-bottom: 100px;
      @include mobile {
        display: block;
      }
      .info {
        h2 {
          font-family: 'open sans', sans-serif;
          font-weight: 700;
          color: #7949a7;
          font-size: 75px;
          @include bg-tablet {
            font-size: 55px;
          }
          @include mobile {
            font-size: 40px;
            text-align: center;
          }
        }

        ul {
          list-style: none;
          padding-left: 5px;
          margin: 0;
          li {
            font-size: 18px;
          }
          @include mobile {
            display: none;
          }
        }
      }
      .scope {
        .header {
          .desc {
            font-weight: 700;
            font-size: 28px;
            @include bg-tablet {
              font-size: 24px;
            }
            @include mobile {
              font-size: 18px;
              text-align: center;
            }
          }
        }
        .graphic {
        }
      }
    }
    .project:nth-child(even) {
      .scope {
        order: 1;
      }
      .info {
        order: 2;
      }
    }
  }
}
</style>
