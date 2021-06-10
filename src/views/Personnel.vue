<template>
  <div class="personnel">
      <!-- 标题 -->
      <h3>团队简介</h3>
      <!-- 个人信息 -->
      <div class="detail">
        <div class="item">
            <div class="image"><img src="..\assets\孙细莲.jpg" alt=""></div>
            <div class="text">
                <div class="personal">
                    <p align="center">孙细莲</p>
               <p class="career">中南财经政法大学法学专业毕业。1998年起开始执业，武汉市司法局法律援助律师团成员、武汉总工会法律援助律师团成员。</p>
                </div>
               <div class="exper">
                   <h4 align="center">擅长领域</h4>
                   <p align="center">婚姻家庭纠纷、合同纠纷、侵权纠纷、刑事辩护。</p>
               </div>
            </div>
        </div>
        <div class="item">
            <div class="image"><img src="..\assets\孙细莲.jpg" alt=""></div>
            <div class="text">
                <div class="personal">
                    <p align="center">孙细莲</p>
               <p class="career">中南财经政法大学法学专业毕业。1998年起开始执业，武汉市司法局法律援助律师团成员、武汉总工会法律援助律师团成员。</p>
                </div>
               <div class="exper">
                   <h4 align="center">擅长领域</h4>
                   <p align="center">婚姻家庭纠纷、合同纠纷、侵权纠纷、刑事辩护。</p>
               </div>
            </div>
        </div>
        <div class="item">
            <div class="image"><img src="..\assets\孙细莲.jpg" alt=""></div>
            <div class="text">
                <div class="personal">
                    <p align="center">孙细莲</p>
               <p class="career">中南财经政法大学法学专业毕业。1998年起开始执业，武汉市司法局法律援助律师团成员、武汉总工会法律援助律师团成员。</p>
                </div>
               <div class="exper">
                   <h4 align="center">擅长领域</h4>
                   <p align="center">婚姻家庭纠纷、合同纠纷、侵权纠纷、刑事辩护。</p>
               </div>
            </div>
        </div>
        <div class="item">
            <div class="image"><img src="..\assets\孙细莲.jpg" alt=""></div>
            <div class="text">
                <div class="personal">
                    <p align="center">孙细莲</p>
               <p class="career">中南财经政法大学法学专业毕业。1998年起开始执业，武汉市司法局法律援助律师团成员、武汉总工会法律援助律师团成员。</p>
                </div>
               <div class="exper">
                   <h4 align="center">擅长领域</h4>
                   <p align="center">婚姻家庭纠纷、合同纠纷、侵权纠纷、刑事辩护。</p>
               </div>
            </div>
        </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.personnel{
        margin-top: 10px;
    border-top: 2px solid #d8d8d8;
    padding-top: 15px;
    padding-bottom: 50px;
}
h3{
    text-align: center;
    font-size: 42px;
    letter-spacing: 7px;
    font-weight: 500;
}
.detail{
    width: 80%;
    margin: 70px auto;
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
}
.item{
    width: 40%;
    display: flex;
    margin-bottom: 50px;
}
img{
    width: 100%;
}
.image{
    flex: 1;
    overflow: hidden;
}
.text{
    background-color: #f3f5f9;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
h4{
    padding-bottom:5px;
    border-bottom: solid 1px;
    margin:-10px 5px;
}
.career{
    font-size: 15px;
    text-align: left;
    padding-top: 1px;
    font-weight: 500;
    color: #525252;
}
</style>