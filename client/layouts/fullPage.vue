<template>
  <a-layout id="App">
    <keep-alive>
      <nuxt />
    </keep-alive>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'FullPage'
})
export default class FullPage extends Vue {}
</script>

