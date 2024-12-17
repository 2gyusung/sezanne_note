<template>
  <!-- 
    데이터를 속성에 연결하려면 v-bind를 사용
    html 속성 -> class, href, title, alt, src, placeholder ...
    데이터를 객체, 배열로 사용 가능
  -->
  <h1
    :class="{activate : isActive}"
    @click="activate"
  >
    Bello!w!
  </h1>
  <h1
    :class="isActive ? 'active' : ''"
  >
    Bello!w!
  </h1>
  <!-- 
    스타일 바인딩 -> v-bind사용
  -->
  <h1
    :style="[fontStyle, backgroundColor]" 
    @click="changeStyled"
  >
    Bello!w! StyleBinding!
  </h1>
</template>

<script>
export default {
  data(){
    return {
      isActive : false,
      fontStyle : {
        color : 'burlywood',
        fontSize: '100px'
      },
      backgroundColor : {
        backgroundColor : 'black'
      }
    }
  },
  methods : {
    activate () {
      // 정적 데이터 변경
      // this.isActive = true

      // 동적 데이터 변경
      this.isActive = !this.isActive
    },
    changeStyled () {
      this.fontStyle.color = 'pink';
    }
  }
}
</script>

<style lang="scss" scoped>
  .active {
    color: yellowgreen; font-weight: 900;
  }
</style>