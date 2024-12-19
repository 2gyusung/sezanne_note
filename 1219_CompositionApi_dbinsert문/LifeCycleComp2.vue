<template>
  <h1>LifeCycle Comp 2!!</h1>
  <div @click="increase"> 
    {{ count }} -{{ doubleCount }}
  </div>
  <div @click="changeMessage"> 
    {{ message }} -{{ reverseMessage }}
  </div>
</template>
<script>
import { computed, ref} from 'vue';
  export default {
    setup() {
      const count =  ref(0);
      function increase() {
        return count.value += 10;
      }
      const message = ref('Hello!')
      function changeMessage() {
        return message.value = 'Good!!'
      }
      const doubleCount = computed(()=> {
        return count.value * 2
      })
      const reverseMessage = computed(()=> {
        return message.value.split('').reverse().join('');
      })
      return {
        count,
        increase,
        doubleCount,
        message,
        changeMessage,
        reverseMessage
      }
    }
  }
</script>