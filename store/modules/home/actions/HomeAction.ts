import { Commit } from 'vuex';
import {AxiosResponse} from 'axios';
import HomeActionImpl from '@/store/modules/home/actions/HomeActionImpl';
import GetTablesRequest from '@/types/mock/GetTablesRequest';
import TableResponse from '@/types/mock/TableResponse';
import HomeType from '@/store/modules/home/types/HomeType';
import TableService from '@/services/apis/table.service';
import PostTableRequest from '@/types/mock/PostTableRequest';

const tableService: TableService = new TableService();

class HomeAction implements HomeActionImpl {
  [HomeType.GET_TABLES] = ({ commit }: { commit: Commit }, payload: GetTablesRequest): Promise<AxiosResponse<TableResponse[]>> => {
    return tableService.getTables(payload).then((response) => {
      commit(HomeType.SET_TABLES, response.data);
      return response;
    });
  };

  [HomeType.POST_TABLE] = ({ commit }: { commit: Commit }, payload: PostTableRequest): Promise<AxiosResponse<TableResponse[]>> => {
    return tableService.postTable(payload).then((response) => {
      commit(HomeType.SET_TABLES, response.data);
      return response;
    });
  }
}

export default HomeAction;
