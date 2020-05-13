<template>
  <div>
    <a class="btn-5" href="#">Slice</a>
    <a class="btn-11" href="#">Collision</a>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang='scss'>
@import '~@/styles/juice.scss';
$btn-height: 80px !default;
$btn-width: 250px !default;
*,
*:before,
*:after {
  box-sizing: border-box;
  transition: 0.5s ease-in-out;
}

*:before,
*:after {
  z-index: -1;
}

a {
  text-decoration: none;
  line-height: $btn-height;
  color: black;
}

[class^='btn-'] {
  position: relative;
  display: block;
  overflow: hidden;
  @include size(100%, $btn-height);
  text-align: center;
  max-width: $btn-width;
  margin: 1rem auto;
  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-5 {
  $btn-color: random-color(
    $max: 200
  );
  $btn-color-dark: shade($btn-color, 40%);
  color: tint($btn-color);
  @include triangle(up-right, 0, $btn-color-dark, true);
  @include triangle(down-left, 0, $btn-color-dark, true, before);

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 0 solid;
    transform: rotate(360deg);
  }

  &:before {
    bottom: 0;
    left: 0;
    border-color: transparent transparent transparent $btn-color-dark;
  }

  &:after {
    top: 0;
    right: 0;
    border-color: transparent $btn-color-dark transparent transparent;
  }

  &:hover {
    color: tint($btn-color, 75%);

    &:before,
    &:after {
      border-width: $btn-height $btn-width * 1.05;
    }
  }
}

@keyframes criss-cross-left {
  0% {
    left: -20px;
  }
  50% {
    left: 50%;
    @include size(20px);
  }
  100% {
    left: 50%;
    @include size($btn-width * 1.5);
  }
}

@keyframes criss-cross-right {
  0% {
    right: -20px;
  }
  50% {
    right: 50%;
    @include size(20px);
  }
  100% {
    right: 50%;
    @include size($btn-width * 1.5);
  }
}

.btn-11 {
  position: relative;
  $btn-color: random-color(
    $max: 200
  );
  $btn-color-dark: shade($btn-color, 40%);
  color: tint($btn-color);

  &:before,
  &:after {
    @include absolute(50%);
    content: '';
    @include size(20px);
    background-color: $btn-color;
    border-radius: 50%;
  }

  &:before {
    left: -20px;
    transform: translate(-50%, -50%);
    // animation: criss-cross-left 0.8s reverse;
  }

  &:after {
    right: -20px;
    transform: translate(50%, -50%);
    // animation: criss-cross-right 0.8s reverse;
  }

  &:hover {
    color: tint($btn-color, 75%);

    &:before,
    &:after {
      // @include size($btn-width);
    }

    &:before {
      animation: criss-cross-left 0.8s both;
      animation-direction: alternate;
    }

    &:after {
      animation: criss-cross-right 0.8s both;
      animation-direction: alternate;
    }
  }
}
</style>