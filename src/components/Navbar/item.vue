<template>
  <div @click="itemClick" class="item">
    <div class="text"><slot></slot></div>
    <div class="border" v-show="isActive" :style="style"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      style: {},
    };
  },
  props: {
    path: "",
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
    mouseover(e) {
      if (!this.isActive) {
        this.style.width = '0px'
        this.style.display = 'initial'
        this.style.transition = 'all 2s'
        this.style.width = 'initial'
        console.log(this.style)
      }
      console.log("1");
    },
  },
  computed: {
    isActive() {
      if (this.$route.path === this.path) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.border {
  border-bottom: solid #bd0119 3px;
}
.item {
  height: 70px;
  display: flex;
  flex-direction: column;
  cursor:pointer
}
.text {
  margin-top: 20px;
  font-size: 17px;
  letter-spacing: 2px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0 10px 8px 10px;
}
</style>