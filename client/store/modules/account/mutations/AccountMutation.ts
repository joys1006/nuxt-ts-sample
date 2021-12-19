import AccountMutationImpl from '@/store/modules/account/mutations/AccountMutationImpl';
import AccountType from '@/store/modules/account/types/AccountType';
import SignInResponse from '@/types/apis/response/user/SignInResponse';
import AccountState from '@/store/modules/account/states/AccountState';

class AccountMutation implements AccountMutationImpl {
  [AccountType.SET_LOGIN_TOKEN](state: AccountState, data: SignInResponse): void {
    state.login = data;
  }
}

export default AccountMutation;
