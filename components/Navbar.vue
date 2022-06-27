<template>
  <div class="navbar-contain">
    <div class="navbar" :class="{ 'nav-position': windowTop > 180 }">
      <div class="logo-container">
        <img src="~/static/images/logo.svg" alt="" class="logo" />
        <img src="~/static/images/smp.svg" alt="" class="smp" />
      </div>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Works</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Get in touch</a></li>
        <li><a href="">Portfolio</a></li>
      </ul>
      <Hamburger />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      windowTop: null,
      disValue: 'none',
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.top.scrollY
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100vw;
  padding: 10px 6%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  z-index: 1000;
  .logo-container {
    height: 100%;
  }
  @include tablet {
    padding: 4px 2%;
    height: 60px;
  }
  @include mobile {
    display: flex;
    margin: auto;
    height: 50px;
  }

  .logo {
    height: 100%;
    display: inline;
    position: relative;
    z-index: 10;
  }

  .smp {
    margin-left: -5px;
    width: 45px;
    position: relative;
    z-index: 10;
  }

  ul {
    list-style: none;
    margin: 0;

    @include mobile {
      position: fixed;
      z-index: 5;
      background: rgb(255, 255, 255);
      width: 100vw;
      height: 100vh;
      top: 0px;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      display: none;
    }

    li {
      display: inline;
      padding: 0px 1.5vw;
      font-size: 18px;

      a {
        color: rgb(109, 91, 161);
        font-family: 'open sans', sans-serif;
      }
      @include mobile {
        display: block;
        width: 70vw;
        text-align: center;
        margin: 20px auto;
        padding: 0;
        font-size: 30px;
        font-weight: bolder;
      }
    }
  }
}

.nav-position {
  transition: 0.5s ease-out;
  background-color: #ffffff;
  box-shadow: rgba(118, 62, 153, 0.15) 0px 5px 15px;
  position: fixed;
  top: 0;
  display: flex !important;
}
</style>
