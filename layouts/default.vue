<template>
  <div class="body"> 
    <Navbar/>
    <img src="~/static/images/shape1.svg" alt="" class="blob-1">
    <Nuxt/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
body{


.blob-1{
  left:-7vw;
  top:-6vw;
  position:absolute;
  z-index:-3;
  width:25vw;
}


}



</style>