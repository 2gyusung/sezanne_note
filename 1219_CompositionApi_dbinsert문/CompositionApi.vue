<template>
  <h1
  @click="increase">
    {{ count }} - {{ doubleCount }}
  </h1>
  <h1>
    {{ message }} - {{ reverseMessage }}
  </h1>
</template>
<script>
export default {
    data() {
      return {
        count : 0,
        message : 'Hello!!'
      }
    },
    computed : {
      doubleCount() {
        return this.count * 2;
      },
      reverseMessage() {
        return this.message.split('').reverse().join('');
      }
    },
    methods: {
       increase() {
        return this.count += 1;
       }
    },
} 
</script>
<style>
  
</style>