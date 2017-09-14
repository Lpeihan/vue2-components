<template>
  <div class="popup-page">
    <v-header title="popup"></v-header>
    <button
      class="btn btn-default btn-lg btn-block"
      @click="$refs.bottom.open()">
      从底部弹出
    </button>

    <button
      class="btn btn-default btn-lg btn-block"
      @click="$refs.top.open()">
      从顶部弹出
    </button>

    <button
      class="btn btn-default btn-lg btn-block"
      @click="$refs.left.open()">
      从左侧弹出
    </button>

    <button
      class="btn btn-default btn-lg btn-block"
      @click="$refs.right.open()">
      从右侧弹出
    </button>

    <popup ref="bottom" type="bottom"></popup>
    <popup ref="top" type="top"></popup>
    <popup ref="left" type="left"></popup>
    <popup ref="right" type="right"></popup>
  </div>
</template>

<script>
  import Popup from '../components/popup';
  import Header from '../components/header';

  export default {
    components: {
      'v-header': Header,
      Popup
    }
  };
</script>

<style lang="stylus">
  .popup-page
    .btn-block
      width: calc(100% - 30px)
      margin: 15px auto
</style>
