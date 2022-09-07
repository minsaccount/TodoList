<template>
  <div id="app">
    <CategoryCard title="美食" :items="food" />
    <CategoryCard title="电影" :items="film" />
    <CategoryCard title="游戏" :items="game" />
  </div>
</template>

<script>
import CategoryCard from "./components/CategoryCard";
export default {
  name: "App",
  components: {
    CategoryCard,
  },
  data() {
    return {
      food: ["薯片", "可乐", "蛋糕"],
      film: ["《你的名字》", "《情书》", "《言叶之庭》"],
      game: ["光遇", "双人成行", "动森"],
    };
  },
};
</script>
<style>
#app {
  display: flex;
  justify-content: space-around;
}
</style>
