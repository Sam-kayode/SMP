<template>
  <div class="index">
    <div class="left">
      <h4>Hi There, I am</h4>
      <h1 class="p-0 m-0">Tumilara</h1>
      <h3 class=""><hr>
        The Social Media Princess <hr></h3>
      <p>
        I make your audience my <span>PRIORITY</span> by
        <span>INFLUENCING </span> and <span> INSPIRING</span> them through
        <span>YOU</span>
      </p>
    </div>
    <div class="right">
      <img src="~/static/images/tumi1.png" alt="" class="tumi" />
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
    font-family: 'roboto';
    font-size: 1.8vw;
    font-weight: 100;
  }

  h1 {
    font-family: 'josefin sans';
    font-size: 9vw;
    font-weight: bolder;
    color: #a966c8;
  }
  h3{
    font-size: 2vw;
    margin-bottom:25px;

    hr{
      
    }
  }
  p {
    font-family: 'josefin sans';
    font-size: 1.5vw;
    color: #000000;

    span {
      font-size: 1.6vw;
      color: #a966c8;
    }
  }
}
</style>
