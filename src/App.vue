<template>
  <div id="app">
    <h3 class="title">To do list</h3>
    <Header @add="addItem" />
    <List
      :items="items"
      :changeCheck="changeCheck"
      :handleDelete="handleDelete"
    />
    <Footer
      :items="items"
      @select="changeSelect"
      @clear="handleClear"
    />
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
      items: JSON.parse(localStorage.getItem("items")) || [],
    };
  },
  methods: {
    addItem(item) {
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
    handleDelete(id) {
      this.items = this.items.filter((i) => {
        return i.id !== id;
      });
    },
    changeSelect(status) {
      this.items.forEach((i) => {
        i.finished = status;
      });
    },
    handleClear() {
      this.items = this.items.filter((i) => !i.finished);
    },
  },
  watch: {
    items: {
      deep: true,
      handler(value) {
        localStorage.setItem("items", JSON.stringify(value));
      },
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
