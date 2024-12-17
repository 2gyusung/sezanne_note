<template>
  <div class="btn" :style="$attrs.style">
    <slot></slot>
  </div>
  <h2 
  :class="$attrs.class"
  :title="$attrs.title" >Hi Attributes</h2>
</template>
<script>
export default {
  inheritAttrs : false,
  created() {
    console.log(this.$attrs);
    
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    background-color: orange;
    color: #fff;
    cursor: pointer;
  }
</style>