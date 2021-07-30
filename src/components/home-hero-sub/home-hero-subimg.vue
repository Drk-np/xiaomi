<template>
<div class="home-hero-subimg">
<img :src="imgurl" alt="">
</div>

</template>

<script>
export default {
  name: "home-hero-subimg",
  props:{
    imgurl:{
      type:String,
      default: ''
    }
  }
}
</script>

<style scoped>
.home-hero-subimg{
  height:170px ;
  width: 316px;
}
.home-hero-subimg img{
  width: 100%;
  height: 100%;
}
</style>