import { Modify } from '@/types/common';
import HomeGetterInterface from '@/store/modules/home/getters/HomeGetterInterface';
import HomeType from '@/store/modules/home/types/HomeType';
import HomeState from '@/store/modules/home/states/HomeState';
import BoardListResponse from '@/types/mock/BoardListResponse';

type HomeGetterImpl = Modify<
  HomeGetterInterface,
  {
    [HomeType.GET_BOARDS](state: HomeState): BoardListResponse;
  }
>;

export default HomeGetterImpl;
