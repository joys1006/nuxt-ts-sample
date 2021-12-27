<template>
    <div id="Register">
      회원가입~
    </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import { Mixins } from 'vue-property-decorator';
import StickyFooter from '../../../components/Layouts/StickyFooter/StickyFooter.vue';
import MessageMixin from '../../../common/mixins/MessageMixin';

@Component({
  name: 'Register',
  layout: 'fullPage',
  components: {
    StickyFooter
  }
})
export default class Register extends Mixins(
  MessageMixin
) {

}
</script>
