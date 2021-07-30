<template>
  <div class="navbar">
    <div class="container">
      <div class="logo">
        <h1>
          <a href="#">小米官网</a>
        </h1>
      </div>
      <div class="goods-nav-bar">
        <ul class="clear">
          <li>
            <a href="#" :class="{isshow:isshow}">全部商品分类</a>
          </li>
          <li v-for="(item,index) in menulist" :key="index"
              @mouseover="hoverin(index)"
              @mouseleave="hoverout"
          >
            <a href="#">{{ item }}</a>
          </li>
          <li>
            <a href="#">服务</a>
          </li>
          <li>
            <a href="#">社区</a>
          </li>
        </ul>
      </div>
      <div class="search r clear ">

        <ul>
          <li>
            <input type="text" class="l"
                   :placeholder="inputvalue"
                   @focus="changecolor"
                   @blur="losefocus" ref="input"
                   :class="{onfocus:isonfocus}">
            <span class="iconfont icon-sousuo" :class="{onfocus:isonfocus}"></span>
          </li>
        </ul>
      </div>
    </div>
    <el-collapse-transition>
      <div style="height: 100px;">
        <el-collapse-transition>
          <div v-show="show3" class="navgoodslist"
               @mouseover="hoverin"
               @mouseleave="hoverout">
            <div class="transition-box container">
              <ul class="navgoods">
                <li v-for="(item,index) in goodslist" :key="index">
                  <a href="">
                    <img :src="item.imgurl" alt="">
                    <p class="p1">{{ item.name }}</p>
                    <p class="p2">{{ item.price }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </el-collapse-transition>
    <div class=" container clear">
      <div class="site-category l">
        <ul>
          <li v-for="(item, index) in meniulist"
              :key="index"
              @mouseover="showchaildlist(index)"
              @mouseout="notshowchaildlist">
            <a href="">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="children-list l" v-show="ischaildlistshow">
        <ul>
          <li v-for="(item, index) in chaildgoodslist" :key="index"
              @mouseover="showchaildlist(index)"
              @mouseout="notshowchaildlist">
            <a href="">
              <img :src="item.imgurl" alt="">
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "navbar",
  props: {},
  data() {
    return {
      //手机导航栏
      menulist: ['小米手机', 'Redmi红米', '电视',
        '笔记本', '家电', '路由器', '智能硬件',],
      // 输入栏的值
      inputvalue: '全部商品',
      isonfocus: false,
      isshow: true,
      ischaildlistshow: false,
      hover: false,
      show3: '',
      goodslist: [],
      chaildgoodslist: [],
      goodslistxiaomiphone: [
        {
          name: '小米Mix FOLD',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起',
        },
        {
          name: '小米11 Ultra',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起',
        },
        {
          name: '小米Mix FOLD',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1c45eadcedeb27b1cafca0359422da9.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: '小米Mix FOLD',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56e3379b5422cb06e5c8a0c546445606.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: '小米Mix FOLD',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9149ef3ba2c9025a4a21c98ae793808.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: '小米Mix FOLD',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/963679eaf3937351e154600ab3448460.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
      ],
      goodslistredmiphone: [
        {
          name: 'Note 10 Pro',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e3c5d99c28700a3c45ea65eebbea0a04.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起',
        },
        {
          name: 'Note 10 Pro',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88bb84ff06f0ab467b859aeed36b817a.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起',
        },
        {
          name: 'Note 10 Pro',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88bb84ff06f0ab467b859aeed36b817a.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: 'Note 10 Pro',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/acd0f27496ccdf81ef42124c35e8bfc4.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: 'Note 10 Pro',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d07671f25a2b3a6c3d4fac189f28fbe9.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: 'Note 10 Pro',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/584add2c9cfdb9eefe7b642bf191773a.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
      ],
      goodslistxiaomidianshi: [
        {
          name: '小米电视6 至尊版 55英寸',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2626643d50f029c89f9dce1d6fc92273.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起',
        },
        {
          name: '小米电视6 至尊版 55英寸',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c40ca118f075d39c5b7c2ee30cccddc4.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起',
        },
        {
          name: '小米电视6 至尊版 55英寸',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: '小米电视6 至尊版 55英寸',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: '小米电视6 至尊版 55英寸',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: '小米电视6 至尊版 55英寸',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
      ],
      goodslistxiaomibijiben: [
        {
          name: '小米笔记本 Pro X 15',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaa9aaf2b53fff98ad651589fffc3e21.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起',
        },
        {
          name: '小米笔记本 Pro X 15',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37fcbe3b823c837b6ffe7f59f7aa579e.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起',
        },
        {
          name: '小米笔记本 Pro X 15',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/789c69b743d9c46a39dd179cefdbce7c.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: '小米笔记本 Pro X 15',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ef482fe00cdcb7294e4029543ca9b9b.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: '小米笔记本 Pro X 15',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/705cde5b7afce7ee89d95d1a35938778.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
        {
          name: '小米笔记本 Pro X 15',
          imgurl: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7872a4195d666f08bef0877562dd7fe7.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: '1669元起'
        },
      ],

      meniulist: ['手机 电话卡', '电视 盒子', '笔记本 显示器', '家电 插线板',
        '出行 穿戴', '智能 路由器', '电源 配件', '健康 儿童', '耳机 音箱', '生活 箱包']
    }
  },
  methods: {
    changecolor() {
      // console.log('获取焦点并改变颜色');
      this.isonfocus = true
    },
    losefocus() {
      // console.log('失去焦点并改变颜色');
      this.isonfocus = false
    },
    hoverin(index) {
      // console.log('hoverin');
      this.show3 = true;
      console.log(index)
      switch (index) {
        case 0 :
          this.goodslist = this.goodslistxiaomiphone;
          break
        case 1 :
          this.goodslist = this.goodslistredmiphone;
          break
        case 2 :
          this.goodslist = this.goodslistxiaomidianshi;
          break
        case 3 :
          this.goodslist = this.goodslistxiaomibijiben;
          break
      }
    },
    hoverout() {
      // console.log('hoverout');
      this.show3 = false
    },
    showchaildlist(index) {
      this.ischaildlistshow = true;
      switch (index) {
        case 0 :
          this.chaildgoodslist = this.goodslistxiaomiphone;
          break
        case 1 :
          this.chaildgoodslist = this.goodslistredmiphone;
          break
        case 2 :
          this.chaildgoodslist = this.goodslistxiaomidianshi;
          break
        case 3 :
          this.chaildgoodslist = this.goodslistxiaomibijiben;
          break
      }
    }, notshowchaildlist() {
      this.ischaildlistshow = false;
    }
  },
}
</script>

<style scoped>
.children-list ul {
  z-index: 30;
  display: flex;
  height: 460px;
  width: 992px;
  padding: 2px 0;
  flex-direction: column;
  /*background-color: #FFFFFF;*/
  flex-wrap: wrap;
  /*overflow:hidden;*/
  box-sizing: border-box;
  list-style-type: none;
  align-content: flex-start;
}

.children-list li {
  z-index: 30;
  /*background-color: #FFFFFF;*/
  display: inline-block;
  width: 265px;
  height: 76px;
  padding: 18px 20px;
  line-height: 42px;
  box-sizing: border-box;
}

.children-list li img {
  display: inline-block;
  width: 40px;
  height: 40px;
  vertical-align: middle;
}

.children-list {
  position: relative;
  top: 1px;
  height: 460px;
  z-index: 30;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, .18);
}

.site-category {
  top: 1px;
  z-index: 10;
  position: relative;
  width: 234px;
  height: 460px;
  background-color: rgba(105, 101, 101, .6);
  padding: 20px 0;
  box-sizing: border-box;
}

.site-category li {
  float: left;
  height: 42px;
  width: 234px;
  padding-left: 30px;
  box-sizing: border-box;
}

.site-category li a {
  width: 100%;
  height: 100%;
  color: #fff;
  line-height: 42px;
}

.site-category li:hover {
  background-color: #ff6700;
}

.site-category li a:after {
  position: absolute;
  right: 25px;
  content: ">";
  display: inline-block;
}

.navbar {
  position: relative;
  height: 100px;
  border-bottom: 1px solid #E0E0E0;
}

.logo {
  position: absolute;
  top: 22px;
  height: 56px;
  width: 56px;
  display: block;
}

.logo a {
  display: block;
  height: 56px;
  width: 56px;
  background: url(~@/assets/img/xiaomi.png) no-repeat;
  background-size: 56px 56px;
  font-size: 0;
  overflow: hidden;
}

.goods-nav-bar {
  position: absolute;
  left: 122px;
}

.goods-nav-bar ul li {
  float: left;
  font-size: 16px;
  line-height: 100px;
  padding: 0 10px;
}

.goods-nav-bar ul li:first-child {
  padding: 0;
  margin-right: 16px;
}

.goods-nav-bar ul li:hover:not(:first-child) a {
  color: #ff6700;
}

.search {
  margin-top: 25px;
}

.search input {
  display: block;
  width: 223px;
  height: 48px;
  border: 1px solid #E0E0E0;
  border-right: none;
  /*取消搜索框的线条*/
  outline-style: none;
  padding: 0 10px;
}

.search span {
  display: inline-block;
  color: #616161;
  width: 39px;
  height: 46px;
  border: 1px solid #E0E0E0;
  padding: 1px 6px;
  font-size: 24px;
  line-height: 46px;
  text-align: center;
}

.search:hover input, .search:hover span {
  border-color: #B0B0B0;
}

.search span:hover {
  background-color: #ff6700;
  color: #fff;
  border-color: #ff6700;
}

.onfocus {
  border-color: #ff6700 !important;
}

.isshow {
  visibility: hidden;
}

.navgoodslist {
  position: absolute;
  top: 100px;
  width: 100%;
  height: 230px;
  z-index: 30;
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.transition-box .navgoods{
  position:relative;
  height: 230px;
  width: 1226px;
   /*clear: both;*/
}
.transition-box .navgoods li{
  position:relative;
  display:inline-block;
  width: 204px;
  height: 230px;
  /*float: left;*/
  /*background: #646464;*/
}
.transition-box .navgoods li img {

  height: 110px;
  width: 160px;
  margin: 50px auto 16px;
}

/*.navgoods li:not(:last-child) img{*/
/*  border-right: 1px solid #E0E0E0;*/
/*}*/

.transition-box ul li:not(:first-child)::before{
  position: absolute;
  top: 55px;
  left: 0;
  content: '';
  width: 1px;
  height: 100px;
  background: #E0E0E0;
}

.navgoods li a p {
  line-height: 20px;
  color: #333;
  text-align: center;
  display: block;
}

.navgoods li a .p2 {
  color: #ff6700;
}
</style>