<template>
  <div class="services">
    <h1 class="intro p-0 m-0 name">Services</h1>
    <div class="service mt-6 row">
      <div class="left col d-flex flex-column justify-content-center">
        <h3>Social Media Management</h3>
        <p>Transformation of social media presence via high-quality content, daily-engagements and well defined social
          media presence</p>
        <ul>
          <li><span><img src="/list.png" alt="" style="width:20px;margin-right:4px;"></span> Content creation</li>
          <li>Content creation</li>
          <li>DM Management</li>
          <li>Content creation</li>
          <li>DM Management</li>
          <li>DM Management</li>

        </ul>
      </div>
      <div class="right col">
        <img src="/manage.png" alt="" style="width:100%;">
      </div>
    </div>
    <img src="/sessions.png" alt="" style="width:40%;">
    <img src="/manage.png" alt="" style="width:40%;">

  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Projects from '~/static/js/projects.js'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Services',
  // components: { VueSlickCarousel },
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
      services: [

      ]
    }
  },
  computed: {
    allProjects() {
      return Projects.projects
    }
  },
  mounted() {
    this.animate('.title')
    this.animate('.header')
    this.animate2()
  },
  methods: {
    animate(value) {
      gsap.utils.toArray(value).forEach(function (elem) {
        gsap.set(elem, { autoAlpha: 0 })
        ScrollTrigger.create({
          trigger: elem,
          once: false,
          start: 'top bottom+=80px',
          onEnter: () => {
            ScrollTrigger.refresh()

            // let xDir

            // if (elem.classList.contains('revealLeft')) {
            //   xDir = -100
            // } else if (elem.classList.contains('revealRight')) {
            //   xDir = 100
            // }
            gsap.fromTo(
              elem,
              {
                x: 0, y: 50, autoAlpha: 0,
              },
              {
                x: 0, y: 0, autoAlpha: 1, duration: 1, delay: 0.5,
              }
            )
          },
        })
      })
    },
    animate2() {
      gsap.utils.toArray('.list').forEach(function (elem) {
        // gsap.set(elem, { autoAlpha: 0 })
        ScrollTrigger.create({
          trigger: elem,
          once: true,
          start: 'top bottom+=105px',
          onEnter: () => {
            ScrollTrigger.refresh()

            // let xDir

            // if (elem.classList.contains('revealLeft')) {
            //   xDir = -100
            // } else if (elem.classList.contains('revealRight')) {
            //   xDir = 100
            // }
            gsap.fromTo(
              elem,
              {
                x: 0, y: -30, autoAlpha: 0,
              },
              {
                x: 0, y: 0, autoAlpha: 1, duration: 1, delay: 0.3
              }
            )
          },
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.services {
  padding: 0px 10%;

  @include bg-tablet {
    padding: 0px 5%;
  }

  .intro {
    margin-top: 20px !important;
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
  }

  .service {
    h3 {
      font-weight: bold;
      font-family: 'josefin sans', sans-serif;
      font-weight: bolder;
      font-size: 36px;
      margin: 0;
      color: #7949a7;
      padding-top: 20px;

      @include mobile {
        font-size: 24px;
        padding-top: 10px;
      }
    }

    ul {
      width: fit-content;
      padding: 20px 0 0 0;
      font-family: 'open sans', sans-serif;
      font-size: 16px;

      li {
        list-style: none;
        width: fit-content;
        font-size: 16px;

      }
    }

    p {
      font-family: 'open sans', sans-serif;
      font-size: 16px;
    }
  }
}
</style>
