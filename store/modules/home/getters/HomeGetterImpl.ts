import { Modify } from '@/types/common';
import HomeGetterInterface from '@/store/modules/home/getters/HomeGetterInterface';
import HomeType from '@/store/modules/home/types/HomeType';
import TableResponse from '@/types/mock/TableResponse';
import HomeState from '@/store/modules/home/states/HomeState';

type HomeGetterImpl = Modify<
  HomeGetterInterface,
  {
    [HomeType.GET_TABLES](state: HomeState): TableResponse[];
  }
>;

export default HomeGetterImpl;
