import { Modify } from '@/types/common';
import AccountType from '@/store/modules/account/types/AccountType';
import SignInResponse from '@/types/apis/response/user/SignInResponse';
import AccountMutationInterface from '@/store/modules/account/mutations/AccountMutationInterface';
import AccountState from '@/store/modules/account/states/AccountState';

type AccountMutationImpl = Modify<
  AccountMutationInterface,
  {
    [AccountType.SET_LOGIN_TOKEN](state: AccountState, data: SignInResponse): void;
  }
>;


export default AccountMutationImpl;
