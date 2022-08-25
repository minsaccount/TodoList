<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <SchoolInfo ></SchoolInfo>
    <StudentInfo></StudentInfo>
  </div>
</template>

<script>
import SchoolInfo from "./components/SchoolInfo.vue";
import StudentInfo from "./components/StudentInfo.vue";

export default {
  name: "App",
  components: {
    SchoolInfo,
    StudentInfo,
  },
  data() {
    return {
      msg: "你好啊！",
      studentName: "",
    };
  },
  methods: {
    
  },//
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(129, 201, 248);
}
</style>
