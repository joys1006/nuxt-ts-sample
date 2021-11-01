import HomeType from '@/store/modules/home/types/HomeType';
import MockResponse from '@/types/mock/MockResponse';

interface HomeMutationInterface {
  [HomeType.SET_MOCK_LIST](data: MockResponse[]): void;
}

export default HomeMutationInterface;
