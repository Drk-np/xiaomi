<template>
  <div v-if="show" class="videochaild">
    <div class="videobox">
      <p>{{ videomessage[0].title }}</p>
      <i class="icon-baseline-close-px iconfont" @click="xclick"></i>
      <video :src="videomessage[0].videosrc" autoplay controls></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "videochaild",
  props: {
    videomessage: {
      type: Array,
      default: []
    }
  },
  data(){
    return{
      show:false
    }
  },
  methods:{
    xclick(){
      this.show = false
    }
  }
}
</script>

<style scoped>
.videochaild {
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.videobox {
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: #FFFFFF;
  width: 880px;
  height: 555px;
  margin: 0 auto;
  transform: translateY(-50%) translateX(-50%);
  box-sizing: border-box;
}

.videobox p {
  width: 880px;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 400;
  color: #424242;
  text-align: left;
  padding: 0 20px;
  box-sizing: border-box;
}

.videobox i {
  width: 24px;
  height: 25px;
  position: absolute;
  top: 13px;
  right: 20px;
  color: red;
  font-size: 24px;
  font-weight: 200;
  vertical-align: middle;
  cursor: pointer;
}

.videobox video {
  display: block;
  width: 880px;
  height: 495px;
}
</style>