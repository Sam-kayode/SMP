<template>
  <div class="contact-me">
    <div class="details">
      <h2 class="question reveal revealLeft">
        <span> Ready </span> to reach out to your <span> target </span>audience
        ?
      </h2>
      <div class="reveal revealRight assure">
        <p class="feel mb-2">
          Feel free to book a session and contact me, your audience awaits a
          princess touch.
        </p>

        <p class="">
          I am always there to help you define you. You can safely count on me
          to give your social media presence a sprinkle of royalty
        </p>
        <img src="~/static/images/quote.svg" alt="" class="quote" />
      </div>

      <div class="owner reveal revealLeft">
        <div><img src="~/static/images/tumi.png" alt="" class="avatar" /></div>
        <div>
          <div class="name font-weight-bolder">Ifebogun Tumilara</div>
          <div class="title">The Social Media Princess</div>
        </div>
      </div>
    </div>
    <div class="form reveal revealRight"><ContactForm /></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'ContactMe',
  // mounted() {
  //   this.animate()
  // },
  // methods: {
  //   animate() {
  //     //   ScrollTrigger.refresh()

  //     gsap.utils.toArray('.reveal').forEach(function (elem) {
  //       gsap.set(elem, { autoAlpha: 0 })
  //       ScrollTrigger.create({
  //         trigger: elem,
  //         duration: 2.5,
  //         start: 'top bottom+=15px',
  //         onEnter: () => {
  //           let xDir

  //           if (elem.classList.contains('revealLeft')) {
  //             xDir = -100
  //           } else if (elem.classList.contains('revealRight')) {
  //             xDir = 100
  //           }

  //           gsap.fromTo(
  //             elem,
  //             { x: xDir, y: 0, autoAlpha: 0 },
  //             { x: 0, y: 0, autoAlpha: 1 }
  //           )
  //         },
  //       })
  //     })
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.contact-me {
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px 10%;
  color: rgb(0, 0, 0);
  @include bg-tablet {
    margin-top: 15vh;

    padding: 0px 5%;
  }

  @include mobile {
    display: block;
  }

  h2 {
    font-family: 'josefin sans', sans-serif;
    font-size: 64px;
    font-weight: bolder;
    letter-spacing: 0.1px;
    text-align: left;
    margin-bottom: 20px;
    span {
      color: #a966c8;
    }
    @include bg-tablet {
      font-size: 48px;
    }
    @include mobile {
      font-size: 36px;
    }
  }

  .feel,
  .mail,
  .assure,
  .title,
  .name {
    font-size: 18px;
    @include tablet {
      font-size: 16px;
    }
  }
  .mail {
    font-weight: bolder;
  }

  .msg-icon {
    img {
      width: 40px;
      background: rgb(255, 255, 255);
      border-radius: 50%;
      padding: 5px;
    }
  }

  .assure {
    position: relative;
    .quote {
      position: absolute;
      z-index: -3;
      top: -100%;
      width: 60%;
      right: 25%;
      margin: auto;
      text-align: center;
      color: rgb(231, 212, 252);

      @include bg-tablet {
        width: 90%;
        top: -40px;
        right: 5%;
      }
    }
  }

  .owner {
    display: flex;
    align-items: center;
    margin-top: 20px;

    @include mobile {
      margin-bottom: 70px;
    }
    .avatar {
      width: 70px;
      border-radius: 50%;
    }
  }

  .title {
    color: #a966c8;
    font-weight: bold;
  }
}
</style>
