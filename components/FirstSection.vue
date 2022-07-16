<template>
  <div class="first">
    <div class="left">
      <div class="intro"><h4>Hi There, I am</h4></div>
      <h1 class="intro p-0 m-0 name">Tum<span>il</span>ara</h1>
      <h3 class="intro">
        <span>-</span> The Social Media Princess <span>-</span>
      </h3>
      <p class="intro">
        I make your audience my <span>PRIORITY</span> by
        <span>INFLUENCING </span>them through
        <span>YOU</span>
      </p>
    </div>
    <div class="right">
      <img
        src="https://res.cloudinary.com/sam-kay/image/upload/v1655297755/smp/Group_1_1_2_mxfflk.png"
        alt=""
        class="tumi"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'FirstSection',
  mounted() {
    const timeline = gsap.timeline({})
    timeline
      .from(
        '.intro',
        { y: -50, stagger: 0.4, opacity: 0, duration: 0.6 },
        '+=4'
      )
      .from('.tumi', { x: 50, opacity: 0 }, '-=0.4')
  },
}
</script>

<style lang="scss" scoped>
.first {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  padding: 0px 10%;
  width: 100vw;
  overflow-x: hidden;
  --transformation: translate(0, 0);
  @include mobile {
    grid-template-columns: 1fr;
  }
  @include bg-tablet {
    padding: 0px 5%;
  }
  .right {
    .tumi {
      width: 100% !important;
      height: auto;
      padding: 5px;
      overflow-x: hidden;
    }
    @include tablet {
      order: 1;
      margin-top: 50px;
    }
  }
  .left {
    @include tablet {
      order: 1;
      margin-top: 50px;
    }
    @include mobile {
      text-align: center;
    }
    h4 {
      font-family: 'open sans', sans-serif;
      font-size: 16px;
      font-weight: bolder;

      @include bg-tablet {
        font-size: 16px;
      }
    }

    h1 {
      font-family: 'josefin sans', sans-serif;
      font-size: 620%;
      font-weight: bolder;

      @include mobile {
        font-size: 40px;
      }

      @include bg-tablet {
        font-size: 70px;
      }

      span {
        color: #a966c8;
      }
    }
    h3 {
      font-family: 'open sans', sans-serif;
      font-size: 20px;
      margin-bottom: 35px;
      margin-top: -10px;
      font-weight: bolder;
      color: #a966c8;

      @include mobile {
        font-size: 12px;
      }

      @include bg-tablet {
        font-size: 16px;
      }
    }
    p {
      font-family: 'open sans', sans-serif;
      font-size: 18px;
      color: #000000;
      width: 85%;

      span {
        // font-size: 1.7vw;
        color: #a966c8;
        font-weight: bolder;
      }
      @include bg-tablet {
        font-size: 16px;
      }
      @include mobile {
        font-size: 16px;
        width: 90%;
      }
    }
  }

  .intro {
    z-index: 3;
    position: relative;
  }
  .name {
    overflow: clip;
    line-height: 106%;
    position: relative;
    z-index: 1;
  }

  // .name:after {
  //   content: ' ';
  //   position: absolute;
  //   left: 0;

  //   width: 100%;
  //   height: 100%;
  //   background: rgb(255, 255, 255);
  //   // z-index: 1;
  //   transform-origin: 0 0;
  //   transform: var(--transformation);
  // }
}
</style>
