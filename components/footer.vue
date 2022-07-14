<template>
  <div class="footer-container">
    <div class="footer">
      <div class="first">
        <img src="~/static/images/logo.svg" alt="" class="logo" />
        <img src="~/static/images/smp.svg" alt="" class="logo-title" />
        <p class="b-foot mt-4">SUBSCRIBE TO NEWSLETTER</p>
        <div class="newsletter">
          <input type="text" placeholder="Enter email address" />
          <span class="arrow">&#x2192;</span>
        </div>
      </div>
      <div class="grid-half">
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
          <a href=""
            ><img
              src="https://img.icons8.com/material/24/000000/youtube-play--v1.png"
          /></a>
          <a href="">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"
          /></a>
          <a href="">
            <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
          /></a>
          <a href="">
            <img
              src="https://img.icons8.com/glyph-neue/64/000000/instagram-new.png"
          /></a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <hr />
      &copy;<span class="pr-2">TheSocialMediaPrincess</span>2022. All Rights
      Reserved
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-container {
  background-color: rgba(250, 224, 255, 0.507);

  hr {
    margin-top: 0;
  }

  .copyright {
    padding: 0px 10% 50px 10%;

    @include bg-tablet {
      padding: 0px 5% 10px 5%;
    }
  }
  .footer {
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    gap: 40px;
    margin-top: 100px;
    padding: 50px 10%;

    @include bg-tablet {
      padding: 50px 5%;
    }

    @include mobile {
      grid-template-columns: 1fr;
    }
    .logo {
      width: 30px;
    }

    .logo-title {
      width: 40px;
      margin-bottom: -10px;
    }

    p {
      font-weight: bolder;
      font-family: 'josefin sans', sans-serif;
      font-size: 16px;

      @include mobile {
        margin-top: 20px;
      }
    }

    li {
      list-style: none;
      padding-bottom: 10px;

      a {
        color: #000000;
        font-size: 16px;
      }
    }

    img {
      width: 25px;
    }

    .newsletter {
      background-color: rgb(255, 255, 255);
      border: 2px solid #a966c8;
      display: flex;
      align-items: center;
      padding-left: 10px;
      @include mobile {
        // width: 70vw;
      }
      input {
        border: none;
        outline: none;
        width: 87%;
        background: none;
        &::placeholder {
          color: #bf86da;
        }
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
          background-color: rgb(235, 202, 249);
          transition: 0.5s ease-out;
        }
      }
    }
    .grid-half {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      @include mobile {
        grid-template-columns: 1fr 1fr;
      }

      .fourth {
        @include mobile {
          order: 1;
        }
      }

      .second {
        @include mobile {
          order: 2;
        }
      }
    }
  }
}
</style>
