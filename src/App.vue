<template>
  <div id="app">
    <h1>{{ msg }}{{studentName}}</h1>
    <SchoolInfo :getSchoolName="getSchoolName"></SchoolInfo>
    <StudentInfo @motio="getStudentName"></StudentInfo>
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
    getSchoolName(value) {
      console.log(value);
    },
    getStudentName(value) {
      console.log(value);
      this.studentName = value;
    },
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
  background-color: rgb(129, 201, 248);
}
</style>
