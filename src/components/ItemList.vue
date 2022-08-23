<template>
  <div class="list">
    <Item v-for="(i, index) in newItems" :key="index" :title="i" />
  </div>
</template>

<script>
import Item from "./TodoItem.vue";
export default {
  components: {
    Item,
  },
  data() {
    return {
      items: ["复习axios", "学习正则表达式", "踏青"],
    };
  },
  computed: {
    newItems() {
      return this.items.filter((i) => {
        return i.indexOf("") !== -1;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.list{
    width: inherit;
 
}
</style>
