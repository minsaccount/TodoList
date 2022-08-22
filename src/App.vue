<template>
  <div id="app">
    <SchoolInfo></SchoolInfo>
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
}
</style>
