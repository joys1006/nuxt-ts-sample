import { Commit } from 'vuex';
import {AxiosResponse} from 'axios';
import HomeActionImpl from '@/store/modules/home/actions/HomeActionImpl';
import BoardListRequest from '@/types/mock/BoardListRequest';
import HomeType from '@/store/modules/home/types/HomeType';
import BoardService from '@/services/apis/board.service';
import InsertBoardRequest from '@/types/mock/InsertBoardRequest';
import BoardListResponse from '@/types/mock/BoardListResponse';

const boardService: BoardService = new BoardService();

class HomeAction implements HomeActionImpl {
  [HomeType.GET_BOARDS] = ({ commit }: { commit: Commit }, payload: BoardListRequest): Promise<AxiosResponse<BoardListResponse>> => {
    return boardService.getBoards(payload).then((response) => {
      commit(HomeType.SET_BOARDS, response.data);
      return response;
    });
  };

  [HomeType.POST_BOARDS] = ({ commit }: { commit: Commit }, payload: InsertBoardRequest): Promise<AxiosResponse<BoardListResponse>> => {
    return boardService.postBoard(payload).then((response) => {
      commit(HomeType.SET_BOARDS, response.data);
      return response;
    });
  }
}

export default HomeAction;
