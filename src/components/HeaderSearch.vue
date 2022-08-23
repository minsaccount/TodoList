<template>
  <div class="header">
    <input class="search" type="text" placeholder="请输入查找项" v-model="keyWord"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
        keyWord:''
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: inherit;
  .search {
    width: 392px;
    border-radius: 4px;
  }
}
</style>
