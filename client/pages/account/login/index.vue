<template>
  <div id="Login">
    <!-- 타이틀 영역 -->
    <div class="title-wrapper">
      <h2 class="logo-big">NUXT TOY</h2>
    </div>
    <!-- // 타이틀 영역 -->
    <!-- 로그인 폼 영역 -->
    <div class="card-wrapper">
      <div class="card-contents">
        <div class="form-wrapper">
          <a-form id="loginForm"
                  :form="form"
                  @submit="submit">
            <a-form-item class="input-id-box">
              <a-input
                ref="userId"
                v-decorator="[
                  'userId',
                  {
                    rules: [
                      { required: true, message: '아이디를 입력해주세요.' }
                    ]
                  }
                ]"
                class="input-box"
                placeholder="아이디를 입력해주세요"
              >
              </a-input>
            </a-form-item>
            <a-form-item class="input-password-box">
              <a-input
                ref="password"
                v-decorator="[
                  'password',
                  {
                      rules: [
                          { required: true, message: '비밀번호를 입력해주세요.' }
                      ]
                  }
                ]"
                class="input-box"
                autocomplete="off"
                type="password"
                placeholder="비밀번호를 입력해주세요"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              class="login-button-box"
            >
              <a-button
                class="form-btn"
                type="primary"
                html-type="submit"
              >
                로그인
              </a-button>
            </a-form-item>
            <a-form-item class="login-save-box">
              <a-checkbox v-model="isSave"
                          class="checkbox-label">아이디 저장
              </a-checkbox>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
    <!-- // 로그인 폼 영역 -->
    <!-- 버튼 영역 -->
    <div class="contents-wrapper">
      <div class="contents button-wrapper">
        <span class="text">아이디 또는 비밀번호를 잊었나요?</span>
        <nuxt-link :to="{ name: 'FindId' }">아이디 찾기</nuxt-link>
        <nuxt-link :to="{ name: 'FindPassword' }">비밀번호 찾기</nuxt-link>
      </div>
    </div>
    <!-- // 버튼 영역 -->
    <sticky-footer />
  </div>
</template>

<script lang="ts">
import { Action, Component } from 'nuxt-property-decorator';
import { WrappedFormUtils } from 'ant-design-vue/types/form/form';
import { Mixins } from 'vue-property-decorator';
import StickyFooter from '@/components/Layouts/StickyFooter/StickyFooter.vue';
import AccountType from '@/store/modules/account/types/AccountType';
import AccountActionInterface from '@/store/modules/account/actions/AccountActionInterface';
import SignInRequest from '@/types/apis/request/user/SignInRequest';
import MessageMixin from '@/common/mixins/MessageMixin';

@Component({
  name: 'Login',
  layout: 'fullPage',
  components: {
    StickyFooter
  }
})
export default class Login extends Mixins(
  MessageMixin
) {

  @Action(AccountType.LOGIN)
  private signIn!: AccountActionInterface[AccountType.LOGIN];

  public form!: WrappedFormUtils;
  // 저장 체크
  public isSave: boolean = false;

  created(): void {
    this.init();
  }

  private init(): void {
    this.form = this.$form.createForm(this, { name: 'loginForm' });
  }

  private async login(): Promise<void> {
    const request: SignInRequest = new SignInRequest();

    request.userId = this.form.getFieldValue("userId");
    request.password = this.form.getFieldValue("password");

    try {
      await this.signIn(request);
      await this.$router.push('/');
      await this.$message.success('로그인 되었습니다.');
    } catch (error) {
      this.promiseErrorMessageHandler(error);
    }
  }

  /**
   * [submit 서브밋 이벤트]
   * @reg_date 2020-06-26
   * @version   [version]
   * @param     {Event}    e [이벤트 객체]
   */
  protected submit(e: Event): void {
    e.preventDefault();
    this.form.validateFields((err: any) => {
      if (!err) {
        this.login();
      }
    });
  }
}
</script>
