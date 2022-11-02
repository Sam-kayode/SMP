<template>
  <div class="navbar-contain">
    <div class="navbar" :class="{ 'nav-position': windowTop > 180 }">
      <div
        class="logo-container"
        :style="[
          visible
            ? {
                position: 'fixed',
                top: '4px',
                left: '9px',
                height: '41.8px',
                'z-index': 6,
              }
            : '',
        ]"
      >
        <img src="~/static/images/logo.svg" alt="" class="logo" />
        <img src="~/static/images/smp.svg" alt="" class="smp" />
      </div>
      <ul class="desktop-nav">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/works">Works</nuxt-link></li>
        <li><nuxt-link to="/services">Services</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/contact">Get in touch</nuxt-link></li>
      </ul>
      <transition name="fade">
        <ul v-show="visible" class="mobLink" :class="[visible ? mob : '']">
          <li @click="toggle"><nuxt-link to="/">Home</nuxt-link></li>
          <li @click="toggle"><nuxt-link to="/works">Works</nuxt-link></li>
          <li @click="toggle">
            <nuxt-link to="/services">Services</nuxt-link>
          </li>
          <li @click="toggle"><nuxt-link to="/about">About</nuxt-link></li>
          <li @click="toggle">
            <nuxt-link to="/contact">Get in touch</nuxt-link>
          </li>
        </ul>
      </transition>

      <Hamburger
        :style="[
          visible ? { position: 'fixed', top: '5px', right: '5px' } : '',
        ]"
        @click.native="toggleNav"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      windowTop: null,
      visible: false,
      mob: '',
    }
  },
  watch: {
    visible() {
      if (this.visible) {
        setTimeout(() => {
          this.mob = 'mob'
        }, 100)
      } else {
        this.mob = ''
      }
    },
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
    toggle() {
      this.visible = !this.visible
      this.$nuxt.$emit('toggle')
    },

    toggleNav() {
      this.visible = !this.visible
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
    height: 70px;
  }
  @include mobile {
    display: flex;
    margin: auto;
    height: 70px;
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

  .desktop-nav {
    @include mobile {
      display: none;
    }
  }

  ul {
    list-style: none;
    margin: 0;

    @include mobile {
      position: fixed;
      z-index: 5;
      background: #f7f0fd;
      width: 100vw;
      height: 100vh;
      top: 0px;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    li {
      display: inline;
      padding: 0px 1.5vw;
      font-size: 18px;

      a {
        color: #a966c8;
        font-family: 'open sans', sans-serif;
        text-decoration: none;
        position: relative;
        transition: 0.5s ease-out;

        &::after {
          content: '';
          width: 0%;
          height: 3px;
          bottom: -5px;
          position: absolute;
          border-radius: 20px;
          background: #a966c8;
          left: 0;
        }

        &:hover {
          transition: 0.5s ease-out;

          &::after {
            content: '';
            width: 60%;
            height: 3px;
            bottom: -5px;
            position: absolute;
            border-radius: 20px;
            background: #a966c8;
            left: 0;
            transition: 0.3s ease-out;
          }
        }
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

.anim {
  animation-duration: 0.5s;
  animation-name: slidein;
}

.mobLink li {
  transform: translateY(-60px);
  opacity: 0;
  transition: 0.5s ease-out;
}

@for $i from 0 through 6 {
  .mob li:nth-child(#{$i + 1}) {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.09s * $i;
    margin-top: 20px;
  }
}

@keyframes slidein {
  from {
    margin-top: -40px;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: 0.5s;
}

.fade-leave-to {
  transition-delay: 0.2s;
}
</style>
