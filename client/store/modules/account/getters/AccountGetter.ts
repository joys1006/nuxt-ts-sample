import AccountType from '@/store/modules/account/types/AccountType';
import SignInResponse from '@/types/apis/response/user/SignInResponse';
import AccountState from '@/store/modules/account/states/AccountState';
import AccountGetterImpl from '@/store/modules/account/getters/AccountGetterImpl';

class AccountGetter implements AccountGetterImpl {
  [AccountType.LOGIN](state: AccountState): SignInResponse {
    return state.login;
  }
}

export default AccountGetter;
