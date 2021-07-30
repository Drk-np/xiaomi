<template>
<div class="langimg">
  <img :src="imgurl" alt="" class="container">
</div>
</template>
<script>
export default {
  name: "langimg",
  props:{
    imgurl:{
      type:String,
      default:''
    }
  }
}
</script>

<style scoped>
.langimg{
background-color:#F5F5F5 ;
  padding-bottom: 22px;
}

</style>