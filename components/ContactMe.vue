<template>
  <div class="contact-me">
    <div class="details">
      <h2 class="question">
        <span> Ready </span> to reach out to your <span> target </span>audience
        ?
      </h2>
      <p class="feel mb-2">
        Feel free to book a session and contact me, your audience awaits a
        princess touch.
      </p>
      <!-- <span class="msg-icon">
        <img
          src="https://img.icons8.com/external-others-anggara-putra/64/000000/external-social-social-media-basic-others-anggara-putra-34.png"
        />
      </span> -->
      <!-- <span class="mail">tsocialmediaprincess@gmail.com</span> -->
      <p class="assure">
        "I am always there to help you define you. You can safely count on me to
        give your social media presence a sprinkle of royalty"
      </p>
      <div class="owner">
        <div><img src="~/static/images/tumi.png" alt="" class="avatar" /></div>
        <div>
          <div class="name font-weight-bolder">Ifebogun Tumilara</div>
          <div class="title">The Social Media Princess</div>
        </div>
      </div>
    </div>
    <div class="form"></div>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
}
</script>

<style lang="scss" scoped>
.contact-me {
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px 10%;
  color: rgb(0, 0, 0);
  @include bg-tablet {
    margin-top: 15vh;

    padding: 0px 5%;
  }

  @include tablet {
    display: block;
  }
  .details {
  }
  h2 {
    font-family: 'josefin sans', sans-serif;
    font-size: 64px;
    font-weight: bolder;
    letter-spacing: 0.1px;
    text-align: left;
    margin-bottom: 20px;
    span {
      color: #a966c8;
    }
    @include bg-tablet {
      font-size: 48px;
    }
    @include mobile {
      font-size: 36px;
    }
  }

  .feel,
  .mail,
  .assure {
    font-size: 18px;
    @include tablet {
      font-size: 16px;
    }
  }
  .mail {
    font-weight: bolder;
  }

  .msg-icon {
    img {
      width: 40px;
      background: rgb(255, 255, 255);
      border-radius: 50%;
      padding: 5px;
    }
  }

  .owner {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .avatar {
      width: 70px;
      border-radius: 50%;
    }
  }

  .title,
  .nam {
    color: #a966c8;
    font-weight: bold;
  }
}
</style>
