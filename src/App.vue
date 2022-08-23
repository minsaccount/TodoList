<template>
  <div id="app">
    <h3 class="title">To do list</h3>
    <Header :receive="receive" />
    <List :items="items" :changeCheck="changeCheck" />
    <Footer />
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
  data() {
    return {
      items: [
        { id: "001", name: "复习axios", finished: false },
        { id: "002", name: "学习正则表达式", finished: false },
        { id: "003", name: "踏青", finished: false },
      ],
    };
  },
  methods: {
    receive(item) {
      this.items.unshift(item);
    },
    changeCheck(id) {
      this.items.forEach((i) => {
        if (i.id == id) {
          i.finished = !i.finished;
        }
      });
      console.log(id);
    },
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
