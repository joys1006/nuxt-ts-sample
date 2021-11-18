import TemplateType from '@/store/modules/template/types/TemplateType';
import TemplateState from '@/store/modules/template/states/TemplateState';
import TemplateMutationImpl from '@/store/modules/template/mutations/TemplateMutationImpl';

class TemplateMutation implements TemplateMutationImpl {
  [TemplateType.SET_COLLAPSED_DATA] = (state: TemplateState, payload: boolean): void => {
    state.collapsed = payload;
  };
}

export default TemplateMutation;
