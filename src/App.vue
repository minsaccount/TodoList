<template>
  <div id="app">
    <h3 class="title">To do list</h3>
    <Header></Header>
    <List />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/HeaderSearch.vue";
import Footer from "./components/FooterSum.vue";
import List from "./components/ItemList.vue";
export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
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
  border: solid 2px rgb(142, 201, 241);
  border-radius: 20px;
  .title {
    text-align: center;
  }
}
</style>
