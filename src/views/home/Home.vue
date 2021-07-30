<template>
  <div class="home">
    <site-topbar></site-topbar>
    <Navbar></Navbar>
    <swiper></swiper>
    <home-hero-sub/>
    <langimg :imgurl="langimgurl1"></langimg>
    <goods></goods>
    <langimg :imgurl="langimgurl2"></langimg>
    <videopage></videopage>
    <div class="companymessage">
      <div class="container">
        <p>页脚</p>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import siteTopbar from "@/components/siteTopbar/siteTopbar";
import Navbar from "@/components/navbar/navbar";
import Swiper from "../../components/swiper/swiper";
import HomeHeroSub from "../../components/home-hero-sub/home-hero-sub";
import Langimg from "../../components/langimg/langimg";
import goods from "../../components/goods/goods";
import videopage from "../../components/video/videoshow";


export default {
  name: 'Home',
  data() {
    return {
      langimgurl1: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1226&h=120&f=webp&q=90",
      langimgurl2: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1226&h=120&f=webp&q=90'
    }
  },
  components: {
    videopage,
    Langimg,
    HomeHeroSub,
    Swiper,
    Navbar,
    siteTopbar,
    goods,
  },
}
</script>

<style scoped>
.companymessage {
  width: 100%;
  height: 200px;
}

.companymessage p {
  width: 100%;
  line-height: 200px;
  font-size: 50px;
  text-align: center;
}
</style>