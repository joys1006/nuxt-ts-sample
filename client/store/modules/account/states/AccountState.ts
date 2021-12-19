import { RootState } from '@/types/common';
import SignInResponse from '@/types/apis/response/user/SignInResponse';

export default class AccountState implements RootState {
  login: SignInResponse = new SignInResponse();
}
