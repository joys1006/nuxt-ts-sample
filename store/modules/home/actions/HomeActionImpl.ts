import {AxiosResponse} from 'axios';
import { Commit } from 'vuex';
import { Modify } from '@/types/common';
import HomeActionInterface from '@/store/modules/home/actions/HomeActionInterface';
import HomeType from '@/store/modules/home/types/HomeType';
import GetTablesRequest from '@/types/mock/GetTablesRequest';
import TableResponse from '@/types/mock/TableResponse';
import PostTableRequest from '@/types/mock/PostTableRequest';

type HomeActionImpl = Modify<
  HomeActionInterface,
  {
    [HomeType.GET_TABLES]({ commit }: { commit: Commit }, payload: GetTablesRequest): Promise<AxiosResponse<TableResponse[]>>;
    [HomeType.POST_TABLE]({ commit }: { commit: Commit }, payload: PostTableRequest): Promise<AxiosResponse<TableResponse[]>>;
  }
>;

export default HomeActionImpl;
