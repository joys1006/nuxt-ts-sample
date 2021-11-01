import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { beforeAll, beforeEach, describe, expect, it } from '@jest/globals';
import MockList from '../mock/MockList';
import HomeGetter from '@/store/modules/home/getters/HomeGetter';
import HomeType from '@/store/modules/home/types/HomeType';
import HomeState from '@/store/modules/home/states/HomeState';
import MockListRequest from '@/types/mock/MockListRequest';

const state: HomeState = {
  mockList: MockList
};

// Store Unit Test
describe('HomeType', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let NuxtStore: { createStore?: any; default?: any; };
  let store: { dispatch: (arg0: HomeType, arg1: MockListRequest) => any; getters: { [x: string]: any; }; commit: (arg0: HomeType, arg1: import('../../types/mock/MockResponse').default[]) => void; };

  beforeAll(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    NuxtStore = await import('@/store');
  });
  beforeEach(async () => {
    store = await NuxtStore.createStore();
  });
  it('GET_MOCK_LIST ACTION', async function () {
    const payload: MockListRequest = new MockListRequest();

    payload.current = 1;
    payload.size = 1;

    await store.dispatch(HomeType.GET_MOCK_LIST, payload);

    const mockListGetter = store.getters[HomeType.GET_MOCK_LIST];

    expect(mockListGetter).toHaveLength(1);
    expect(mockListGetter[0].no).toEqual(1);
    expect(mockListGetter[0].title).toEqual(MockList[0].title);
    expect(mockListGetter[0].content).toEqual(MockList[0].content);
    expect(mockListGetter[0].writer).toEqual(MockList[0].writer);
    expect(mockListGetter[0].createdAt).toEqual(MockList[0].createdAt);
    expect(mockListGetter[0].updatedAt).toEqual(MockList[0].updatedAt);
  });
  it('GET_MOCK_LIST GETTER', () => {
    const homeGetter = new HomeGetter();
    const mockListGetter = homeGetter[HomeType.GET_MOCK_LIST](state);

    expect(mockListGetter).toHaveLength(1);
    expect(mockListGetter[0].no).toEqual(1);
    expect(mockListGetter[0].title).toEqual(MockList[0].title);
    expect(mockListGetter[0].content).toEqual(MockList[0].content);
    expect(mockListGetter[0].writer).toEqual(MockList[0].writer);
    expect(mockListGetter[0].createdAt).toEqual(MockList[0].createdAt);
    expect(mockListGetter[0].updatedAt).toEqual(MockList[0].updatedAt);
  });
  it('SET_MOCK_LIST MUTATION', () => {
    // Mutation
    store.commit(HomeType.SET_MOCK_LIST, MockList);

    const mockListGetter = store.getters[HomeType.GET_MOCK_LIST];

    expect(mockListGetter).toHaveLength(1);
    expect(mockListGetter[0].no).toEqual(1);
    expect(mockListGetter[0].title).toEqual(MockList[0].title);
    expect(mockListGetter[0].content).toEqual(MockList[0].content);
    expect(mockListGetter[0].writer).toEqual(MockList[0].writer);
    expect(mockListGetter[0].createdAt).toEqual(MockList[0].createdAt);
    expect(mockListGetter[0].updatedAt).toEqual(MockList[0].updatedAt);
  });
});
