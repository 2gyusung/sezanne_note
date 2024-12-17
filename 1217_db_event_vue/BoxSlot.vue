<template lang="">
  <div class="btn" 
  :class="{large}" 
  :style="{backgroundColor: color}">
  {{name}}
  <slot/>
  </div>

</template>
<script>
export default {
  props: {
    color : { type : String , default : 'orange'},
    large : {type : Boolean, default : false},
    name : {type : String , default :'' }
  }
  
}
</script>
<style lang="">
  
</style>