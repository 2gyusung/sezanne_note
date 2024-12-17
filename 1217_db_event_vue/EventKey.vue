<template>
  <h1>EventKey</h1>
  <input
    @keydown.enter="handler"
  />
  <input
    @keydown.ctrl.a="handler"
  />
  <input
    @keydown.ctrl.alt.a="handler"
  />
</template>
<script>
export default {
  methods : {
    handler(e) {
        // if(e.key === "Enter") {
        //   console.log(e);
        // }
        console.log(e);
        
    }
  }
}
</script>
<style lang="scss">
  
</style>