import { Commit } from 'vuex';
import { Modify } from '@/types/common';
import HomeActionInterface from '@/store/modules/home/actions/HomeActionInterface';
import HomeType from '@/store/modules/home/types/HomeType';
import MockListRequest from '@/types/mock/MockListRequest';
import MockResponse from '@/types/mock/MockResponse';

type HomeActionImpl = Modify<
  HomeActionInterface,
  {
    [HomeType.GET_MOCK_LIST]({ commit }: { commit: Commit }, payload: MockListRequest): Promise<MockResponse[]>;
  }
>;

export default HomeActionImpl;
