<template>
  <div class="picker">
    <transition name="pop">
      <div class="picker-wrap" v-show="show">
        <header @touchmove="$event.preventDefault()">
          <div class="cancle" @click="back()">取消</div>
          <div class="confirm" @click="back()">确定</div>
        </header>

        <div class="content">
          <div class="select"></div>
          <ul
            @touchstart="handleTouchstart($event)"
            @touchmove="handleTouchmove($event)"
            @touchend="handleTouchend($event)"
            :style="{ 'transform' : 'translate3d(0,' + translateY + 'px, 0)' }"
            :class="{ 'dragging': dragging }">
            <li></li>
            <li></li>
            <li></li>
            <li
              v-for="(option, index) in options"
              :class="{
                'current': option == value,
                'one': Math.abs(index - currentIndex) == 1,
                'two': Math.abs(index - currentIndex) == 2,
                'three': Math.abs(index - currentIndex) >= 3
              }">
              {{option}}
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="overlay">
      <div class="picker-overlay" v-show="show" @click="back()" @touchmove="$event.preventDefault()"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        dragging: false,
        currentIndex: 0,
        startY: 0,
        translateY: 0,
        startTranslateY: 0,
        distanceY: 0,
        height: 40
      };
    },
    props: {
      options: {
        type: Array
      },
      value: {
        type: String
      }
    },
    methods: {
      open() {
        history.pushState({ page: 'picker' }, 'picker', `${window.location.href}#`);
        this.show = true;
      },
      back() {
        window.history.go(-1);
      },
      close() {
        this.show = false;
      },
      setValue(value) {
        this.$emit('input', value);
      },
      initPage(value) {
        let currentIndex = 0;

        if (this.value) {
          currentIndex = this.options.findIndex((value) => {
            return value === this.value;
          });
        } else {
          this.setValue(this.options[0]);
        }

        this.currentIndex = currentIndex;
        this.translateY = -this.height * currentIndex;
      },
      getPageY(e) {
        return e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
      },
      setPage() {
        const total = this.options.length;
        let page = Math.round((this.translateY / this.height).toFixed(1));

        page = page > 0 ? 0 : page;
        page = total - 1 >= Math.abs(page) ? page : -(total - 1);

        const index = Math.abs(page);

        this.currentIndex = index;
        this.setValue(this.options[index]);
        this.translateY = page * this.height;
      },
      handleTouchstart(e) {
        this.distanceY = 0;
        this.startY = this.getPageY(e);
        this.startTranslateY = this.translateY;
        this.dragging = true;
      },
      handleTouchmove(e) {
        this.distanceY = this.getPageY(e) - this.startY;
        this.translateY = this.startTranslateY + this.distanceY;

        if (Math.abs(this.distanceY) > 0) {
          e.preventDefault();
        }
      },
      handleTouchend(e) {
        this.dragging = false;
        this.setPage();
      }
    },
    mounted: function() {
      addEventListener('popstate', this.close);

      this.initPage();
    },
    beforeDestroy: function() {
      removeEventListener('popstate', this.close);
    }
  };
</script>

<style lang="stylus">
  @import "../styles/mixins"
  @import "../styles/variables"

  .picker
    &-wrap
      fixed: bottom 0 left 0 right 0
      z-index: 10
      font-size: 16px
      background: white

      &.pop
        &-enter-active
        &-leave-active
          transition: all .4s ease
        &-enter
        &-leave-active
          transform: translateY(100%)

      header
        padding: 0 12px
        height: 44px
        line-height: 44px
        border-bottom: 1px solid $border
        .cancle
          width: 50%
          float: left
          color: $gray
        .confirm
          width: 50%
          float: right
          text-align: right
          color: $primary

      .content
        display: flex
        height: 280px
        overflow: hidden
        ul
          flex: 1
          position: relative
          transition: all .3s ease
          text-align: center
          &.dragging
            transition: none
          li
            height: 40px
            line-height: 40px
            &.current
              color: $primary
            &.one
              opacity: .5
            &.two
              opacity: .4
            &.three
              opacity: .3

        .select
          absolute: bottom 120px
          z-index: -1
          size: 100% 40px
          background: #F7F9FB
          &:after
            content: ''
            absolute: top 0 left 0 right 0
            height: 1px
            background: $border
            transform: scaleY(0.5)
          &:before
            content: ''
            absolute: bottom 0 left 0 right 0
            height: 1px
            background: $border
            transform: scaleY(0.5)

    &-overlay
      fixed: top 0 left 0 right 0 bottom 0
      z-index: 9
      background: rgba(0, 0, 0, 0.6)
      &.overlay
        &-enter-active
        &-leave-active
          transition: all .4s ease
        &-enter
        &-leave-active
          opacity: 0

</style>
