import HomeType from '@/store/modules/home/types/HomeType';
import TableResponse from '@/types/mock/TableResponse';

interface HomeMutationInterface {
  [HomeType.SET_TABLES](data: TableResponse[]): void;
}

export default HomeMutationInterface;
