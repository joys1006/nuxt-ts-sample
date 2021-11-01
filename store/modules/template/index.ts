import { RootState, StoreModule } from '@/types/common';
import TemplateState from '@/store/modules/template/states/TemplateState';
import TemplateMutation from '@/store/modules/template/mutations/TemplateMutation';
import TemplateGetter from '@/store/modules/template/getters/TemplateGetter';
import TemplateAction from '@/store/modules/template/actions/TemplateAction';

const TemplateStoreModule: StoreModule<TemplateState, RootState> = {
  actions: { ...new TemplateAction() },
  getters: { ...new TemplateGetter() },
  mutations: { ...new TemplateMutation() },
  state: new TemplateState()
};

export default TemplateStoreModule;
