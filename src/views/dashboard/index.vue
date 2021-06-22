<!--
 * @description:
 * @Author: weirui
 * @Date: 2020-05-07 14:47:22
 * @FilePath: /vue-admin-template/src/views/dashboard/index.vue
-->
<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      345
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('user')

export default {
  name: 'Dashboard',
  data() {
    return {
      a: 2,
      b: 3
    }
  },
  computed: {
    name() {
      return this.$store.getters.name
    },
    ...mapGetters(['getName'])
  },
  asyncComputed: {
    sum() {
      const total = this.a + this.b
      const pro = new Promise(resolve => {
        setTimeout(() => resolve(total), 5000)
      })
      return pro
    }
  },
  methods: {
    setIframeStyle(className, style) {
      this.$nextTick(() => {
        const { height, width } = style
        console.log(document.querySelector(className))
        document.querySelector(className).style.height = height
        document.querySelector(className).style.width = width
      })
    }
  },
  mounted() {
    const handshake = new this.Postmate({
      container: document.querySelector('.dashboard-container'), // Element to inject frame into
      url: 'http://192.168.29.6:8080/child.html', // Page to load, must have postmate.js. This will also be the origin used for communication.
      name: 'my-iframe-name', // Set Iframe name attribute. Useful to get `window.name` in the child.
      classListArray: ['childIframe'] //Classes to add to the iframe via classList, useful for styling.
    })

    handshake.then(child => {
      // Fetch the height property in child.html and set it to the iFrames height
      child
        .get('height')
        .then(height => (child.frame.style.display = `${200}px`))
      child.call('setBodyFontSize', 20)
      // Listen to a particular event from the child
      child.on('some-event', data => console.log(data)) // Logs "Hello, World!"
    })
  }
}
</script>

<style lang="scss" scoped>
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
    font-size: 5rem;
    .camping {
      width: 8em;
      height: 8em;
    }
  }
}
</style>
