<template>
  <div class="dashboard-container">
    <div class="dashboard-text">向世界展示中国的力量!!!</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: hello;
  src: url(https://m0-file2.bybutter.com/uploaded/rms/0FCC0AC2C38D38A6A411587632739091.otf);
}
.dashboard {
  &-container {
    width: 100%;
    height: calc(100vh - 50px);
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to top,
      #2c5364,
      #203a43,
      #0f2027
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to top,
      #2c5364,
      #203a43,
      #0f2027
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-text {
    color: #fff;
    font-family: hello;
    font-size: 3rem;
  }
}
</style>
