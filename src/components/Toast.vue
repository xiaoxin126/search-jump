<template>
  <transition name="fade">
    <div class="modal" v-show="show">
      <div class="modal_title">{{ type }}</div>
      <button class="dangerBtn" @click="closeModal">{{duration}}</button>
    </div>
  </transition>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Toast",
  props: {
    message: String,
    type: {
      type: String,
      default: "success"
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    message() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, this.duration);
    }
  }
};
</script>

<style lang="less">
  @import url('../assets/css/PopupAnimation.less');
  @import url('../assets/css/button.less');
  .modal {
    z-index: 999;
    position: fixed;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    box-shadow: 1px 0px 2px #b1b1b1;
    border-radius: 8px;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 6px;
    button {
      height: 24px;
      margin-left: 4px;
    }
    .modal_title {
      flex:  1;
      margin: 1px;
      padding: 6px;
      box-shadow: inset 0px 0px 3px #b1b1b1;
      border-radius: 4px;
    }
  }
</style>