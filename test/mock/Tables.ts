import moment from 'moment';
import TableResponse from '@/types/mock/TableResponse';

const mock: TableResponse = new TableResponse();

mock.no = 1;
mock.title = `목 데이터 테스트1`;
mock.content = `테스트1입니다.`;
mock.writer = '홍길동';
mock.createdAt = moment(new Date()).format('YYYY-MM-DD');
mock.updatedAt = moment(new Date()).format('YYYY-MM-DD');

const Tables: TableResponse[] = [mock];

export default Tables;
