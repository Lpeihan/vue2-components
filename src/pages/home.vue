<template>
  <div class="home">
    <v-header :show="false"></v-header>

    <div class="content">
      <router-link class="item" to="/picker">
        <i class="fa fa-pinterest-p"></i>
        <p class="text">Picker</p>
      </router-link>

      <router-link class="item" to="/address-picker">
        <i class="fa fa-viadeo"></i>
        <p class="text">Address</p>
      </router-link>

      <router-link class="item" to="/popup">
        <i class="fa fa-tripadvisor"></i>
        <p class="text">popup</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import header from '../components/header';

  export default {
    name: 'home',
    components: {
      'v-header': header
    }
  }
</script>
<style lang="stylus">
  @import "../styles/mixins"
  @import "../styles/variables"

  .home
    .content
      display: flex
      .item
        position: relative
        text-align: center
        flex: 1
        padding: 20px 0
        i.fa
          color: $primary
          font-size: 36px
        p.text
          margin: 5px 0 0 0
        &:before
          content: ''
          absolute: bottom 0 left 0 right 0
          height: 1px
          background: #c7c7c7
          transform: scaleY(.5)
        &:after
          content: ''
          absolute: right 0 top 0 bottom 0
          width: 1px
          background: #c7c7c7
          transform: scaleX(.5)
        &:nth-of-type(3n):after
          width: 0

      a
        text-decoration: none
        color: #333

</style>
