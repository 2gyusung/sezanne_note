<template>
  <h1>Watch</h1>
  <h2
    @click="changeMessage"
  >{{ msg }}</h2>
  <h2>{{ reverseMessage }}</h2>
</template>

<script>


export default {
  data() {
    return {
      msg : '!!hello'
    }
  },
  methods : {
      changeMessage() {
        this.msg += 'Good!!';
      }
    },
    computed : {
        reverseMessage() {
          return this.msg.split('').reverse().join('')
        }
    },
    watch : {
      msg(newValue) {
        console.log('msg : ',newValue);
        document.body.style.backgroundColor = '#efefef';
        
      },
      reverseMessage(newValue) {
        console.log('msg : ', newValue);
        document.body.style.backgroundColor = 'pink';
      }
    }
}

</script>

<style lang="scss">

</style>