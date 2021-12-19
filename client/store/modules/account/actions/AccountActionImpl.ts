import { AxiosResponse } from 'axios';
import { Commit } from 'vuex';
import { Modify } from '@/types/common';
import AccountActionInterface from '@/store/modules/account/actions/AccountActionInterface';
import AccountType from '@/store/modules/account/types/AccountType';
import SignInRequest from '@/types/apis/request/user/SignInRequest';
import RegisterRequest from '@/types/apis/request/user/RegisterRequest';
import SignInResponse from '@/types/apis/response/user/SignInResponse';

type AccountActionImpl = Modify<AccountActionInterface,
  {
    [AccountType.LOGIN]({ commit }: { commit: Commit }, payload: SignInRequest): Promise<AxiosResponse<SignInResponse>>;
    [AccountType.REGISTER]({ commit }: { commit: Commit }, payload: RegisterRequest): Promise<AxiosResponse<SignInResponse>>;
  }>;

export default AccountActionImpl;
