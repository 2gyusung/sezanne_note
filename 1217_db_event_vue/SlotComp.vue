<template>
  <h1>Slot Comp</h1>
  <BoxSlot color="royalblue" name="Orange" />
  <BoxSlot>Apple</BoxSlot>
  <BoxSlot :color="color">
    <span :style="{backgroundColor : color}">TEXT</span>
    </BoxSlot>
</template>
<script>
  import BoxSlot from './BoxSlot.vue';
export default {
  components : {
    BoxSlot
  },
  data() {
    return {
      color: 'pink'
    }
  }
}
</script>
<style lang="">
  
</style>