<template>
  <div class="bigslot">
    <slot>
      <img :src="bigimgurl" alt="">
    </slot>
  </div>

</template>

<script>
export default {
  name: "bigslot",
  props: {
    bigimgurl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>