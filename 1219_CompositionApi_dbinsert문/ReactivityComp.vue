<template>
  <h1>Reactivity comp</h1>
  <div @click="increase">
    {{ count }}
  </div>
</template>


<script>
import {ref} from 'vue';

export default {
  setup() {
    const count = ref(0);
    const increase = () => {
      console.log(count.value);
      return count.value += 1;
    }
    return {
      count,
      increase
    }
  }
}
</script>

<style lang="scss">
div {
  font-size: 70px;
  color: royalblue
}
</style>