import { Component, Vue } from 'nuxt-property-decorator';
import { Modal } from 'ant-design-vue';
import { ModalOptions } from 'ant-design-vue/types/modal';
import HttpStatusEnum from '@/common/enums/HttpStatusEnum';

@Component({
  name: 'MessageMixin'
})
export default class MessageMixin extends Vue {

  private STATUS = HttpStatusEnum;

  /**
   * statusFormatter HttpStatus 상태에 대한 이넘 포메터 메소드
   * @param code {number} HttpStatus code
   */
  public statusFormatter(code:number | undefined = 404)  {
    return (this.STATUS as any)[code];
  }

  /**
   * promiseErrorMessageHandler Axios Error 에 대한 메세지 처리
   * @param error ErrorResponse 에러 메세지
   */
  public promiseErrorMessageHandler(error: any) {
    const $el = this.$createElement;
    const message: any = $el('div', {}, [
      $el('p', '네트워크 통신 상태가 불안정합니다.'),
      $el('p', '잠시 후에 다시 시도해 주세요.'),
    ]);
    const config: ModalOptions = {
      title: '알림',
      content: message,
      onOk: () => location.reload(),
      okText: '재접속',
      cancelText: '닫기',
      onCancel: () => {
        if (error.status > 400) {
          this.$router.push({
            name: 'StatusError',
            params: {
              status: error.status
            }
          });
        }
      }
    };

    Modal.destroyAll();

    if (error) {

      if (error.data) {
        config.content = $el('p', error.data.error.message || message);
      } else {
        config.content = $el('p', error.message);
      }

      if (error.status > 400) {
        this.$confirm(config);
      } else {
        config.okText = '확인';
        config.onOk = () => {};
        this.$error(config);
      }

    }
  }
}
