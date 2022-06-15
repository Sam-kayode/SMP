<template>
  <div class="body"> 
    <Navbar/>
    <img src="~/static/images/shape1.svg" alt="" class="blob-1">
    <div class="content">
    <Nuxt/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
body{
.content{
  padding:0px 5%;
}

.blob-1{
  left:-7vw;
  top:-6vw;
  position:absolute;
  z-index:-3;
  width:25vw;
}


}



</style>