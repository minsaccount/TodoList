<template>
  <div class="school">
    <h3>学校名称：{{ name }}</h3>
    <button @click="sendSchoolName">获取学校名称</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Nanjing Normal University",
    };
  },
  props:['getSchoolName'],
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
};
</script>

<style>
.school {
  background-color: rgb(154, 230, 188);
}
</style>
