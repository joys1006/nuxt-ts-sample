import HomeType from '@/store/modules/home/types/HomeType';
import BoardListResponse from '@/types/mock/BoardListResponse';

interface HomeMutationInterface {
  [HomeType.SET_BOARDS](data: BoardListResponse): void;
}

export default HomeMutationInterface;
