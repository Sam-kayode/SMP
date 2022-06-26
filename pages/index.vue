<template>
  <div>
    <div class="first">
      <div class="left">
        <h4>Hi There, I am</h4>
        <h1 class="p-0 m-0">Tum<span>il</span>ara</h1>
        <h3 class="">
          <span>-</span> The Social Media Princess <span>-</span>
        </h3>
        <p>
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
    <div class="second">
      <div class="left">
        <img
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
              media needs any business owner can ask for are met. Stay
              organized, save time and easily manage your social media presence
              without any hassle.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="third">
      <h2>My Services</h2>
      <p class="features text-center">
        Together we can take your business and Social media presence to the next
        level with premium features that are benefcial to the your success
      </p>
      <div class="services">
        <div class="cards">
          <div v-for="(card, index) in cards" :key="index" class="card">
            <img :src="card.picture" alt="" class="card-img" />
            <p class="title">{{ card.title }}</p>
            <p class="content">
              {{ card.content }}
            </p>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button>More services &#x2192;</button>
          </div>
        </div>
      </div>

      <p class="mt-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad iste
        corrupti excepturi ullam harum repudiandae dolorum exercitationem rerum
        id dolor voluptatum impedit, error eius quo aperiam sunt blanditiis
        nobis optio? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ad iste corrupti excepturi ullam harum repudiandae dolorum
        exercitationem rerum id dolor voluptatum impedit, error eius quo aperiam
        sunt blanditiis nobis optio? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ad iste corrupti 
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
}
</script>

<style scoped lang="scss">
.first {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  width: 100%;
  padding: 0px 10%;

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

      @include mobile {
        font-size: 16px;
        width: 90%;
      }

      @include bg-tablet {
        font-size: 16px;
      }
    }
  }
}

.second {
  margin-top: 15vh;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  width: 100%;
  padding: 0px 10%;

  @include bg-tablet {
    margin-top: 12vh;
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

        @include mobile {
          font-size: 30px;
        }

        @include bg-tablet {
          font-size: 36px;
        }

        span {
          color: #a966c8;
        }
      }

      p {
        font-family: 'open sans', sans-serif;
        font-size: 18px;
        color: #000000;
        @include tablet {
          font-size: 16px;
        }
      }
    }
  }
}

.third {
  margin-top: 15vh;
  padding: 0px 10%;
  background: url('~/static/images/services/curvy-bg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;

  @include bg-tablet {
    margin-top: 12vh;

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
      font-size: 30px;
    }

    span {
      color: #a966c8;
    }
  }

  .features {
    font-family: 'open sans', sans-serif;
    font-size: 18px;
    color: #86878c;
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
      grid-gap: 6%;
      margin-top: 40px;

      @include mobile {
        grid-template-columns: 1fr;
        margin-top: 40px;
      }

      .card {
        text-align: center;
        border: none;
        padding: 20px 10px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: rgba(118, 62, 153, 0.15) 0px 5px 15px;
        @include mobile {
          margin-bottom: 20px;
        }
        .card-img {
          height: 130px;
          width: auto;
          margin: 0 auto;
        }

        .title {
          font-weight: bolder;
          font-size: 18px;
        }
        .content {
          font-size: 16px;
          padding: 0;
        }
      }

      button {
        border: none;
        padding: 20px 40px;
        border-radius: 10px;
        background-color: #a966c8;
        color: #ffffff;
        font-size:16px;

        &:hover {
          background-color: darken(#a966c8,10%);
        padding: 22px 42px;
        transition: 0.15s ease-out;

        }
      }
    }
  }
}
</style>
