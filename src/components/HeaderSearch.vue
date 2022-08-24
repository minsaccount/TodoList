<template>
  <div class="header">
    <input
      class="search"
      type="text"
      placeholder="请输入添加的任务，按回车键确认"
      v-model.trim="item"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  props: ["receive"],
  data() {
    return {
      item: "",
    };
  },
  methods: {
    add() {
      if (!this.item) {
        return alert("输入不能为空！");
      }
      const todoObj = {
        id: nanoid(),
        name: this.item,
        finished: false,
      };
      this.receive(todoObj);
      this.item = "";
    },
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
