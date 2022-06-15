<template>
  <div class="index">
    <div class="left">
      <h4>Hi There, I am </h4>
      <h1>Tumilara</h1>
    </div>
    <div class="right"><img src="~/static/images/tumi1.png" alt="" class="tumi"/></div>
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
  grid-template-columns:1fr 1fr;
  

.right{
  .tumi{
    width:100% !important;
    height:auto;
    padding:5px;
    overflow-x:hidden;
  }
}
}

.left{
  h4{
  font-size:25px;
}

h1{
  font-size:130px;
}
}

</style>
