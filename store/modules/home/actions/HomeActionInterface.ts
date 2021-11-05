import {AxiosResponse} from 'axios';
import HomeType from '@/store/modules/home/types/HomeType';
import GetTablesRequest from '@/types/mock/GetTablesRequest';
import TableResponse from '@/types/mock/TableResponse';
import PostTableRequest from '@/types/mock/PostTableRequest';

interface HomeActionInterface {
  [HomeType.GET_TABLES](payload: GetTablesRequest): Promise<AxiosResponse<TableResponse[]>>;
  [HomeType.POST_TABLE](payload: PostTableRequest): Promise<AxiosResponse<TableResponse[]>>;
}

export default HomeActionInterface;
