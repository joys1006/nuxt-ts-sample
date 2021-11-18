import { Modify } from '@/types/common';
import TemplateType from '@/store/modules/template/types/TemplateType';
import TemplateState from '@/store/modules/template/states/TemplateState';
import TemplateGetterInterface from '@/store/modules/template/getters/TemplateGetterInterface';

type TemplateGetterImpl = Modify<
  TemplateGetterInterface,
  {
    [TemplateType.GET_COLLAPSED_DATA](state: TemplateState): boolean;
  }
>;

export default TemplateGetterImpl;
