<template>
  <li>
    <label class="title">
      <input
        type="checkbox"
        :checked="item.finished"
        @click="handlecheck(item.id)"
      />
      <span>{{ item.name }}</span>
    </label>
    <button class="button" @click="deleteItem(item.id)">删除</button>
  </li>
</template>

<script>
export default {
  props: ["item", "changeCheck", "handleDelete"],
  methods: {
    handlecheck(id) {
      this.changeCheck(id);
    },
    deleteItem(id) {
      if (confirm("确定删除吗？")) {
        this.handleDelete(id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  width: inherit;
  display: inline-block;
  margin-top: 10px;
  background-color: antiquewhite;
  border-radius: 4px;
  .title {
    line-height: 30px;
  }
  .button {
    width: 60px;
    float: right;
    margin-top: 3px;
    background-color: rgb(241, 142, 142);
    border-color: rgb(241, 142, 142);
    border-radius: 4px;
    display: none;
  }
}
li:hover {
  background-color: rgb(142, 201, 241);
}
li:hover button {
  display: block;
}
</style>
