<template>
  <div class="warp-container">
    <div class="field">
      <div class="mouse" />
      <div class="scroll" />
      <div class="arrow" />
    </div>
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
.warp-container {
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c9d6df;

  .field {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 300px;
  }

  .mouse {
    width: 50px;
    height: 90px;
    border: 3px solid #333;
    border-radius: 60px;
    position: relative;
    &::before {
      content: '';
      width: 12px;
      height: 12px;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      border-radius: 50%;
      opacity: 1;
      animation: wheel 2s infinite;
      -webkit-animation: wheel 2s infinite;
    }
  }

  @keyframes wheel {
    to {
      opacity: 0;
      top: 60px;
    }
  }

  @-webkit-keyframes wheel {
    to {
      opacity: 0;
      top: 60px;
    }
  }

  .scroll {
    width: 60px;
    height: 60px;
    border: 2px solid #333;
    border-radius: 50%;
    position: relative;
    animation: down 1.5s infinite;
    -webkit-animation: down 1.5s infinite;
    &::before {
      content: '';
      position: absolute;
      top: 15px;
      left: 18px;
      width: 18px;
      height: 18px;
      border-left: 2px solid #333;
      border-bottom: 2px solid #333;
      transform: rotate(-45deg);
    }
  }

  @keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(15px);
    }
    40% {
      transform: translate(0);
    }
  }

  @-webkit-keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(15px);
    }
    40% {
      transform: translate(0);
    }
  }

  .arrow {
    width: 0;
    height: 40px;
    border: 1px solid #333;
    position: relative;
    animation: scroll 1.5s infinite;
    -webkit-animation: scroll 1.5s infinite;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 100%;
      left: -5px;
      width: 1px;
      height: 10px;
      border-top: 10px solid #333;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }
  }

  @keyframes scroll {
    0% {
      height: 40px;
    }
    30% {
      height: 70px;
    }
    60% {
      height: 40px;
    }
  }

  @-webkit-keyframes scroll {
    0% {
      height: 40px;
    }
    30% {
      height: 70px;
    }
    60% {
      height: 40px;
    }
  }
}
</style>