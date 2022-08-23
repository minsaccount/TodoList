<template>
  <div class="item">
    <input type="checkbox"/>
    <label class="title">{{ title }}</label>
    <button class="button">删除</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: inherit;
  display: inline-block;
  margin-top: 10px;
  .title {
    line-height: 30px;
  }
  .button {
    width: 60px;    
    float: right;
    background-color: rgb(241, 142, 142);
    border-color: rgb(241, 142, 142);
    border-radius: 4px;
    
  }
}
</style>
