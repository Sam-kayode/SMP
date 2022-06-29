<template>
  <div class="text-center">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style lang="scss" scoped>
button {
  border: none;
  padding: 15px 40px;
  border: 2px solid #a966c8;
  font-size: 18px;
  transition: 0.3s ease-out;
  background: #a966c8;
  color: #ffffff;

  &:hover {
    background: #8e49ae;
    transition: 0.3s ease-out;
    color: #ffffff;
  }
}
</style>
