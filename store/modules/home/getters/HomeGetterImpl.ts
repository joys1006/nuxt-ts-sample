import { Modify } from '@/types/common';
import HomeGetterInterface from '@/store/modules/home/getters/HomeGetterInterface';
import HomeType from '@/store/modules/home/types/HomeType';
import MockResponse from '@/types/mock/MockResponse';
import HomeState from '@/store/modules/home/states/HomeState';

type HomeGetterImpl = Modify<
  HomeGetterInterface,
  {
    [HomeType.GET_MOCK_LIST](state: HomeState): MockResponse[];
  }
>;

export default HomeGetterImpl;
