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
        menus : ['Home', 'About', 'Products', 'Location us', 'Sitemap', 'Signin', 'Signup' ]
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