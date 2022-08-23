<template>
  <div id="app">
    <h3 class="title">To do list</h3>
    <Header></Header>
    <Item v-for="(i, index) in items" :key="index" :title="i" />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/HeaderSearch.vue";
import Item from "./components/TodoItem.vue";
import Footer from "./components/FooterSum.vue";
export default {
  name: "App",
  components: {
    Header,
    Item,
    Footer,
  },
  data() {
    return {
      items: ["复习axios", "学习正则表达式", "踏青"],
    };
  },
};
</script>

<style lang="scss" scoped>
#app {
  width: 400px;
  margin-top: 40px;
  padding: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border:solid 2px rgb(142, 201, 241);;
  border-radius:20px;
  .title {
    text-align: center;
  }
}
</style>
