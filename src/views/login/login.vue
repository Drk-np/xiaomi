<template>
  <div class="login">
    <ul class="aaa">
      <li class="bbb">1111</li>
      <li class="bbb">2222</li>
      <li class="bbb">1111</li>
      <li class="bbb">2222</li>
      <li class="bbb">1111</li>
      <li class="bbb">2222</li>
      <li class="bbb">1111</li>
      <li class="bbb">2222</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>
.aaa {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #FFFFFF;
}

.bbb {
  display: inline-block;
  /*float: left;*/
  width: 50px;
  height: 100%;
  background-color: #646464;
  /*border: 1px solid #9a6e3a;*/
}

.aaa li::before {
  position: absolute;
  content: '';
  width: 1px;
  height: 100px;
  background: red;
  z-index: 50;
}
</style>