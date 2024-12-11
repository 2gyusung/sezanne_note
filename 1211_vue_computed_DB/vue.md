# interpolation
```jsx
<template>
  <h1>Interpolation!!</h1>
<!--
보간법 : 문자열 보간법 {{ }} => 코드로 인식이 되는 것이나닌 문자열로(텍스트)로 인식
v-once : 특정한 동작 등을 한번만 실행
-->
<h2>{{msg }}</h2>
<button 
v-once
@click="add"
class="btn">add</button>
<!-- <h2 v-once @click="add">{{ msg }}</h2> -->
 <div v-html="msg2"></div>


 <!--html 속성에는 mustaches를 html 사용할 수 없다.
     속성을 정의하고 데이터를 사용하려면 v-bind
 -->
 <h1 :[attr]="'active'" @[event]="add2">{{ msg3 }}</h1>
</template>
<script>
export default {
  data() {
    return {
      msg : 'Hello Vue',
      msg2 : '<h2 style="color:red">Hello!!</h2>',
      msg3 : 'active',
      attr : 'class',
      event : 'click'
    }
  },
  methods : {
    add() {
      this.msg += '?!';
    },
    add2() {
      this.msg3 += '?!';
    }
  }
}
</script>

<style lang="scss">
h1 {
  color :royalblue;
  font-size: 40px;
}
h2 {
  color: orange;
  font-size: 28px;
}
.active {
  color: burlywood;
  font-size: 100px;
}
</style>
</script>
```

```
data  v-vind => : 
methods > v-on -> @
동적 연결 인자 []
```

# ComputedCache
```jsx
<template>
  <h1>
    Computed Caching
  </h1>
  <!-- 
   여러개의 연산식이 있다고 가정하고 여러번의 계산 중 한번만 로직이 실행되고 똑같은 값을 반환하는 가능하게 하는 것 => computed랑 다른 개념 복사하며 필요할 때 꺼내 쓰는 것 => 캐싱
   -->
   <h2>{{ msg + '??!!' }}</h2>
   <h2>{{ msg.split('').join('') }}</h2>
   <h2>{{ reverseMessage() }}</h2>
   <h2>{{ reverseMessage() }}</h2>
   <h2>{{ reverseMessage() }}</h2>
   <h2>{{reverseMessageComputed}}</h2>
   
   <h2 @click="add" style="color: red;">{{reverseMessageComputed2}}</h2>
   <!-- 
    Computed의 Getter와 Setter
    Computed : 읽기전용이며 단방향  , 다시 값을 변경하려면 Setter 옵션을 이용하여 변경한다
    Getter : 데이터 가져오는 것  Setter : 값을 더해주거나 변경 시 추가
    -->
</template>

<script>


export default {
  data() {
    return {
      msg : 'Hello Computed!!'
    }
  },
  methods : {
    reverseMessage() {
      return this.msg.split('').reverse().join('')
    },
    add() {
    this.reverseMessageComputed2 += '?!!'
    // this.msg += '>>>'
  }
  },
  computed : {
    reverseMessageComputed() {
      return this.msg.split('').reverse().join('')
    },
    // reverseMessageComputed2() {
    //   return this.msg.split('').reverse().join('')
    // }
    // getter & setter
    reverseMessageComputed2 : {
      get() {
        return this.msg.split('').reverse().join('')
      },
      set( newValues) {
        this.msg = newValues;
      }
    }
    }
  }

</script>


<style lang="scss">
h1 {
  color: royalblue;
  font-size: 50px;
}
h2 {
  color: orange;
  font-size: 38px;
}
</style>
```