import moment from 'moment';
import BoardResponse from '@/types/mock/BoardResponse';
import BoardListResponse from '@/types/mock/BoardListResponse';

const mock: BoardResponse = new BoardResponse();

mock.no = 1;
mock.title = `목 데이터 테스트1`;
mock.content = `테스트1입니다.`;
mock.author = '홍길동';
mock.createdAt = moment(new Date()).format('YYYY-MM-DD');
mock.updatedAt = moment(new Date()).format('YYYY-MM-DD');

const boards: BoardListResponse = new BoardListResponse();

boards.total = 1;
boards.list = [mock];

export default boards;
