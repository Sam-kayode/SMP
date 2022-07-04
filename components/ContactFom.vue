<template>
  <div class="contact-form">
    <form @submit="null">
      <label for="name">Full Name</label>
      <input type="text" placeholder="Your Full Name" name="name"  required/>
      <label for="email">Email</label>

      <input type="mail" placeholder="E-mail address" name="email"  required/>
      <label for="subject">SUbject</label>

      <input type="text" placeholder="Subject of mail" name="subject"  required/>

      <label for="message">Your Message</label>
      <textarea name="message" required></textarea>

      <Button></Button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
