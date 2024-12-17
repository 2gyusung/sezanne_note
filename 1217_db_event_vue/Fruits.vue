<template lang="ko">
    <li>
      {{fruitsData}}
    </li>
</template>
<script>
export default {
  props : {
    fruitsData : {
      type : String,
      default : ''
    }
  }
}
</script>
<style lang="scss">
  li {
    font-size: 28px;
    color: red;
    padding: 10px 0;
    & + &  {
      border-bottom: 1px solid gray;
    }
    &:nth-child(1) {
      border-bottom: 1px solid gray;
    }
  }
</style>