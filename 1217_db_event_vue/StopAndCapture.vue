<template>
  <h2>Bubbleing & Capturing</h2>
  <div class="parent" 
  @click="handlerA">
    <div class="child" 
    @click="handlerB">
    <div class="deep-child" @click="handlerC">
    </div>
  </div>
  </div>
  <div class="parent-box" @wheel.passive="handelrD">
    <div class="child-box"></div>
  </div>
</template>
<script>
export default {
  methods : {
    handlerA(e) {
    console.log('target:',e.target);
    console.log('target:',e.currentTarget);
    
  },
  handlerB() {
      // event.stopPropagation();
      console.log('BBB!!!');

    },
    handlerC() {
      // event.stopPropagation();
      console.log('CC!!!');

    },
    handelrD(e) {
      for(let i =0; i < 1000; i++){
        console.log(e);
      }
      
    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  margin-top: 40px;
  color: orange;
  font-size: 24px;
}
      .parent {
      width: 600px;
      height: 300px;
      padding: 20px;
      margin-top: 20px;
      background-color: royalblue;
      .child {
        width: 300px;
        height: 150px;
        background-color: orange;
      }
      .deep-child {
        width: 150px;
        height: 75px;
        background-color: tomato;
      }
    }
    .parent-box {
      width: 300px;
      height: 200px;
      background-color: red;
      overflow-y: auto;
      .child-box {
        width: 150px;
        height: 1000px;
        background-color: yellow;
      }
    }
</style>