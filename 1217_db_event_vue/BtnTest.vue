<template>
    <div
  :class="{bold}"
  :style="{backgroundColor: color}"
   class="btn">
    {{ name }}
    </div>
</template>
<script>
export default {
  props : {
    bold : {
      type : Boolean,
      default : false
    },
    name : {
      type: String,
      default: 'Gyusung'
    },
    color : {
      type : String,
      default : 'skyblue'
    }
  }
}
</script>
<style lang="scss">
  .btn {
  background-color :royalblue;
  color: #fff;
  padding: 20px 10px;
  margin-bottom: 10px;
  &.large {
    font-weight: bold;
  }
  }

</style>