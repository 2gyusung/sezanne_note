```
PS C:\web_class\vue_class\test_vue> npm i -D shortid
```
# shortid를 활용한 반복문
```jsx
<template>
  <button @click="handler">click!!</button>
  <ul class="menus">
    <li 
    v-for="{id , name} in newMenus"
     :key="name"
    >{{name}}- {{ id }}</li>
  </ul>
</template>
<script>
  import shortid from 'shortid';
export default {
    data() {
      return {
        menus : ['Home', 'About', 'Products', 'Location us', 'Sitemap', 'Signin', 'Signup'  ]
      }
    },
    methods:{
      handler() {
        this.menus.push('utils')
      }
    },
    computed : {
      newMenus() {
        return this.menus.map(menu=> {
          return {
              id : shortid.generate(),
              name :  menu
          }
        })
      }
    }
}
</script>
<style lang="scss" scoped>
    ul{
      li{
        font-size: 20px;
        line-height: 1;
      }
    }
</style>
```

# Event handling

```jsx
<template>
  <h1>Event handling!!</h1>
  <button 
  v-on:click="handler"
  class="btn">click!!1</button>
  <button 
  v-on:click="handlerTwo('Hello' ,$event)"
  class="btn">handlerTwo</button>
  <button 
  v-on:click="handlerTwo('Hi')"
  class="btn">handlerTwo</button>
  <button 
  v-on:click="clickA('hi',$event) , clickB('what',$event)"
  class="btn">click!3!</button>
</template>
<script>
export default {
  methods : {
    handler(e) {
      console.log(e);
      console.log(e.target);
      console.log(e.target.textContent);
    },
    handlerTwo(msg, event) {
      console.log(msg);
      console.log(event);
      console.log(event.target);
    },
    clickA(msg,e) {
      console.log( 'A',msg,e);
    },
    clickB(msg,e) {
      console.log('B',msg,e);   
}
  }
}
</script>
<style lang="scss">
  
</style>
```

# Modifier
```jsx
<template>
 <h1>Event Modifier!!</h1>
  <!-- preventDefault(), stopPropagation() 메서드 등을 대신할 vue에서 사용하는 수식어 -->
   <a
   href="http://www.google.com" target="_blank"
   @click.prevent="handler">Google</a>
   <a
   href="http://www.google.com" target="_blank"
   @click.once.prevent="handler">Google</a>
</template>
<script>
export default {
  methods : {
    handler(event) {
      // event.preventDefault();
      console.log(event);
      console.log('ABC!!');
      
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>
```
# Bubbleing & Capturing

```jsx

<template>
  <h2>Bubbleing & Capturing</h2>
  <div class="parent" @click="handlerA">
    <div class="child" 
    @click.stop="handlerB"></div>
  </div>
</template>
<script>
export default {
  methods : {
    handlerA() {
    console.log('AAA!!!');
    
  },
  handlerB() {
      // event.stopPropagation();
      console.log('BBB!!!');

    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  margin-top: 40px;
  color: orange;
  font-size: 24px;
}
      .parent {
      width: 600px;
      height: 300px;
      padding: 20px;
      margin-top: 20px;
      background-color: royalblue;
      .child {
        width: 300px;
        height: 150px;
        background-color: orange;
      }
    }
</style>

<template>
  <h2>Bubbleing & Capturing</h2>
  <div class="parent" 
  @click.capture="handlerA">
    <div class="child" 
    @click="handlerB"></div>
  </div>
</template>
<script>
export default {
  methods : {
    handlerA() {
    console.log('AAA!!!');
    
  },
  handlerB() {
      // event.stopPropagation();
      console.log('BBB!!!');

    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  margin-top: 40px;
  color: orange;
  font-size: 24px;
}
      .parent {
      width: 600px;
      height: 300px;
      padding: 20px;
      margin-top: 20px;
      background-color: royalblue;
      .child {
        width: 300px;
        height: 150px;
        background-color: orange;
      }
    }
</style>


<template>
  <h2>Bubbleing & Capturing</h2>
  <div class="parent" 
  @click="handlerA">
    <div class="child" 
    @click="handlerB">
    <div class="deep-child" @click="handlerC">
    </div>
  </div>
  </div>
</template>
<script>
export default {
  methods : {
    handlerA(e) {
    console.log('target:',e.target);
    console.log('target:',e.currentTarget);
    
  },
  handlerB() {
      // event.stopPropagation();
      console.log('BBB!!!');

    },
    handlerC() {
      // event.stopPropagation();
      console.log('CC!!!');

    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  margin-top: 40px;
  color: orange;
  font-size: 24px;
}
      .parent {
      width: 600px;
      height: 300px;
      padding: 20px;
      margin-top: 20px;
      background-color: royalblue;
      .child {
        width: 300px;
        height: 150px;
        background-color: orange;
      }
      .deep-child {
        width: 150px;
        height: 75px;
        background-color: tomato;
      }
    }
</style>
```
# passive
```jsx
<template>
  <h2>Bubbleing & Capturing</h2>
  <div class="parent" 
  @click="handlerA">
    <div class="child" 
    @click="handlerB">
    <div class="deep-child" @click="handlerC">
    </div>
  </div>
  </div>
  <div class="parent-box" @wheel.passive="handelrD">
    <div class="child-box"></div>
  </div>
</template>
<script>
export default {
  methods : {
    handlerA(e) {
    console.log('target:',e.target);
    console.log('target:',e.currentTarget);
    
  },
  handlerB() {
      // event.stopPropagation();
      console.log('BBB!!!');

    },
    handlerC() {
      // event.stopPropagation();
      console.log('CC!!!');

    },
    handelrD(e) {
      for(let i =0; i < 1000; i++){
        console.log(e);
      }
      
    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  margin-top: 40px;
  color: orange;
  font-size: 24px;
}
      .parent {
      width: 600px;
      height: 300px;
      padding: 20px;
      margin-top: 20px;
      background-color: royalblue;
      .child {
        width: 300px;
        height: 150px;
        background-color: orange;
      }
      .deep-child {
        width: 150px;
        height: 75px;
        background-color: tomato;
      }
    }
    .parent-box {
      width: 300px;
      height: 200px;
      background-color: red;
      overflow-y: auto;
      .child-box {
        width: 150px;
        height: 1000px;
        background-color: yellow;
      }
    }
</style>
```