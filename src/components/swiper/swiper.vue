<template>
  <div class="swiper container">
    <transition-group name="flip-list" tag="ul">
      <li v-for="curImg in currImgs" v-bind:key="curImg" class="list-item">
        <img :src="curImg">
      </li>
    </transition-group>
  </div>
</template>

<script>


export default {
  name: "swiper",
  data() {
    return {
      currImgs: [],
      imgs: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/268aadece1368da98fcf5553b657cdb3.jpg?w=2452&h=920',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c3e97686468231f3f78048d7f2b7fdc.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5e896d87c53a449509c14701673098bb.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37de2b47154ae899cd31f4dcc291f1a2.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6e5ad482c9e0bc0aff2153bca94c0da.jpg?thumb=1&w=1226&h=460&f=webp&q=90'
      ],
      index: 0
    }

  },
  mounted: function () {
    this.currImgs = [this.imgs[0]];
    this.startChange();
  },
  methods: {
    startChange: function () {
      var _this = this;
      setInterval(function () {
        if (_this.index < _this.imgs.length - 1) {
          _this.index++
        } else {
          _this.index = 0
        }
        _this.currImgs.splice(0, 1, _this.imgs[_this.index]);
      }, 5000);
    }
  }
}
</script>
<style scoped>

.swiper{
   height: 460px;
  display: block;
}

.list-item {

  z-index: 1;
}
.list-item img{
  width: 100%;
  height: 100%;
  display: block;
}
.flip-list-enter-active, .flip-list-leave-active {
  transition: all 1s;
}

.flip-list-enter, .flip-list-leave-active {
  opacity: 0;
}

.swiper li {
  position: absolute;
  top: 0;
  left: 0;
}
</style>