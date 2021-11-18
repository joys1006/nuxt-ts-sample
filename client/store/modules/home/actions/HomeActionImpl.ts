import {AxiosResponse} from 'axios';
import { Commit } from 'vuex';
import { Modify } from '@/types/common';
import HomeActionInterface from '@/store/modules/home/actions/HomeActionInterface';
import HomeType from '@/store/modules/home/types/HomeType';
import BoardListRequest from '@/types/mock/BoardListRequest';
import BoardListResponse from '@/types/mock/BoardListResponse';
import InsertBoardRequest from '@/types/mock/InsertBoardRequest';

type HomeActionImpl = Modify<
  HomeActionInterface,
  {
    [HomeType.GET_BOARDS]({ commit }: { commit: Commit }, payload: BoardListRequest): Promise<AxiosResponse<BoardListResponse>>;
    [HomeType.POST_BOARDS]({ commit }: { commit: Commit }, payload: InsertBoardRequest): Promise<AxiosResponse<BoardListResponse>>;
  }
>;

export default HomeActionImpl;
