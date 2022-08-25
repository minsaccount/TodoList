<template>
  <li>
    <label class="title">
      <input
        type="checkbox"
        :checked="item.finished"
        @click="handlecheck(item.id)"
      />
      <input
        v-show="item.isEdit"
        type="text"
        :value="item.name"
        @blur="handleBlur(item, $event)"
        ref="inputTitle"
      />
      <span v-show="!item.isEdit">{{ item.name }}</span>
    </label>
    <button class="button" @click="deleteItem(item.id)">删除</button>
    <button class="button" v-show="!item.isEdit" @click="editItem(item)">
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  props: ["item"],
  methods: {
    handlecheck(id) {
      this.$bus.$emit("changeCheck", id);
    },
    deleteItem(id) {
      if (confirm("确定删除吗？")) {
        pubsub.publish("handleDelete", id);
      }
    },
    editItem(item) {
      item.isEdit = true;
      this.$nextTick(()=>{
        this.$refs.inputTitle.focus()
      })
      
    },
    handleBlur(item, event) {
      item.isEdit = false;
      if (event.target.value)
        this.$bus.$emit("updateItem", item.id, event.target.value);
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
