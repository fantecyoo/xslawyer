<template>
  <div class="head" :style="isHome">
      <!-- 图标 -->
      <img src="../../assets/logo4.png" alt="" v-if="isHome">
      <img src="../../assets/logo3.png" alt="" v-else>
      <!-- 导航栏 -->
      <div class="nav">
          <item path="/home">
              <v-slot>首页</v-slot>
          </item>
      </div>
      <div class="nav">
          <item path="/introduce">
              <v-slot>走进上贤</v-slot>
          </item>
      </div>
      <div class="nav">
          <item path="/professional">
              <v-slot>专业领域</v-slot>
          </item>
      </div>
      <div class="nav">
          <item path="/personnel">
              <v-slot>团队介绍</v-slot>
          </item>
      </div>
      <div class="nav">
          <item path="/recruit">
              <v-slot>贤才计划</v-slot>
          </item>
      </div>
      <div class="nav">
          <item path="/contact">
              <v-slot>联系我们</v-slot>
          </item>
      </div>
  </div>
</template>

<script>
import item from './item.vue'
export default {
    data(){
        return {
            cur:''
        }
    },
    method:{
        nvaClick(){

        }
    },
    components:{
        item
    },
    computed:{
        isHome(){
            if(this.$route.path === '/home'){
                return {
                    'color' : '#fff'
                }
            }
        }
    }
}
</script>

<style scoped>
.head{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
img{
    width: 200px;
    height: 70px;
    margin-right: 100px;
}
.nav{
    margin-right: 10px;

}
</style>