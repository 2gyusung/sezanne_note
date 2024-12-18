
<template>
  <Parent :msg="message" :test="messageData" />
  <h2>Provide Inject :{{ messageData }}</h2>
  <button @click="messageData = 'Good!!'">click</button>
</template>
<script>
import Parent from './Parent.vue';
import { computed } from 'vue';
export default {
  components: {
    Parent
  },
  data() {
    return {
      message : 'Hello Vue!!',
      messageData : 'Vue Component Data이에여!!'
    }
  },
  provide() {
    return {
      provideMsg : computed(()=> this.messageData)
    }
  }
}
</script>