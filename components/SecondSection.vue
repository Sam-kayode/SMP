<template>
  <div class="secondSection" id="group2">
    <div class="left">
      <img
        class="help up"
        src="https://res.cloudinary.com/sam-kay/image/upload/v1655414741/smp/picture1_oea911.png"
        alt=""
      />
    </div>
    <div class="right">
      <div class="content">
        <div class="content p-0 mt-5 mt-md-0">
          <h2>Keep your audience <span>addicted</span> to your content</h2>
          <p>
            With me, you have absolutely nothing to worry as the best social
            media needs any business owner can ask for are met. Stay organized,
            save time and easily manage your social media presence without any
            hassle.
          </p>
          <Button class="text-left">Learn more</Button>
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
  name: 'SecondSection',
  // beforeCreate() {
  //   ScrollTrigger.refresh()
  // },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      ScrollTrigger.refresh()
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#group2 .left',
          ease: 'exp',
          start: 'top bottom-=200px',
        },
      })
      tl.addLabel('start')
        .from('#group2 .up', { y: 200, opacity: 0, duration: 1 })
        .from('#group2 .right', { x: 200, opacity: 0, duration: 1 }, '-=.6')
    },
  },
}
</script>

<style lang="scss" scoped>
.secondSection {
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  width: 100%;
  padding: 0px 10%;
  width: 100vw;
  overflow-x: hidden;
  @include bg-tablet {
    margin-top: 14vh;
    padding: 0px 5%;
  }
  @include tablet {
    grid-template-columns: 1fr 1fr;
  }
  @include mobile {
    grid-template-columns: 1fr;
  }

  .left {
    img {
      max-width: 100%;
    }
  }
  .right {
    .content {
      padding: 0 0 0 60px;

      @include mobile {
        padding: 0;
      }

      h2 {
        font-family: 'josefin sans', sans-serif;
        font-size: 64px;
        font-weight: bolder;
        letter-spacing: 0.1px;
        margin-bottom: 20px;

        @include bg-tablet {
          font-size: 36px;
        }
        @include mobile {
          font-size: 32px;
        }

        span {
          color: #a966c8;
        }
      }

      p {
        font-family: 'open sans', sans-serif;
        font-size: 18px;
        color: #000000;
        margin-bottom: 30px;
        @include tablet {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
