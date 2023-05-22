<template>
  <div class="nav">
    <button @click="showSuccessMessage">显示成功消息</button>
    <button @click="showWarningMessage">显示警告消息</button>
    <button @click="showErrorMessage">显示错误消息</button>
  </div>
  <Toast ref="toast"></Toast>
</template>

<script>
export default {
  data () {
  },
  methods: {
    showSuccessMessage () {
      console.log(this.$refs.toast.show);
      this.$refs.toast.$emit("success", "操作成功");
    },
    showWarningMessage () {
      this.$refs.toast.$emit("warning", "操作警告");
    },
    showErrorMessage () {
      this.$refs.toast.$emit("error", "操作错误");
    }
  }
}
</script>
<style lang="less">
</style>