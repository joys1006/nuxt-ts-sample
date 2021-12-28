<template>
  <div id="FindId">
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import { Mixins } from 'vue-property-decorator';
import StickyFooter from '../../../../components/Layouts/StickyFooter/StickyFooter.vue';
import MessageMixin from '../../../../common/mixins/MessageMixin';

@Component({
  name: 'FindId',
  layout: 'fullPage',
  components: {
    StickyFooter
  }
})
export default class FindId extends Mixins(
  MessageMixin
) {

}
</script>
