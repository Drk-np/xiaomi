<template>
  <div class="little">
    <slot>
      <ul>
        <li v-for="(item, index) in littlemgurl" :key="index">
          <a href="">
            <img :src="item" alt="">
          </a>
        </li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  name: "little",
  props: {
    littlemgurl: {
      type: Array,
      default: []
    }
  },
}
</script>

<style scoped>
.little li {
  width: 234px;
  height: 300px;

}

.little ul {
  height: 614px;
  padding-left: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}

.little li img {
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
    transition: 0.5s;

}

.little li img:hover{
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

</style>