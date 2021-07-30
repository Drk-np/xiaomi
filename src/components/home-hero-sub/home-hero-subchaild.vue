<template>
<div class="home-hero-subchaild">
  <ul>
    <li v-for="(item, index) in message" :key="index">
      <img :src="item.imgurl" alt="">
      <p>{{item.word}}</p>
    </li>
  </ul>
</div>

</template>

<script>
export default {
  name: "home-hero-subchaild",
  props:{
    message:{
      type: Array,
      default:{}
    }
  }
}
</script>

<style scoped>

.home-hero-subchaild li{
  float: left;
  width:76px ;
  height: 82px;
}
.home-hero-subchaild li img{
  display: block;
  text-align: center;
  width: 24px;
  height: 24px;
  padding-top: 18px;
  margin: 0 auto 3px;
}
.home-hero-subchaild li p{
  color: #FFFFFF;
  font-size: 12px;
margin-left: 13px;

}
</style>