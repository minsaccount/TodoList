<template>
  <div class="footer">
    <div>合计：{{sum}} 已完成：{{todo}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        sum:3,
        todo:0
    };
  },
};
</script>

<style scoped>
.footer{
    margin-top: 10px;
}
</style>
