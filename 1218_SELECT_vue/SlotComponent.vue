<template>
  <h1>Slot Componets</h1>
  <SlotView>
    <template #text>
        <span>Banana</span>
    </template>
    <template #icon>
      <span>{B}</span>
    </template>
  </SlotView>
</template>


<script>
import SlotView from './SlotView.vue'
export default {
  components : {
    SlotView
  }
}
</script>