<template>
  <a-layout-header id="Header" style="background: #fff; padding: 0">
    <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="asideToggleEvent" />
  </a-layout-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import TemplateType from '@/store/modules/template/types/TemplateType';
import TemplateGetterInterface from '@/store/modules/template/getters/TemplateGetterInterface';
import TemplateMutationInterface from '@/store/modules/template/mutations/TemplateMutationInterface';

@Component({
  name: 'AppHeader'
})
export default class AppHeader extends Vue {
  @Getter(TemplateType.GET_COLLAPSED_DATA)
  protected readonly collapsed!: TemplateGetterInterface[TemplateType.GET_COLLAPSED_DATA];

  @Mutation(TemplateType.SET_COLLAPSED_DATA)
  protected setCollapsed!: TemplateMutationInterface[TemplateType.SET_COLLAPSED_DATA];

  public asideToggleEvent(): void {
    this.setCollapsed(!this.collapsed);
  }
}

</script>
