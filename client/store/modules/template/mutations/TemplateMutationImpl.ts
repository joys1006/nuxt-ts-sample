import TemplateMutationInterface from './TemplateMutationInterface';
import { Modify } from '@/types/common';
import TemplateType from '@/store/modules/template/types/TemplateType';
import TemplateState from '@/store/modules/template/states/TemplateState';

type TemplateMutationImpl = Modify<
  TemplateMutationInterface,
  {
    [TemplateType.SET_COLLAPSED_DATA](state: TemplateState, payload: boolean): void;
  }
>;

export default TemplateMutationImpl;
