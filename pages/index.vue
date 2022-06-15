<template>
  <div>
    <div class="index">
      <div class="left">
        <h4>Hi There, I am</h4>
        <h1 class="p-0 m-0">Tumilara</h1>
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
        <img src="~/static/images/tumi1.png" alt="" class="tumi" />
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
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .right {
    .tumi {
      width: 100% !important;
      height: auto;
      padding: 5px;
      overflow-x: hidden;
    }
  }
}

.left {
  h4 {
    font-family: 'josefin sans';
    font-size: 1.6vw;
    font-weight: 100;
  }

  h1 {
    font-family: 'josefin sans';
    font-size: 8vw;
    font-weight: bolder;
    color: #a966c8;
  }
  h3 {
    font-family: 'josefin sans';
    font-size: 2vw;
    margin-bottom: 70px;
    margin-top: -10px;
    font-weight: bolder;

    hr {
      display: inline;
      width: 50px !important;
      color: #a966c8;
    }
  }
  p {
    font-family: 'josefin sans';
    font-size: 1.7vw;
    color: #000000;
    width: 80%;

    span {
      font-size: 1.7vw;
      color: #a966c8;
      font-weight: bolder;
    }
  }
}
</style>
