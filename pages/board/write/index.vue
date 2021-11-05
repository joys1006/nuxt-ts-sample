<template>
  <div id="BoardWrite">
    <div class="write-header-wrapper mb20">
      <a-icon type="arrow-left" :style="{ fontSize: '32px' }" @click="$router.back()" />
    </div>
    <a-form class="write-edit-wrapper edit"
            :form="form"
            @submit="submit">
      <a-form-item class="edit-input-box edit-box">
        <p class="input-title title">제목</p>
        <p class="input-form form">
          <a-input
            v-decorator="[
              'title',
              {
                  rules: [
                      { required: true, message: '제목을 입력해주세요.' }
                  ]
              }
            ]"
            class="input"
            placeholder="제목을 입력해주세요." />
        </p>
      </a-form-item>
      <div class="edit-input-box edit-box">
        <p class="input-title title">내용</p>
        <p class="input-form form">
          <a-textarea
            v-decorator="[
              'content',
              {
                  rules: [
                      { required: true, message: '내용을 입력해주세요.' }
                  ]
              }
            ]"
            class="textarea"
            placeholder="내용을 입력해주세요."
            :auto-size="{ minRows: 10, maxRows: 10 }" />
        </p>
      </div>
      <div class="write-button-wrapper">
        <a-button class="success-button" type="primary" html-type="submit">등록</a-button>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';
import {WrappedFormUtils} from 'ant-design-vue/types/form/form';
import PostTableRequest from '@/types/mock/PostTableRequest';
import HomeType from '@/store/modules/home/types/HomeType';
import HomeGetterInterface from '@/store/modules/home/getters/HomeGetterInterface';
import HomeActionInterface from '@/store/modules/home/actions/HomeActionInterface';

@Component({
  name: 'BoardWrite'
})
export default class BoardWrite extends Vue {

  @Action(HomeType.POST_TABLE)
  private postTable!: HomeActionInterface[HomeType.POST_TABLE];

  @Getter(HomeType.GET_TABLES)
  private readonly tables!: HomeGetterInterface[HomeType.GET_TABLES];

  protected form!: WrappedFormUtils;

  created(): void {
    this.init();
  }

  private init(): void {
    this.form = this.$form.createForm(this);
  }

  protected submit(e: Event): void {
    e.preventDefault();
    this.form.validateFieldsAndScroll((err: any, values: any) => {
      if (!err) {
        const payload: PostTableRequest = new PostTableRequest();

        payload.title = values.title;
        payload.content = values.content;

        this.postTable(payload)
          .catch(() => this.$message.error('서버만들어야함..'));
      }
    });
  }
}
</script>
