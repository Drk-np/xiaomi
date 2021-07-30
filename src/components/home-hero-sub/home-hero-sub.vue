<template>
  <div class="home-hero-sub container clear">
    <ul class="clear">
      <li><home-hero-subchaild :message="message"></home-hero-subchaild></li>
      <li><home-hero-subimg :imgurl="fristimg"></home-hero-subimg></li>
      <li><home-hero-subimg :imgurl="secondimg"></home-hero-subimg></li>
      <li><home-hero-subimg :imgurl="thirdlyimg"></home-hero-subimg></li>
    </ul>
  </div>
</template>

<script>
import HomeHeroSubimg from "./home-hero-subimg";
import HomeHeroSubchaild from "./home-hero-subchaild";
export default {
  name: "home-hero-sub",
  data(){
    return{
      fristimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340',
      secondimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340',
      thirdlyimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mal' +
          'l/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340',
      message:[{
        imgurl:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48',
        word:'小米秒杀'
      },
    {
        imgurl:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48',
        word:'企业团购'
      },
          {
        imgurl:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48',
        word:'F码通道'
      },
          {
        imgurl:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48',
        word:'米粉卡'
      },
          {
        imgurl:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48',
        word:'以旧换新'
      },
          {
        imgurl:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48',
        word:'话费充值'
      },
      ]
    }
  },
  components:{
    HomeHeroSubchaild,
    HomeHeroSubimg
  }
}
</script>

<style scoped>
.home-hero-sub {
  background-color: #FFFFFF;
  height: 170px;
  margin-top: 13px;
  margin-bottom: 26px;
}
.home-hero-sub ul li{
  float: left;
  height: 170px;
}
.home-hero-sub ul li:first-child{
  width: 234px;
  background-color: #5F5750;
  padding: 3px;
  box-sizing: border-box;
}
.home-hero-sub ul li:not(:first-child):hover{
  box-shadow: 0 5px 30px rgba(0,0,0,0.3);
}
.home-hero-sub ul li:not(:first-child){
  margin-left: 14px;
}
</style>