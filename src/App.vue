<template>
  <div id="app">
    <Test />
  </div>
</template>

<script>
import Test from "./components/TestChange";
export default {
  name: "App",
  components: {
    Test,
  },
  data() {
    return {
      msg: "你好啊！",
      studentName: "",
    };
  },
  methods: {}, //
};
</script>
