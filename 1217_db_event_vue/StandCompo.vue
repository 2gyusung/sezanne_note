<template>
    <h1>Standard Components</h1>
    <MyBtn/>
    <MyBtn color="orange" name="123"/>
    <MyBtn large=""/>
    <MyBtn large color="burlywood" name="Cherry"/>
</template>
<script>
import MyBtn from './MyBtn.vue';
export default {
  components : {
    MyBtn
  }
}
</script>