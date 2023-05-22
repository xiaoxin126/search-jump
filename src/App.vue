<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/text">Text</router-link>
  </nav>
  <router-view />
</template>
<script>

</script>
<style lang="less">
  @import url('./assets/css/page/App.less');
  // body{background-color: #000;}
</style>
