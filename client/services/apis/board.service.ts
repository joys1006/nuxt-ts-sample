import {AxiosResponse} from 'axios';
import BoardListRequest from '@/types/mock/BoardListRequest';
import BaseService from '@/services/apis/base.service';
import InsertBoardRequest from '@/types/mock/InsertBoardRequest';
import BoardListResponse from '@/types/mock/BoardListResponse';

export default class BoardService extends BaseService {
  public getBoards(payload: BoardListRequest): Promise<AxiosResponse<BoardListResponse>> {
    return this.http.get(`/api/lists/${payload.current}`);
  }

  public postBoard(payload: InsertBoardRequest): Promise<AxiosResponse<BoardListResponse>> {
    const body = this.bodyKeyConverter(payload);
    return this.http.post('/api/write', JSON.stringify(body));
  }
}
