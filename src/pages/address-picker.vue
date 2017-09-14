<template>
  <div class="address-page">
    <v-header title="address"></v-header>
    <address-picker ref="addressPicker" v-model="address"></address-picker>
    <field
      title="地址选择"
      :value='addressValue'
      @click.native="open()">
    </field>
  </div>
</template>

<script>
  import AddressPicker from '../components/address-picker';
  import Field from '../components/field';
  import Header from '../components/header';

  export default {
    data() {
      return {
        address: {
          province: '',
          city: '',
          county: '',
          town: ''
        }
      }
    },
    components: {
      'v-header': Header,
      AddressPicker,
      Field
    },
    computed: {
      addressValue() {
        return `${this.address.city} ${this.address.county}`;
      }
    },
    methods: {
      open() {
        this.$refs.addressPicker.open();
      }
    }
  };
</script>
