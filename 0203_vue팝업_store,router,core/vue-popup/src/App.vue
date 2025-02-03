<template>
  <h1>VUE!!</h1>
  <Popup
   v-if="modalState === true"
   @close-modal="closeModal"
   />
  <button @click="openModal">팝업 열기</button>
</template>

<script>
import Popup from './components/Popup.vue';



export default {
components: {
  Popup
},
data() {
  return  {
    modalState : false
  }
},
methods : {
  openModal() {
    this.modalState = true;
  },
  closeModal(data) {
    this.modalState = data;
  }
},

}
</script>

<style>

</style>
