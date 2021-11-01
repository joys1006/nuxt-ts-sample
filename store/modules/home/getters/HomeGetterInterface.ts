import HomeType from '@/store/modules/home/types/HomeType';
import MockResponse from '@/types/mock/MockResponse';

interface HomeGetterInterface {
  [HomeType.GET_MOCK_LIST]: MockResponse[];
}

export default HomeGetterInterface;
