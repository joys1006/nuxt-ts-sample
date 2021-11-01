import MockResponse from '@/types/mock/MockResponse';
import { RootState } from '@/types/common';

export default class HomeState implements RootState {
  mockList: MockResponse[] = [];
}
