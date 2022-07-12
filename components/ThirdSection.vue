<template>
  <div class="third">
    <h2>My Services</h2>
    <p class="features text-center">
      Together we can take your business and Social media presence to the next
      level with premium features that are benefcial to the your success
    </p>
    <div class="services">
      <div class="cards">
        <div v-for="(card, index) in cards" :key="index" class="card noli">
          <img :src="card.picture" alt="" class="card-img" />
          <p class="title">{{ card.title }}</p>
          <p class="contents">
            {{ card.content }}
          </p>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <Button>More services &#x2192;</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ThirdSection',
  data() {
    return {
      cards: [
        {
          picture: require('~/static/images/services/management.png'),
          title: 'Social media management',
          content:
            'Transformation of social media presence via high-quality content, daily-engagements and well defined social media presence',
        },
        {
          picture: require('~/static/images/services/strategy.png'),
          title: 'Brand strategy',
          content:
            'Well-outlined growth strategy with focus on making your brand stand out exclusively',
        },
        {
          picture: require('~/static/images/services/content.png'),
          title: 'Content creation',
          content:
            'Exquisitely crafted content to attract your business audience and target market in response to your business needs',
        },
        {
          picture: require('~/static/images/services/calendar.png'),
          title: 'Content calendar drafting',
          content:
            'Exquisitely crafted content to attract your business audience and target market in response to your business needs',
        },
        {
          picture: require('~/static/images/services/ads.png'),
          title: 'Ads Management',
          content:
            'Exquisitely crafted content to attract your business audience and target market in response to your business needs',
        },
      ],
    }
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      ScrollTrigger.refresh()
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.card',
          ease: 'expo',
          start: 'top bottom-=50px',
        },
      })
      tl2.from('.card', {
        y:150,
        stagger: 0.6,
        duration: 2,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.third {
  margin-top: 150px;
  padding: 0px 10%;
  background: url('~/static/images/services/curvy-bg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  width: 100vw;
  overflow-x: hidden;

  @include bg-tablet {
    margin-top: 13vh;

    padding: 0px 5%;
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

  .features {
    font-family: 'open sans', sans-serif;
    font-size: 18px;
    width: 60%;
    margin: auto;
    @include tablet {
      font-size: 16px;
      width: 100%;
    }
  }

  .services {
    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 50px;
      margin-top: 40px;
      padding-bottom: 30px;

      @include bg-tablet {
        grid-template-columns: 1fr 1fr;
      }
      @include mobile {
        display: block;
      }

      .card {
        text-align: center;
        border: none;
        padding: 20px 10px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: rgba(118, 62, 153, 0.15) 0px 5px 15px;

        @include mobile {
          margin-bottom: 60px;
        }
        .card-img {
          height: 130px;
          width: auto;
          margin: 0 auto;
        }

        .title {
          font-weight: bolder;
          font-size: 18px;

          @include tablet {
            font-size: 16px;
          }
        }
        .contents {
          font-size: 18px;
          padding: 0;

          @include tablet {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
