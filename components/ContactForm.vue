<template>
  <div class="contact-form">
    <h4 class="text-center">Contact me</h4>
    <form @submit="null">
      <div>
        <label for="name">Full Name</label>
        <br />
        <input type="text" placeholder="Your Full Name" name="name" required />
      </div>
      <div>
        <label for="email">Email</label>
        <br />
        <input type="mail" placeholder="E-mail address" name="email" required />
      </div>
      <div>
        <label for="subject">Subject</label>
        <br />

        <input
          type="text"
          placeholder="Subject of mail"
          name="subject"
          required
        />
      </div>
      <div>
        <label for="message">Your Message</label>
        <br />
        <textarea name="message" required></textarea>
      </div>

      <Button class="button">Send Message</Button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact-form {
  width: 90%;
  margin-left: auto;
  background-color: rgb(249, 232, 255);
  border-radius: 10px;
  padding: 30px 10px;

  @include mobile {
    width: 100%;
    margin-top: 50px;
  }

  h4 {
    font-size: 24px;
    font-weight: bolder;
  }

  form {
    padding: 5%;
    label {
      font-size: 16px;
      font-weight: bold;
    }
    input {
      width: 100%;
      font-size: 16px;
      margin-bottom: 20px;
      margin-bottom: 20px;
      border-radius: 5px;
      border: 1px solid rgb(231, 167, 255);
      padding: 8px;
      outline: none;

      &:focus {
        border: 1px solid rgb(116, 8, 155) !important;
      }
    }

    textarea {
      width: 100%;
      margin-bottom: 30px;
      border-radius: 4px;
      border: 1px solid rgb(231, 167, 255);
      padding: 8px;
      outline: none;
      min-height: 70px;

      &:focus {
        border: 1px solid rgb(116, 8, 155) !important;
      }
    }

    .button {
      text-align: center;
    }
  }
}
</style>
