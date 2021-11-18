import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { beforeAll, beforeEach, describe, expect, it } from '@jest/globals';
import boards from '../mock/Boards';
import HomeGetter from '@/store/modules/home/getters/HomeGetter';
import HomeType from '@/store/modules/home/types/HomeType';
import HomeState from '@/store/modules/home/states/HomeState';
import BoardListRequest from '@/types/mock/BoardListRequest';
import BoardListResponse from '@/types/mock/BoardListResponse';

const state: HomeState = {
  boards
};

// Store Unit Test
describe('HomeType', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let NuxtStore: { createStore?: any; default?: any; };
  let store: { dispatch: (arg0: HomeType, arg1: BoardListRequest) => any; getters: { [x: string]: any; }; commit: (arg0: HomeType, arg1: BoardListResponse) => void; };

  beforeAll(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    NuxtStore = await import('@/store');
  });
  beforeEach(async () => {
    store = await NuxtStore.createStore();
  });
  it('GET_BOARDS ACTION', async function () {
    const payload: BoardListRequest = new BoardListRequest();

    payload.current = 1;
    payload.size = 1;

    await store.dispatch(HomeType.GET_BOARDS, payload);

    const boardsGetter = store.getters[HomeType.GET_BOARDS];

    expect(boardsGetter.list).toHaveLength(1);
    expect(boardsGetter.list[0].no).toEqual(1);
    expect(boardsGetter.list[0].title).toEqual(boards.list[0].title);
    expect(boardsGetter.list[0].content).toEqual(boards.list[0].content);
    expect(boardsGetter.list[0].author).toEqual(boards.list[0].author);
    expect(boardsGetter.list[0].createdAt).toEqual(boards.list[0].createdAt);
    expect(boardsGetter.list[0].updatedAt).toEqual(boards.list[0].updatedAt);
  });
  it('GET_BOARDS GETTER', () => {
    const homeGetter = new HomeGetter();
    const boardsGetter = homeGetter[HomeType.GET_BOARDS](state);

    expect(boardsGetter.list).toHaveLength(1);
    expect(boardsGetter.list[0].no).toEqual(1);
    expect(boardsGetter.list[0].title).toEqual(boards.list[0].title);
    expect(boardsGetter.list[0].content).toEqual(boards.list[0].content);
    expect(boardsGetter.list[0].author).toEqual(boards.list[0].author);
    expect(boardsGetter.list[0].createdAt).toEqual(boards.list[0].createdAt);
    expect(boardsGetter.list[0].updatedAt).toEqual(boards.list[0].updatedAt);
  });
  it('SET_BOARDS MUTATION', () => {
    // Mutation
    store.commit(HomeType.SET_BOARDS, boards);

    const boardsGetter = store.getters[HomeType.SET_BOARDS];

    expect(boardsGetter.list).toHaveLength(1);
    expect(boardsGetter.list[0].no).toEqual(1);
    expect(boardsGetter.list[0].title).toEqual(boards.list[0].title);
    expect(boardsGetter.list[0].content).toEqual(boards.list[0].content);
    expect(boardsGetter.list[0].author).toEqual(boards.list[0].author);
    expect(boardsGetter.list[0].createdAt).toEqual(boards.list[0].createdAt);
    expect(boardsGetter.list[0].updatedAt).toEqual(boards.list[0].updatedAt);
  });
});
