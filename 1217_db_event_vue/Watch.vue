<template>

  <!-- 
    Watch는  어떤 데이터를 감시하고 있다가 대상 데이터의 변경을 감지하면 특정 함수를 실행
  -->
  <h1
  @click="changeMessage"
  >{{ msg }}</h1>
  <h2>{{ reverseMessage }}</h2>
</template>

<script>
export default {
  data(){
    return {
      msg : 'Bello!'
    }
  },
  methods : {
    changeMessage(){
      this.msg = 'Good!'
    }
  },
  watch : {
    msg() {
      console.log('msg : ', this.msg)
    },
    reverseMessage () {
      console.log('reverseMessage: ', this.reverseMessage)
    }
  },
  computed : {
    reverseMessage(){
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style lang="scss">

</style>
