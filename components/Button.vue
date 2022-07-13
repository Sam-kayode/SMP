<template>
  <div>
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
  padding: 15px 45px;
  border: 1px solid #a966c8;
  box-shadow: inset 0px 0.7px 0px #a966c8;
  font-size: 18px;
  background: #a966c800;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    width: 101%;
    height: 0%;
    background: #801887;
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
    height: 400%;
    background: #a966c8;
    position: absolute;
    left: -20px;
    bottom: -200%;
    z-index: -3;
  }

  &:hover {
    color: #a966c8;
    transition: 0.5s ease-in;
    box-shadow: none;

    &::after {
      content: '';
      width: 101%;
      height: 490%;
      background: rgb(253, 239, 255);
      border-radius: 40%;
      position: absolute;
      left: -1px;
      bottom: -200%;
      transition: 0.5s ease-in;
      z-index: -1;
    }
  }
}
</style>
