<template>
  <a-layout-sider id="Aside" v-model="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :selected-keys="[activeKey]">
      <a-menu-item key="1">
        <nuxt-link to="/">
          <a-icon type="home" />
          <span>홈</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="2">
        <nuxt-link to="/board">
          <a-icon type="bars" />
          <span>게시판</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="3">
        <nuxt-link to="/about">
          <a-icon type="coffee" />
          <span>About</span>
        </nuxt-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import TemplateType from '@/store/modules/template/types/TemplateType';
import TemplateGetterInterface from '@/store/modules/template/getters/TemplateGetterInterface';
import TemplateMutationInterface from '@/store/modules/template/mutations/TemplateMutationInterface';

@Component({
  name: 'AppAside'
})
export default class AppAside extends Vue {
  @Getter(TemplateType.GET_COLLAPSED_DATA)
  protected readonly collapsed!: TemplateGetterInterface[TemplateType.GET_COLLAPSED_DATA];

  @Mutation(TemplateType.SET_COLLAPSED_DATA)
  protected setCollapsed!: TemplateMutationInterface[TemplateType.SET_COLLAPSED_DATA];

  get activeKey(): string {
    if (this.$route.name === 'board') {
      return '2';
    } else if (this.$route.name === 'about') {
      return '3';
    } else {
      return '1';
    }
  }

  created(): void {
    this.init();
  }

  private init(): void {
  }
}
</script>
