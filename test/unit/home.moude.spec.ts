import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { beforeAll, beforeEach, describe, expect, it } from '@jest/globals';
import Tables from '../mock/Tables';
import HomeGetter from '@/store/modules/home/getters/HomeGetter';
import HomeType from '@/store/modules/home/types/HomeType';
import HomeState from '@/store/modules/home/states/HomeState';
import GetTablesRequest from '@/types/mock/GetTablesRequest';

const state: HomeState = {
  tables: Tables
};

// Store Unit Test
describe('HomeType', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let NuxtStore: { createStore?: any; default?: any; };
  let store: { dispatch: (arg0: HomeType, arg1: GetTablesRequest) => any; getters: { [x: string]: any; }; commit: (arg0: HomeType, arg1: import('../../types/mock/TableResponse').default[]) => void; };

  beforeAll(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    NuxtStore = await import('@/store');
  });
  beforeEach(async () => {
    store = await NuxtStore.createStore();
  });
  it('GET_TABLES ACTION', async function () {
    const payload: GetTablesRequest = new GetTablesRequest();

    payload.current = 1;
    payload.size = 1;

    await store.dispatch(HomeType.GET_TABLES, payload);

    const tablesGetter = store.getters[HomeType.GET_TABLES];

    expect(tablesGetter).toHaveLength(1);
    expect(tablesGetter[0].no).toEqual(1);
    expect(tablesGetter[0].title).toEqual(Tables[0].title);
    expect(tablesGetter[0].content).toEqual(Tables[0].content);
    expect(tablesGetter[0].writer).toEqual(Tables[0].writer);
    expect(tablesGetter[0].createdAt).toEqual(Tables[0].createdAt);
    expect(tablesGetter[0].updatedAt).toEqual(Tables[0].updatedAt);
  });
  it('GET_TABLES GETTER', () => {
    const homeGetter = new HomeGetter();
    const tablesGetter = homeGetter[HomeType.GET_TABLES](state);

    expect(tablesGetter).toHaveLength(1);
    expect(tablesGetter[0].no).toEqual(1);
    expect(tablesGetter[0].title).toEqual(Tables[0].title);
    expect(tablesGetter[0].content).toEqual(Tables[0].content);
    expect(tablesGetter[0].writer).toEqual(Tables[0].writer);
    expect(tablesGetter[0].createdAt).toEqual(Tables[0].createdAt);
    expect(tablesGetter[0].updatedAt).toEqual(Tables[0].updatedAt);
  });
  it('SET_TABLES MUTATION', () => {
    // Mutation
    store.commit(HomeType.SET_TABLES, Tables);

    const tablesGetter = store.getters[HomeType.SET_TABLES];

    expect(tablesGetter).toHaveLength(1);
    expect(tablesGetter[0].no).toEqual(1);
    expect(tablesGetter[0].title).toEqual(Tables[0].title);
    expect(tablesGetter[0].content).toEqual(Tables[0].content);
    expect(tablesGetter[0].writer).toEqual(Tables[0].writer);
    expect(tablesGetter[0].createdAt).toEqual(Tables[0].createdAt);
    expect(tablesGetter[0].updatedAt).toEqual(Tables[0].updatedAt);
  });
});
