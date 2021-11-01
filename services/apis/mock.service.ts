import MockResponse from '@/types/mock/MockResponse';
import MockListRequest from '@/types/mock/MockListRequest';
import moment from 'moment';

class MockService {
  public getMockList(payload: MockListRequest): Promise<MockResponse[]> {
    return new Promise((resolve, reject) => {
      const data: MockResponse[] = [];
      const startSize = payload.current > 1 ? payload.current * payload.size - 9 : payload.current;
      const length = payload.current * payload.size;

      for (let i = startSize; i <= length; i++) {
        const mock: MockResponse = new MockResponse();

        mock.no = i;
        mock.title = `목 데이터 테스트${i}`;
        mock.content = `테스트${i}입니다.`;
        mock.writer = '홍길동';
        mock.createdAt = moment(new Date()).format('YYYY-MM-DD');
        mock.updatedAt = moment(new Date()).format('YYYY-MM-DD');

        data.push(mock);
      }
      resolve(data);
      reject(new Error('request is failed'));
    });
  }
}

export default new MockService();
