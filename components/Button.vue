<template>
  <div>
    <button class="sq-btn">
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
.sq-btn {
  border: none;
  padding: 14px 45px;
  border: 1px solid #a966c8;
  box-shadow: inset 1px 1px 1px #a966c8;
  font-size: 18px;
  background: #ffffff00;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    width: 101%;
    height: 0%;
    background: #8a53a5;

    border-radius: 50%;
    position: absolute;
    transition: 0.5s ease-out;
    left: -1px;
    z-index: -3;
    bottom: -200%;
  }

  &::before {
    content: '';
    width: 121%;
    height: 100%;
    background: #a966c8;
    position: absolute;
    left: -20px;
    bottom: 0;
    z-index: -3;
  }

  &:hover {
    // color: #a966c8;
    transition: 0.5s ease-out;

    &::after {
      content: '';
      width: 101%;
      height: 490%;
      background: #8a53a5;
      border-radius: 40%;
      position: absolute;
      left: -1px;
      bottom: -200%;
      transition: 0.5s ease-out;
      z-index: -1;
    }
  }
}
</style>
