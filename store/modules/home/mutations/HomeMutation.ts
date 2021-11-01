import HomeMutationImpl from '@/store/modules/home/mutations/HomeMutationImpl';
import HomeType from '@/store/modules/home/types/HomeType';
import HomeState from '@/store/modules/home/states/HomeState';
import MockResponse from '@/types/mock/MockResponse';

class HomeMutation implements HomeMutationImpl {
  [HomeType.SET_MOCK_LIST] = (state: HomeState, data: MockResponse[]): void => {
    state.mockList = data;
  };
}

export default HomeMutation;
