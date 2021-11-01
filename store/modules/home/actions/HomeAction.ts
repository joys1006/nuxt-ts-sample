import { Commit } from 'vuex';
import HomeActionImpl from '@/store/modules/home/actions/HomeActionImpl';
import MockListRequest from '@/types/mock/MockListRequest';
import MockResponse from '@/types/mock/MockResponse';
import HomeType from '@/store/modules/home/types/HomeType';
import MockService from '@/services/apis/mock.service';

class HomeAction implements HomeActionImpl {
  [HomeType.GET_MOCK_LIST] = ({ commit }: { commit: Commit }, payload: MockListRequest): Promise<MockResponse[]> => {
    return MockService.getMockList(payload).then((response) => {
      commit(HomeType.SET_MOCK_LIST, response);
      return response;
    });
  };
}

export default HomeAction;
