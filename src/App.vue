<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import Search from "./components/SearchBlock";
import List from "./components/ShowList.vue";
export default {
  name: "App",
  components: {
    Search,
    List,
  },
};
</script>
