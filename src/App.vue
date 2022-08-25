<template>
  <div id="app">
    <h3 class="title">To do list</h3>
    <Header @add="addItem" />
    <List :items="items" />
    <Footer :items="items" @select="changeSelect" @clear="handleClear" />
  </div>
</template>

<script>
import pubsub from "pubsub-js";
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
    handleDelete(_, id) {
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
    updateItem(id,name){
      this.items.forEach(i=>{
        if(i.id==id){
          i.name=name
        }
      })
    }
  },
  watch: {
    items: {
      deep: true,
      handler(value) {
        localStorage.setItem("items", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("changeCheck", this.changeCheck); //事件全局总线
    this.pubId = pubsub.subscribe("handleDelete", this.handleDelete); //消息订阅
    this.$bus.$on("updateItem",this.updateItem)
  },
  beforeDestroy() {
    this.$bus.off("changeCheck");
    pubsub.unsubscribe(this.pubId);
    this.$bus.off("updateItem");
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
