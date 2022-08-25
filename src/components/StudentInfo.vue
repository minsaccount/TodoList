<template>
  <div class="student">
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Motio",
      age: 22,
    };
  },
  methods: {
    
  },
};
</script>

<style>
.student {
  background-color: rgb(240, 240, 155);
}
</style>
