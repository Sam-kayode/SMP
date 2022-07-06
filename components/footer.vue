<template>
  <div class="footer">
    <div class="first">
      <img src="~/static/images/logo.svg" alt="" class="logo" />
      <img src="~/static/images/smp.svg" alt="" class="logo-title" />
      <p class="b-foot">SUBSCRIBE TO NEWSLETTER</p>
      <div class="newsletter">
        <input type="text" placeholder="Enter email address" />
        <span class="arrow">&#x2192;</span>
      </div>
    </div>
    <div class="second">
      <p>LINKS</p>
      <li><a href="">Homes</a></li>
      <li><a href="">Works</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Get in touch</a></li>
    </div>

    <div class="third">
      <p>RESOURCES</p>
      <li><a href="">Services</a></li>
      <li><a href="">E-books</a></li>
      <li><a href="">Blog</a></li>
    </div>

    <div class="fourth">
      <p>FOLLOW ME ON</p>
      <img
        src="https://img.icons8.com/material/24/000000/youtube-play--v1.png"
      />
      <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png" />
      <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" />
      <img
        src="https://img.icons8.com/carbon-copy/100/000000/instagram-new--v2.png"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  padding: 50px 10%;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  @include bg-tablet {
    padding: 0px 5%;
  }

  .logo {
    width: 30px;
  }

  .logo-title {
    width: 40px;
    margin-bottom: -10px;
  }

  li {
    list-style: none;
    padding-bottom: 10px;
  }
  .newsletter {
    border: 2px solid #a966c8;
    display: flex;
    align-items: center;
    padding-left: 10px;
    input {
      border: none;
      outline: none;
      width: 87%;
    }

    .arrow {
      color: #a966c8;
      font-size: 25px;
      font-weight: bolder;
      border-left: 2px solid #a966c8;
      text-align: center;
      width: 13%;
      padding-bottom: 5px;
      cursor: pointer;
      &:hover {
        background-color: rgb(239, 209, 252);
        transition: 0.5s ease-out;
      }
    }
  }
}
</style>
