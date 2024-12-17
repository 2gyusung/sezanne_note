<template>
  <h1>Form Binding</h1>
  <!-- <input
    :value="msg"
    @input="msg = $event.target.value"
  /> -->
  <!-- <h2>{{ msg }}</h2>
  <input v-model="msg2"/>
  <h2>{{ msg2 }}</h2>
  <h2>{{ checkd }}</h2>
  <input type="checkbox" v-model="checkd"/>
  <input v-model="msg3" @input="msg = $event.target.value"/>
  <h2>{{ msg3 }}</h2> -->
  <ul>
    <li
    :class="{clickli}"
    @click="clickli"
    ></li>
    <h2>{{ msg }}</h2>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      msg : 'Hello Form Binding',
      // msg2 : 'Hello2222 Form Binding',
      // checkd : false,
      // msg3 : 'hello'
    }
  },
  methods: {
       handler(event) {
          console.log(event.target.value); 
          this.msg = event.target.value;
          
       },
       clickli(e) {
        e.console.log('출려ㅑㄱ');
        
       } 
    }
}
</script>