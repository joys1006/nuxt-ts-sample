import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { beforeAll, beforeEach, describe, expect, it } from '@jest/globals';
import TemplateType from '@/store/modules/template/types/TemplateType';
import TemplateState from '@/store/modules/template/states/TemplateState';
import TemplateGetter from '@/store/modules/template/getters/TemplateGetter';

const state: TemplateState = {
  collapsed: true
};

// Store Unit Test
describe('TemplateType', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let NuxtStore: { createStore?: any; default?: any; };
  let store: { commit: (arg0: TemplateType, arg1: boolean) => void; getters: { [x: string]: any; }; };

  beforeAll(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    NuxtStore = await import('@/store');
  });
  beforeEach(async () => {
    store = await NuxtStore.createStore();
  });
  it('GET_COLLAPSED_DATA GETTER', () => {
    const templateGetter = new TemplateGetter();
    const collapsedGetter = templateGetter[TemplateType.GET_COLLAPSED_DATA](state);

    expect(collapsedGetter).toEqual(true);
  });
  it('SET_COLLAPSED_DATA MUTATION', () => {
    // Mutation
    store.commit(TemplateType.SET_COLLAPSED_DATA, false);

    const mockListGetter = store.getters[TemplateType.GET_COLLAPSED_DATA];

    expect(mockListGetter).toEqual(false);
  });
});
