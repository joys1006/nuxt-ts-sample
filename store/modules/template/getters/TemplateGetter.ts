import TemplateType from '@/store/modules/template/types/TemplateType';
import TemplateGetterImpl from '@/store/modules/template/getters/TemplateGetterImpl';
import TemplateState from '@/store/modules/template/states/TemplateState';

class TemplateGetter implements TemplateGetterImpl {
  [TemplateType.GET_COLLAPSED_DATA] = (state: TemplateState): boolean => {
    return state.collapsed;
  };
}

export default TemplateGetter;
