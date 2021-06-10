<template>
  <div>
    <!-- 图片 -->
    <div class="image">
      <img src="../assets/aboutus.jpg" alt="" />
      <div class="itext">走进上贤</div>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <div class="title">走进上贤</div>
      <div class="line"></div>
      <div class="text">
        <p>
          “上贤”一词出自于《老子》《墨子》等先秦时期的中国古代文献，其寓意为推崇德才兼备的有识之士。
        </p>
        <p>
          上贤律师事务所是由湖北省司法厅批准设立的法律执业机构，办公地点位于武汉市江汉区香港路阳光城央座18层，办公面积700平米，全体成员约50人。律师团队成员多毕业于“五院四系”等法学名校，大部分具备本科及硕士学历，小部分具有博士学历和从事法学科研教育工作。团队成员大多数曾经具有公检法工作经历，并担任与法律行业相关的社会职务（仲裁委、调解委员会）。
        </p>
        <p>
          <b>业务涵盖领域：</b
          >应收账款管理、民商事、刑事辩护、知识产权、房地产建筑、金融、公司等。
        </p>
        <p><b>办所理念：</b>协同互补、精湛深入。</p>
        <p><b>办所特点：</b>一体化管理模式、一站式法律服务、一领域持续关注。</p>
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
.content {
  background-color: rgba(228, 222, 222, 0.9);
  width: 70vw;
  margin: 100px auto;
  padding: 20px;
}
.title {
  border-left: solid #bd0119 5px;
  font-size: 35px;
  padding-left: 10px;
  padding-bottom: 5px;
}
.line {
  margin-top: 10px;
  border-top: solid #bdb9ba 3px;
}
.text{
    font-size: 20px;
}
.itext{
    font-size: 48px;
    position: absolute;
    z-index: 10;
    top: 18%;
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 300;
}
</style>