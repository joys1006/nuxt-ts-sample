import HomeGetterImpl from '@/store/modules/home/getters/HomeGetterImpl';
import HomeType from '@/store/modules/home/types/HomeType';
import HomeState from '@/store/modules/home/states/HomeState';
import TableResponse from '@/types/mock/TableResponse';

class HomeGetter implements HomeGetterImpl {
  [HomeType.GET_TABLES] = (state: HomeState): TableResponse[] => {
    return state.tables;
  };
}

export default HomeGetter;
