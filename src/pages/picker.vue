<template>
  <div class="picker-page">
    <v-header title="picker"></v-header>
    <picker
      ref="picker"
      :options="options"
      v-model="value">
    </picker>
    <field
      title="单列选择"
      v-model="value"
      @click.native="open()">
    </field>
  </div>
</template>

<script>
  import Picker from '../components/picker';
  import Field from '../components/field';
  import header from '../components/header';

  export default {
    components: {
      'v-header': header,
      Picker,
      Field
    },
    data() {
      return {
        options: [
          '汽车票',
          '飞机票',
          '火车票',
          '轮船票',
          '其他'
        ],
        value: '火车票'
      };
    },
    methods: {
      open() {
        this.$refs.picker.open();
      }
    }
  };
</script>
