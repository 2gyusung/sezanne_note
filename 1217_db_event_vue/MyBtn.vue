<template>
  <div
  :class="{large}"
  :style="{backgroundColor: color}"
   class="btn">
    {{ name }}
    </div>
</template>


<script>
export default {
  props : {
    color : {
      type : String,
      default : 'royalblue'
    },
    name : {
      type : String,
      default : 'Apple'
    },
    large : {
      type : Boolean,
      default : false
    }
  }
}
</script>
<style lang="scss" scoped>

.btn {
  background-color :royalblue;
  color: #fff;
  padding: 20px 10px;
  margin-bottom: 10px;
  &.large {
    font-size: 25px;
  }
}
</style>