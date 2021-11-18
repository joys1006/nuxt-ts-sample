import HomeGetterImpl from '@/store/modules/home/getters/HomeGetterImpl';
import HomeType from '@/store/modules/home/types/HomeType';
import HomeState from '@/store/modules/home/states/HomeState';
import BoardListResponse from '@/types/mock/BoardListResponse';

class HomeGetter implements HomeGetterImpl {
  [HomeType.GET_BOARDS] = (state: HomeState): BoardListResponse => {
    return state.boards;
  };
}

export default HomeGetter;
