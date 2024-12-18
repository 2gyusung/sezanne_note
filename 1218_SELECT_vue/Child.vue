<template>
  <h1>Child Component...</h1>
  <h2>{{ hello }}</h2>
  <h2>{{ provideMsg}}</h2>
</template>
<script>
export default {
  props : {
    hello : {
      type : String,
      default : ''
    }
  },
  inject : [
    'provideMsg'
  ]
    
  
}
</script>