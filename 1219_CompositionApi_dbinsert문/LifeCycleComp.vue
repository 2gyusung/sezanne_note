<template>
  <h1>LifeCycle Comp 2!!</h1>
  <div @click="increase"> 
    {{ count }} -{{ doubleCount }}
  </div>
  <div @click="changeMessage"> 
    {{ message }} -{{ reverseMessage }}
  </div>
</template>

<script>


export default {
  data() {
    return {
      count : 0,
      message: 'Hello'
    }
  }
  ,
  methods : {
    increase () {
      this.count += 10;
    },
    changeMessage() {
      this.message = 'Good!'
    }
  },
  computed : {
    doubleCount() {
     return  this.count * 2
    },
    reverseMessage() {
      return this.message.split('').reverse().join('');
    }
  }

}
</script>
<style lang="scss">
div {
  font-size: 60px;
  color: orange;
}
</style>