<template>
  <div>
    <div class="index">
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
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped lang="scss">
.index {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  width: 100%;

  @include tablet {
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
    }
  }
}

.left {
  h4 {
    font-family: 'open sans', sans-serif;
    font-size: 1.5rem;
  }

  h1 {
    font-family: 'josefin sans', sans-serif;
    font-size: 8rem;
    font-weight: bolder;
    span {
      color: #a966c8;
    }

    @include bg-tablet {
      font-size: 7rem !important;
    }

    @include mobile{
      font-size: 6rem !important;

    }
  }
  h3 {
    font-family: 'open sans', sans-serif;
    font-size: 1.8rem;
    margin-bottom: 35px;
    margin-top: -10px;
    font-weight: bolder;
    color: #a966c8;
  }
  p {
    font-family: 'open sans', sans-serif;
    font-size: 1.5rem;
    color: #000000;
    width: 65%;

    span {
      // font-size: 1.7vw;
      color: #a966c8;
      font-weight: bolder;
    }

    @include mobile{
    width: 90%;

    }
  }
}
</style>
