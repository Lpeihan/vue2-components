<template>
  <div class="field">
    <div class="left">
      {{title}}
    </div>
    <div class="right">
      {{value}}<i class="fa fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      value: {
        type: String
      }
    }
  };
</script>

<style lang="stylus">
  @import "../styles/variables"
  @import "../styles/mixins"

  .field
    height: 50px
    line-height: 50px
    padding: 0 15px
    border-bottom: 1px solid $border
    border-top: 1px solid $border
    display: flex
    .left
      flex: 1
    .right
      flex: 1
      text-align: right
      color: $gray
      .fa-angle-right
        margin-left: 10px
        relative: top 3px
        color: #ddd

</style>
