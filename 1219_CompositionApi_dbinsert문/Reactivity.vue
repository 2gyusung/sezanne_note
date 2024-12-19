<template>
    <h1>Reactivity</h1>
  <div @click="increase">
    {{ count }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      count : 0
    }
  },
  methods : {
    increase() {
      this.count += 1;
    }
  }

}
</script>

<style lang="scss">
div {
  font-size: 70px;
  color: orange;
}
</style>