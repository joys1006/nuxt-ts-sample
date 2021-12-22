import { Commit } from 'vuex';
import { AxiosResponse } from 'axios';
import AccountActionImpl from '@/store/modules/account/actions/AccountActionImpl';
import UserService from '@/services/apis/user.service';
import AccountType from '@/store/modules/account/types/AccountType';
import SignInRequest from '@/types/apis/request/user/SignInRequest';
import RegisterRequest from '@/types/apis/request/user/RegisterRequest';
import SignInResponse from '@/types/apis/response/user/SignInResponse';

const userService: UserService = new UserService();

class AccountAction implements AccountActionImpl {

  /**
   * 로그인 Action
   * @param commit Commit State 커밋
   * @param payload SignInRequest Api Payload
   * @return Promise<AxiosResponse<SignInResponse>>
   */
  [AccountType.LOGIN] = ({ commit }: { commit: Commit }, payload: SignInRequest): Promise<AxiosResponse<SignInResponse>> => {
    return userService.signIn(payload)
      .then((response) => {
        console.log(response);
        commit(AccountType.SET_LOGIN_TOKEN, response.data);
        return response;
      });
  }

  /**
   * 회원가입 Action
   * @param commit Commit State 커밋
   * @param payload RegisterRequest Api Payload
   * @return Promise<AxiosResponse<SignInResponse>>
   */
  [AccountType.REGISTER] = ({ commit }: { commit: Commit }, payload: RegisterRequest): Promise<AxiosResponse<SignInResponse>> => {
    return userService.register(payload)
      .then((response) => {
        commit(AccountType.SET_LOGIN_TOKEN, response.data);
        return response;
      });
  }

}

export default AccountAction;
