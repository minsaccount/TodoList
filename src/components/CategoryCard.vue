<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ["title", "items"],
  data() {
    return {};
  },
};
</script>

<style>
.category {
  width: 220px;
  height: 300px;
  background-color: skyblue;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>
