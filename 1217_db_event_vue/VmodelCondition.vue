<template>
  <h1>v-model condition</h1>
  <h2>{{ msg }}</h2>
  <input 
  v-model.lazy="msg"
   />
   <h2>{{ number }}</h2>
  <input 
  v-model.number="number"
   />
   <h2>{{ trimMessage }}</h2>
  <input 
  v-model="trimMessage"
   />
</template>
<script>
export default {
  data() {
    return {
      msg : 'hello Vue input !!',
      number : 100,
      trimMessage : '    Hello!!   ' 
    }
  },
  watch : {
    number() {
      console.log(typeof this.number);
    },
    trimMessage(){
      console.log(`trimMessage :', ${this.trimMessage.trim()}`);
      
    }
  }
}
</script>
<style lang="scss">
  
</style>