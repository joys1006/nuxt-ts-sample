import { RootState } from '@/types/common';
import BoardListResponse from '@/types/mock/BoardListResponse';

export default class HomeState implements RootState {
  boards: BoardListResponse = new BoardListResponse();
}
