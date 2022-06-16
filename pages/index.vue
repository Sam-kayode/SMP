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
          <h2></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped lang="scss">
.first {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  width: 100%;

  @include mobile {
    grid-template-columns: 1fr;
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
      font-size: 100px;
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
  margin-top: 20vh;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  width: 100%;
  .left {
    img {
      max-width: 600px;
    }
  }
  .right{
    
  }
}
</style>
