import TableResponse from '@/types/mock/TableResponse';
import { RootState } from '@/types/common';

export default class HomeState implements RootState {
  tables: TableResponse[] = [];
}
