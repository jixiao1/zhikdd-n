<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view/> -->
    <p v-my-text="1+2+3+4"></p>
    <div v-my-show="true">2222</div>
    <div class="box" v-drag>1</div>
      <div class="box" v-drag.x>2</div>
  <div class="box" v-drag.y>3</div>
  <div class="box" v-drag.x.y>3</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  // 局部指令
  directives: {
    drag (el, info) {
      let { x, y } = info.modifiers
      if (!x && !y) {
        x = y = true
      }
      console.log('x:', x, 'y:', y)

      let tmpX = 0
      let tmpY = 0
      let offsetX = 0
      let offsetY = 0
      el.onmousedown = (ev) => {
        // console.log("开始拖拽...")
        const startX = ev.clientX - tmpX
        const startY = ev.clientY - tmpY
        el.style.position = 'relative'
        document.onmousemove = (ev) => {
          // console.log("正在拖拽...")
          offsetX = ev.clientX - startX
          offsetY = ev.clientY - startY
          x && (el.style.left = offsetX + 'px')
          y && (el.style.top = offsetY + 'px')
        }
        document.onmouseup = () => {
          // console.log("结束拖拽...")
          document.onmousemove = null
          tmpX = offsetX
          tmpY = offsetY
        }
      }
    }
  }
}
</script>

<style lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: lightskyblue;
  margin: 10px;
}
</style>
