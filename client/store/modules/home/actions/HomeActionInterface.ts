import {AxiosResponse} from 'axios';
import HomeType from '@/store/modules/home/types/HomeType';
import BoardListRequest from '@/types/mock/BoardListRequest';
import BoardListResponse from '@/types/mock/BoardListResponse';
import InsertBoardRequest from '@/types/mock/InsertBoardRequest';

interface HomeActionInterface {
  [HomeType.GET_BOARDS](payload: BoardListRequest): Promise<AxiosResponse<BoardListResponse>>;
  [HomeType.POST_BOARDS](payload: InsertBoardRequest): Promise<AxiosResponse<BoardListResponse>>;
}

export default HomeActionInterface;
