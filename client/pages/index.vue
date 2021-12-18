<template>
  <div id="Home">
    <counter @numberEventLisner="numberEventLisner"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import Counter from '@/components/Counter/Counter.vue';

@Component({
  name: 'Home',
  components: {
    Counter
  }
})
export default class Home extends Vue {
  public numberEventLisner(number: number): void {
    console.log(number);
  }
}

</script>
