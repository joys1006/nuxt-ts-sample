import { Modify } from '@/types/common';
import HomeMutationInterface from '@/store/modules/home/mutations/HomeMutationInterface';
import HomeType from '@/store/modules/home/types/HomeType';
import BoardListResponse from '@/types/mock/BoardListResponse';
import HomeState from '@/store/modules/home/states/HomeState';

type HomeMutationImpl = Modify<
  HomeMutationInterface,
  {
    [HomeType.SET_BOARDS](state: HomeState, data: BoardListResponse): void;
  }
>;

export default HomeMutationImpl;
