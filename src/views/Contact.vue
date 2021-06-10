<template>
  <div class="contact">
    <!-- 图片 -->
    <div class="image">
      <img src="../assets/aboutus.jpg" alt="" />
      <div class="itext">上贤律师事务所</div>
    </div>
    <!-- 地址 -->
    <div class="note">
      <h3>来访者请提前电话预约</h3>
      <p>法律咨询热线:18502719736</p>
    </div>
    <div class="location">
        <div class="image2"><img src="../assets/阳光城2.jpg" alt=""></div>
        <div class="map">
            <iframe src="mapa.html" frameborder="0"></iframe>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image {
  height: 170px;
  overflow: hidden;
  padding-top: 20px;
}
.itext {
  font-size: 48px;
  position: absolute;
  z-index: 10;
  top: 18%;
  color: #fff;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 300;
}
.note{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.location{
    width: 80%;
    margin: 0 auto;
    height: 500px;
    display: flex;
}
img{
    width: 100%;
}
.image2{
    height: 100%;
    flex:1;
    overflow: hidden;
}
.map{
    margin-left: 50px;
    flex: 2;
}
iframe{
    width: 100%;
    height: 100%;
}
</style>