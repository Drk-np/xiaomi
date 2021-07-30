<template>
  <div class="videoshow">
    <div class="container clear">
      <div class="clear">
        <p class="p1 l">视频</p>
        <p class="p2 r">查看全部></p>
      </div>
      <div class="videos">
        <ul>
          <li v-for="(item, index) in videos" :key="index">
            <img :src="item.src" alt="" @click="videoclick(index)">
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </div>
    </div>
    <videochaild :videomessage="showvideo" ref="video"></videochaild>
  </div>
</template>
<script>
import videochaild from "./videochaild";

export default {
  name: "videoshow",
  data() {
    return {
      videos: [
        {
          title: '2021年春季新品发布会第一场',
          videosrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4',
          src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e74c4ff741bcdfc5b28a48a43e4edc6d.jpg?thumb=1&w=296&h=180&f=webp&q=90'
        },
        {
          title: 'Redmi 10X系列发布会',
          videosrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4',
          src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=296&h=180&f=webp&q=90'
        },
        {
          title: '小米10 青春版 发布会',
          videosrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4',
          src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=296&h=180&f=webp&q=90'
        },
        {
          title: '小米10 8K手机拍大片',
          videosrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4',
          src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=296&h=180&f=webp&q=90'
        },
      ],
      showvideo: []

    }
  },
  components: {
    videochaild
  },
  methods: {
    videoclick(index) {
      this.showvideo = []
      this.showvideo.push(this.videos[index])
      this.$refs.video.show = true

    }
  }
}
</script>

<style scoped>
.videoshow {
  padding-top: 24px;
  background-color: #F5F5F5;
}

.p1 {
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
}

.p2 {
  font-size: 16px;
  font-weight: 200;
  line-height: 58px;
}

.videos {
  width: 100%;
  height: 299px;
  /*background-color: #9a6e3a;*/

}

.videos li {
  float: left;
  width: 296px;
  height: 285px;
  transition: 0.5s;
}

.videos li:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.videos li img {
  width: 296px;
  height: 180px;
}

.videos li:not(:first-child) {
  margin-left: 14px;
}

.videos li p {
  width: 100%;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  padding: 30px 14px 6px;
  box-sizing: border-box;
}
</style>