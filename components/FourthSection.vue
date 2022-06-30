<template>
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
</template>

<script>
export default {
  data() {
    return {
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

<style lang="scss" scoped>
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
