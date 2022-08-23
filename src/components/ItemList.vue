<template>
  <div class="list">
    <Item v-for="i in items" :key="i.id" :item="i" />
  </div>
</template>

<script>
import Item from "./TodoItem.vue";
export default {
  components: {
    Item,
  },
  props: {
    items: [],
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: inherit;
}
</style>
