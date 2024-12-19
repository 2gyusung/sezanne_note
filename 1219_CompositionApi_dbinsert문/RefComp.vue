<template>
  <h1
  ref="hello" 
  id="hello">Refs Component!!</h1>
  <Ref ref="childHello"/>
</template>


<script>
import Ref from './Ref.vue';
export default {
  components : {
    Ref
  },
  created() {
    console.log('created!!');
    console.log(this.$refs);
  },
  mounted() {
    console.log('mounted!!');
    const h1El = document.querySelector('#hello')
    console.log(h1El);   
    console.log(this.$refs.hello);
    const el = this.$refs.childHello.$refs.good
    el.addEventLister('click',()=> {
      console.log('hello!');      
    });
    console.log(this.$refs.hello.$refs.good);
    
  }
}

</script>