<template>
  <div id="FindPassword">
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import { Mixins } from 'vue-property-decorator';
import StickyFooter from '../../../../components/Layouts/StickyFooter/StickyFooter.vue';
import MessageMixin from '../../../../common/mixins/MessageMixin';

@Component({
  name: 'FindPassword',
  layout: 'fullPage',
  components: {
    StickyFooter
  }
})
export default class FindPassword extends Mixins(
  MessageMixin
) {

}
</script>
