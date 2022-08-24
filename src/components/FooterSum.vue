<template>
  <div class="footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll" />
      已完成{{ finished }}/全部{{ total }}
    </label>
    <button class="button" @click="clearFinished">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ["items"],
  computed: {
    total() {
      return this.items.length;
    },
    finished() {
      return this.items.reduce(
        (pre, current) => pre + (current.finished ? 1 : 0),
        0
      );
    },
    isAll: {
      get() {
        return this.total == this.finished;
      },
      set(value) {
        this.$emit("select", value);
      },
    },
  },
  methods: {
    clearFinished() {
      if (confirm("确认删除已完成的事项吗？")) {
        this.$emit('clear');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 10px;
  .button {
    float: right;
    margin-top: 3px;
    background-color: rgb(241, 142, 142);
    border-color: rgb(241, 142, 142);
    border-radius: 4px;
  }
}
</style>
