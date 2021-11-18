import HomeType from '@/store/modules/home/types/HomeType';
import BoardListResponse from '@/types/mock/BoardListResponse';

interface HomeGetterInterface {
  [HomeType.GET_BOARDS]: BoardListResponse;
}

export default HomeGetterInterface;
