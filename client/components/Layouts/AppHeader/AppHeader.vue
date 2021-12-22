<template>
  <a-layout-header id="Header">
    <div class="header-left-area">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="asideToggleEvent" />
    </div>
    <div class="header-right-area">
      <div class="right-gnb-wrapper">
        <a-button @click="logout">로그아웃</a-button>
      </div>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import TemplateType from '@/store/modules/template/types/TemplateType';
import TemplateGetterInterface from '@/store/modules/template/getters/TemplateGetterInterface';
import TemplateMutationInterface from '@/store/modules/template/mutations/TemplateMutationInterface';
import AccountType from '@/store/modules/account/types/AccountType';
import AccountMutationInterface from '@/store/modules/account/mutations/AccountMutationInterface';

@Component({
  name: 'AppHeader'
})
export default class AppHeader extends Vue {

  @Getter(TemplateType.GET_COLLAPSED_DATA)
  protected readonly collapsed!: TemplateGetterInterface[TemplateType.GET_COLLAPSED_DATA];

  @Mutation(TemplateType.SET_COLLAPSED_DATA)
  protected setCollapsed!: TemplateMutationInterface[TemplateType.SET_COLLAPSED_DATA];

  @Mutation(AccountType.DELIETE_LOGIN_TOKEN)
  protected deleteLoginToken!: AccountMutationInterface[AccountType.DELIETE_LOGIN_TOKEN];

  public asideToggleEvent(): void {
    this.setCollapsed(!this.collapsed);
  }

  protected logout(): void {
    const config = {
      title: '알림',
      content: '로그아웃 하시겠습니까?',
      onOk: () => {
        this.deleteLoginToken();
        this.$router.push('/account/login');
      },
      okText: '확인',
      cancelText: '취소'
    };

    this.$confirm(config);
  }
}

</script>
