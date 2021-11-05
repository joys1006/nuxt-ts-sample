import HomeType from '@/store/modules/home/types/HomeType';
import TableResponse from '@/types/mock/TableResponse';

interface HomeGetterInterface {
  [HomeType.GET_TABLES]: TableResponse[];
}

export default HomeGetterInterface;
