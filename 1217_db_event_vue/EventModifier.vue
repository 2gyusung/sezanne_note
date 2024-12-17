<template>
 <h1>Event Modifier!!</h1>
  <!-- preventDefault(), stopPropagation() 메서드 등을 대신할 vue에서 사용하는 수식어 -->
   <a
   href="http://www.google.com" target="_blank"
   @click.prevent="handler">Google</a>
   <a
   href="http://www.google.com" target="_blank"
   @click.once.prevent="handler">Google</a>
   <StopAndCapture/>
</template>
<script>
import StopAndCapture from './StopAndCapture.vue';
export default {
  components : {
    StopAndCapture
  },
  methods : {
    handler(event) {
      // event.preventDefault();
      console.log(event);
      console.log('ABC!!');
      
    }
  }
}
</script>
<style lang="scss" scoped>

</style>