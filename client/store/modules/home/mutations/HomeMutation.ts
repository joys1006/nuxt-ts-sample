import HomeMutationImpl from '@/store/modules/home/mutations/HomeMutationImpl';
import HomeType from '@/store/modules/home/types/HomeType';
import HomeState from '@/store/modules/home/states/HomeState';
import BoardListResponse from '@/types/mock/BoardListResponse';

class HomeMutation implements HomeMutationImpl {
  [HomeType.SET_BOARDS] = (state: HomeState, data: BoardListResponse): void => {
    state.boards = data;
  };
}

export default HomeMutation;
