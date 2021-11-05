import { Modify } from '@/types/common';
import HomeMutationInterface from '@/store/modules/home/mutations/HomeMutationInterface';
import HomeType from '@/store/modules/home/types/HomeType';
import TableResponse from '@/types/mock/TableResponse';
import HomeState from '@/store/modules/home/states/HomeState';

type HomeMutationImpl = Modify<
  HomeMutationInterface,
  {
    [HomeType.SET_TABLES](state: HomeState, data: TableResponse[]): void;
  }
>;

export default HomeMutationImpl;
