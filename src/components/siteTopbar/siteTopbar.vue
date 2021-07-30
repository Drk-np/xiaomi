<template>
  <div class="siteTopbar clear">
    <div class="container">
      <div class="l">
        <ul>
          <li>
            <a href="">小米商城</a><i>|</i>
          </li>
          <li>
            <a href="">MIUI</a><i>|</i>
          </li>
          <li>
            <a href="">IoT</a><i>|</i>
          </li>
          <li>
            <a href="">云服务</a><i>|</i>
          </li>
          <li>
            <a href="">天星数科</a><i>|</i>
          </li>
          <li>
            <a href="">有品</a><i>|</i>
          </li>
          <li>
            <a href="">小爱开放平台</a><i>|</i>
          </li>
          <li>
            <a href="">企业团购</a><i>|</i>
          </li>
          <li>
            <a href="">资质证照</a><i>|</i>
          </li>
          <li>
            <a href="">协议规则</a><i>|</i>
          </li>
          <li>
            <a href="">下载app</a><i>|</i>
          </li>
          <li>
            <a href="">智能生活</a><i>|</i>
          </li>
          <li>
            <a href="">Select Location</a>
          </li>
        </ul>
      </div>
      <div class="r">
        <ul class="right">
          <li @click="login">
            <a href="/login">登录</a><i>|</i>
          </li>
          <li>
            <a href="">注册</a><i>|</i>
          </li>
          <li>
            <a href="">消息通知</a><i>|</i>
          </li>
          <li class="cart">
            <span class="iconfont-cart"></span>
            <a href="">购物车（{{ cartcount }}）</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "siteTopbar",
  data() {
    return {
      cartcount: 0
    }

  },
  methods: {
    login() {
      console.log('点击了');
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.siteTopbar {
  z-index: 9;
  height: 40px;
  background-color: #333333;
}

.siteTopbar {
  background-color: #333333;
  height: 40px;
}

.container ul li {
  float: left;
  line-height: 40px;

}

div ul li i {
  color: #424242;
}

.l ul li a, .container .r ul li a {
  color: #b0b0b0;
  display: inline-block;
  font-size: 12px;
  font-family: sans-serif;
}

.container div ul li i {
  margin: 0 6px;
}

.iconfont-cart img {
  display: inline-block;
  height: 20px;
  width: 20px;
  vertical-align: middle;
  margin-right: 4px;
}

.cart {
  display: inline-block;
  width: 120px;
  text-align: center;
}

.iconfont-cart {
  display: inline-block;
  height: 20px;
  width: 20px;
  background: url("~@/assets/img/cart.png") no-repeat;
  background-size: 20px 20px;
  vertical-align: middle;
  margin-right: 4px;
}

.container .r ul .cart:hover {
  background-color: #FFFFFF;
}

.container .r ul .cart:hover a {
  color: #ff6700;
}

.container .r ul .cart:hover span {
  background: url("~@/assets/img/cartactive.png") no-repeat;
  background-size: 20px 20px;
  vertical-align: middle;
}
.container ul li a:hover{
  color: #FFFFFF;
}
</style>