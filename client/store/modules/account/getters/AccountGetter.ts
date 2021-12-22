import AccountType from '@/store/modules/account/types/AccountType';
import AccountState from '@/store/modules/account/states/AccountState';
import AccountGetterImpl from '@/store/modules/account/getters/AccountGetterImpl';

class AccountGetter implements AccountGetterImpl {
  [AccountType.GET_LOGIN_TOKEN](state: AccountState): string {
    return state.token;
  }
}

export default AccountGetter;
