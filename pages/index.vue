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
    </div>

    <div class="fourth">
      <h2>Why me ?</h2>
      <p class="why-desc text-center font-weight-bolder">
        Benefits of Hiring a social media manager
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
            '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos  dolorum vel ratione. Temporibus, maiores distinctio, ea quaerat iure pellendus autem delectus magnam nobis voluptas, ex et eveniet illo rerum quia!',
        },
        {
          number: '02',
          title: 'Fresh perspective and inspiration',
          content:
            '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos  dolorum vel ratione. Temporibus, maiores distinctio, ea quaerat iure pellendus autem delectus magnam nobis voluptas, ex et eveniet illo rerum quia!',
        },
        {
          number: '03',
          title: 'Reputation management',
          content:
            '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos  dolorum vel ratione. Temporibus, maiores distinctio, ea quaerat iure pellendus autem delectus magnam nobis voluptas, ex et eveniet illo rerum quia!',
        },
        {
          number: '04',
          title: 'Customer-Centric',
          content:
            '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos  dolorum vel ratione. Temporibus, maiores distinctio, ea quaerat iure pellendus autem delectus magnam nobis voluptas, ex et eveniet illo rerum quia!',
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
  margin-top: 100px;
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
  margin-top: 100px;
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
      font-size: 32px;
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
        font-size: 16px;

        &:hover {
          background-color: darken(#a966c8, 10%);
          padding: 22px 42px;
          transition: 0.15s ease-out;
        }
      }
    }
  }
}

.fourth {
  margin-top: 100px;
  padding: 0px 10%;

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
      font-size: 32px;
    }
  }

  .benefits {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 6vw;
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
          min-width: 0;
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
            font-size: 28px;
          }
        }
      }
    }
  }
}
</style>
