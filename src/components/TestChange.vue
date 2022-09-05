<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  background-color: orange;
}
.v-enter-active {
  animation: hello 1s reverse;
}

.v-leave-active {
  animation: hello 1s;
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
