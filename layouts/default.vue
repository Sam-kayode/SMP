<template>
  <div class="body">
    <Navbar />
    <img src="~/static/images/shape1.svg" alt="" class="blob-1" />
    <img src="~/static/images/shape5.svg" alt="" class="blob-2" />
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
html {
  font-size: 16px;
  font:sans-serif;
}

body {
  .content {
    padding: 0px 7%;
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

  
}
</style>
