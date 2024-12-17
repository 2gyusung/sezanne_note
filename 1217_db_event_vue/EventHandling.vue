<template>
  <h1>Event handling!!</h1>
  <button 
  v-on:click="handler"
  class="btn">click!!1</button>
  <button 
  v-on:click="handlerTwo('Hello' ,$event)"
  class="btn">handlerTwo</button>
  <button 
  v-on:click="handlerTwo('Hi')"
  class="btn">handlerTwo</button>
  <button 
  v-on:click="clickA('hi',$event) , clickB('what',$event)"
  class="btn">click!3!</button>
</template>
<script>
export default {
  methods : {
    handler(e) {
      console.log(e);
      console.log(e.target);
      console.log(e.target.textContent);
    },
    handlerTwo(msg, event) {
      console.log(msg);
      console.log(event);
      console.log(event.target);
    },
    clickA(msg,e) {
      console.log( 'A',msg,e);
    },
    clickB(msg,e) {
      console.log('B',msg,e);   
}
  }
}
</script>
<style lang="scss">
  
</style>