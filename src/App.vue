<template>
  <div>
    <!-- 顶部导航栏 -->
    <navbar></navbar>
    <!-- 路由区 -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/navbar.vue'
export default {
  components:{
    Navbar,
  }
}
</script>

<style>

</style>
