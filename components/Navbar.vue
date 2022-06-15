<template>
  <div class="navbar">
    <img src="~/static/images/logo.svg" alt="" class="logo" />
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Works</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">Get in touch</a></li>
      <li><a href="">Portfolio</a></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100vw;
  padding: 10px 10%;
  display: flex;

  .logo {
    transform: scale(0.6);

  }

  ul {
    list-style: none;

    li {
      display: inline;
      padding: 0px 1.5vw;
      a {
        color: rgb(109, 91, 161);
      }
    }
  }
}
</style>
