<template lang="ko">
    <div id="popup">
    <h1>팝업 페이지</h1>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
    <button @click="close">팝업닫기</button>
  </div>
</template>
<script>
export default {
  emits : [
  'closeModal'
  ],
  methods : {
    close() {
      this.$emit('closeModal', false)
    }
  }
}
</script>
<style lang="ko">

  
</style>