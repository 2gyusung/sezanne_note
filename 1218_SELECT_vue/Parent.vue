<template>
    <h1>parent compo...</h1>
  <Child :hello="msg"></Child>
</template>

<script>
import Child from './Child.vue';
export default {
  components : {
    Child
  },
  props : {
    msg : {
      type: String,
      default : ''
    }
  },
  created() {
    console.log('parent',this.msg);
    
  }
}
</script>