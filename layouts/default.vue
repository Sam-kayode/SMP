<template>
  <div class="body">
    <Navbar />
    <img src="~/static/images/shape1.svg" alt="" class="blob-1" />
    <img src="~/static/images/shape5.svg" alt="" class="blob-2" />
    <img src="~/static/images/shape6.svg" alt="" class="blob-3" />
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 16px;
  font: sans-serif;

  @include mobile  {
    font-size: 8px;
  }
  @include tablet{
    font-size:10px;
  }
   @include bg-tablet{
    font-size:12px;
  }
}

body {
  overflow-x: hidden;
  .content {
    padding: 0px 10%;
  }

  .blob-1 {
    left: -7vw;
    top: -6vw;
    position: absolute;
    z-index: -3;
    width: 25vw;
  }
  .blob-2 {
    right: 20vw;
    top: -13vw;
    position: absolute;
    z-index: -3;
    width: 20vw;
  } 
  
  .blob-3 {
    left:-170px;
    top: 80vh;
    position: absolute;
    z-index: -3;
    height:70vh;
  }
}
</style>
