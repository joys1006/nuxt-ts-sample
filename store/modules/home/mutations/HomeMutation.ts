import HomeMutationImpl from '@/store/modules/home/mutations/HomeMutationImpl';
import HomeType from '@/store/modules/home/types/HomeType';
import HomeState from '@/store/modules/home/states/HomeState';
import TableResponse from '@/types/mock/TableResponse';

class HomeMutation implements HomeMutationImpl {
  [HomeType.SET_TABLES] = (state: HomeState, data: TableResponse[]): void => {
    state.tables = data.sort((a, b) => b.no - a.no);
  };
}

export default HomeMutation;
