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
            <Button>More services &#x2192;</Button>
          </div>
        </div>
      </div>
    </div>

    <div class="fourth">
      <h2>Why me ?</h2>
      <p class="why-desc text-center">
        Benefits of Hiring the Social Media Princess
      </p>
      <div class="benefits">
        <div v-for="benefit in benefits" :key="benefit.number" class="benefit">
          <div class="number">
            <h1>{{ benefit.number }}</h1>
          </div>
          <div class="content">
            <h3>{{ benefit.title }}</h3>
            <p>
              {{ benefit.content }}
            </p>
          </div>
        </div>
      </div>
      <Button>Contact me </Button>
      <img src="~/static/images/shape8.svg" alt="" class="blob-4" />
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
      benefits: [
        {
          number: '01',
          title: 'Understand Your Target Audience & Competition',
          content:
            'It’s of essence to carefully think about what you feed your audience. I do the needful by conducting a preliminary audit of your social media presence, your company as a whole, your competitors, and your target market.',
        },
        {
          number: '02',
          title: 'Fresh perspective and inspiration',
          content:
            'Understanding how quickly social media changes and evolves, I always provide a fresh perspective on ideas to ensure that your social media content, presence and engagements are up to par.',
        },
        {
          number: '03',
          title: 'Reputation management',
          content:
            'Listening to your audience and customers feedback, in addition to strategically acting on the information derived is one of the many ways I increase your brand reputation positively.',
        },
        {
          number: '04',
          title: 'Customer-Centric',
          content:
            'Exhibiting a culture of doing business that focuses on creating the best experience for your customers is my core strength in increasing brand loyalty in the industry. ',
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
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  width: 100%;
  padding: 0px 10%;

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
        @include tablet {
          font-size: 16px;
        }
      }
    }
  }
}

.third {
  margin-top: 150px;
  padding: 0px 10%;
  background: url('~/static/images/services/curvy-bg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;

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

        .card-img {
          height: 130px;
          width: auto;
          margin: 0 auto;
        }

        .title {
          font-weight: bolder;
          font-size: 24px;

          @include tablet {
            font-size: 20px;
          }
        }
        .content {
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

.fourth {
  margin-top: 170px;
  padding: 0px 10%;
  position: relative;

  @include bg-tablet {
    margin-top: 15vh;

    padding: 0px 5%;
  }

  .blob-4 {
    position: absolute;
    right: -2px;
    top: 10vh;
    width: 20vw;
    z-index: -1;

    @include bg-tablet {
      width: 30vw;
    }
    @include mobile {
      width: 50vw;
    }
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
  .why-desc {
    font-family: 'open sans', sans-serif;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 30px;
    @include tablet {
      font-size: 16px;
      width: 100%;
    }
  }

  .benefits {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 4vw;
    margin-bottom: 70px;

    @include bg-tablet {
      display: block;
    }
    @include mobile {
      display: block;
    }

    .benefit {
      display: flex;
      align-items: top;

      @include bg-tablet {
        margin-bottom: 40px;
      }
      @include mobile {
        margin-bottom: 50px;
      }

      .number h1 {
        font-size: 150px;
        padding: 0px 20px 0px 0px;
        font-family: 'josefin sans', sans-serif;
        font-weight: bolder;
        margin: 0;
        color: #a966c8;
        display: flex;
        align-items: top;
        min-width: 194px;

        @include mobile {
          font-size: 90px;
          min-width: 123px;
        }
      }

      .content {
        padding: 0;
        p {
          margin: 0;
          font-size: 18px;
          @include mobile {
            font-size: 16px;
          }
        }

        h3 {
          font-family: 'josefin sans', sans-serif;
          font-weight: bolder;
          font-size: 36px;
          margin: 0;
          padding-top: 20px;

          @include mobile {
            font-size: 24px;
            padding-top: 10px;
          }
        }
      }
    }
  }
}
</style>
