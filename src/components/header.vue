<template>
  <div class="header">
    <i class="fa fa-angle-left" @click="back()" v-if="show"></i>
    <div class="text">
      {{title}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'home'
      },
      show: {
        default: true
      }
    },
    methods: {
      back() {
        history.go(-1);
      }
    }
  };
</script>

<style lang="stylus">
  .header
    height: 50px
    padding: 0 15px
    line-height: 50px
    font-size: 20px
    color: white
    background: #35495e
    .fa-angle-left
      float: left
      font-size: 28px
      line-height: 50px
    .text
      width: calc(100% - 100px)
      margin: 0 auto
      text-align: center
</style>
