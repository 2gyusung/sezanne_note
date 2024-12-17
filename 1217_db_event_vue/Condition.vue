<template>
  <!-- 조건부 렌더링 -->
  <button 
    class="btn"
    @click="handler"
  >
    Click👆
  </button>
  <h1 
    :class="{active : isActive}"
  >
    {{msg}} - {{ count }}
  </h1>
  <div
    v-if="isShow"
    :style="[fontStyle, backgroundStyle]"
  >
    <h3>v-if</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quam eius tenetur, molestias vitae earum laboriosam aspernatur autem odit adipisci nostrum corporis odio velit recusandae reiciendis repudiandae deleniti, ullam error?</p>
  </div>
  <div
    v-else-if="count > 5"
    :style="[fontStyle, backgroundStyle]"
  >
    <h3>v-else-if</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quam eius tenetur, molestias vitae earum laboriosam aspernatur autem odit adipisci nostrum corporis odio velit recusandae reiciendis repudiandae deleniti, ullam error?</p>
  </div>
  <div
    v-else
    style="font-size: 70px; color: red;"
  >
  Please Button Click!!
</div>
<button class="btn"  @click="isHandler">Click</button>
<div v-show="isShow">
  <h2>Lorem ipsum dolor sit.</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita itaque quos dolorum animi esse eius beatae non maxime, explicabo hic adipisci rem saepe consequuntur unde numquam repellendus quibusdam officiis provident!</p>
</div>
</template>

<script>
export default {
  data(){
    return {
      msg : 'Bello?! World~!@',
      isDone : false,
      isActive : true,
      count : 0,
      fontStyle : {
        fontSize : '20px',
        color : 'darkgray'
      },
      backgroundStyle : {
        backgroundColor : 'pink'
      },
      isShow : false
    }
  },
  methods : {
    handler(){
      this.isDone = !this.isDone;
      this.isActive = !this.isActive;
      this.count += 1;
    },
    isHandler () {
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style lang="scss">
  .active {
    color: olive;
    font-size: 80px;
  }
</style>