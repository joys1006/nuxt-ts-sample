<template>
  <a-layout-sider id="Aside" v-model="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <nuxt-link to="/">
          <a-icon type="user" />
          <span>Home</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="2">
        <nuxt-link to="/about">
          <a-icon type="video-camera" />
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
}
</script>
