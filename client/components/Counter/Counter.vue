<template>
  <div class="counter">
    <p class="counter-wrapper">
      <strong class="number">{{ number }}</strong>
    </p>
    <div class="counter-button-wrapper">
      <button class="counter-plus-button" @click="plus">+</button>
      <button class="counter-minus-button" @click="minus">-</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ErrorMessage from '@/common/enums/error/ErrorMessage';

@Component({
  name: 'Counter'
})
export default class Test extends Vue {
  @Prop({
    default: () => {
      return false;
    }
  })
  protected readonly numberEventLisner!: void;

  protected number = 1;

  protected plus(): void {
    if (this.number < 100) {
      this.number += 1;
    } else {
      this.$message.error(ErrorMessage.PLUS_ERROR_MESSAGE);
    }
    this.$emit('childrenDateEvent', this.number);
  }

  protected minus(): void {
    if (this.number > 0) {
      this.number -= 1;
    } else {
      this.$message.error(ErrorMessage.MINUS_ERROR_MESSAGE);
    }
    this.$emit('childrenDateEvent', this.number);
  }
}
</script>
