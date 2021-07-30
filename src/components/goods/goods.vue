<template>
  <div class="goods ">
    <div class="container clear">
      <div class="clear">
        <p class="p1 l">手机</p>
        <p class="p2 r">查看更多></p>
      </div>
        <div class="bigimg l">
          <a href="">
            <bigslot :bigimgurl="bigimgurl"></bigslot>
          </a>
        </div>
      <div class="little">
        <little :littlemgurl="littlemgurl"></little>
      </div>
    </div>
  </div>
</template>

<script>
import bigslot from "./goodschaild/bigslot";
import Little from "./goodschaild/little";

export default {
  name: "goods",
  data() {
    return {
      bigimgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&w=234&h=614&f=webp&q=90',
      littlemgurl: ['https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8909080ddb0851af0b87530e2927844f.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc32ec73299ff79556dcd1cf0f0ac11.png?thumb=1&w=200&h=200&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb69512d9d6430d865d457ec52eebb51.png?thumb=1&w=200&h=200&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34caee2c867bfd8c5e0dc2d8c663e121.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb554f30eaa0316b0a736c3d59f21584.png?thumb=1&w=200&h=200&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b7fbb6fe07907c60f08358adab5adfe.png?thumb=1&w=200&h=200&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d47f7ecaa04d92bf2790d4a5d53d9099.png?thumb=1&w=200&h=200&f=webp&q=90'],
    }
  },
  components: {
    Little,
    bigslot
  }
}
</script>

<style scoped>
.goods {
  background-color: #F5F5F5;
  padding-bottom: 40px;
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

.bigimg {
  width: 234px;
  height: 614px;
  transition: 0.5s;
}

.little {
  float: left;
  width: 992px;
  height: 614px;
}
.bigimg:hover{
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}
</style>