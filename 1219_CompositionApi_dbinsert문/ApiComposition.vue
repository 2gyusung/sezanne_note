<template>
  <h1
  @click="increase">
    {{ count }} - {{ doubleCount }}
  </h1>
  <h1>
    {{ message }} - {{ reverseMessage }}
  </h1>
</template>
<script>
import { computed, ref } from 'vue';

// composition api
  export default {
    setup() {
      const message = ref('Hello!!!')
      const reverseMessage = computed(()=> {
        return message.value.split('').reverse().join('')
      })
      const count = ref(0);
      const doubleCount = computed(()=> {
        return count.value * 2
      })
      function increase() {
        count.value += 1;
      }
      return {
        count,
        message,
        reverseMessage,
        doubleCount,
        increase
		};
    }
  }
</script>
<style>
  
</style>