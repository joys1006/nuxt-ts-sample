import {AxiosResponse} from 'axios';
import TableResponse from '@/types/mock/TableResponse';
import GetTablesRequest from '@/types/mock/GetTablesRequest';
import BaseService from '@/services/apis/base.service';
import PostTableRequest from '@/types/mock/PostTableRequest';

export default class TableService extends BaseService {
  public getTables(payload: GetTablesRequest): Promise<AxiosResponse<TableResponse[]>> {
    const params = this.parameterConverter(payload);
    return this.http.get(`tables.json?${params}`);
  }

  public postTable(payload: PostTableRequest): Promise<AxiosResponse<TableResponse[]>> {
    const body = this.bodyKeyConverter(payload);
    return this.http.post('/', JSON.stringify(body));
  }
}
