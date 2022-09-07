<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group appear>
      <h1 v-show="isShow" key="0">你好啊</h1>
      <h1 v-show="!isShow" key="1">motio</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  background-color: orange;
}
.v-enter-active {
  animation: hello 1s linear reverse;
}

.v-leave-active {
  animation: hello 1s linear;
}
@keyframes hello {
  form {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
