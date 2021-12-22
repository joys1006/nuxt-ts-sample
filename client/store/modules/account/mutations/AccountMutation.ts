import Cookie from 'js-cookie';
import AccountMutationImpl from '@/store/modules/account/mutations/AccountMutationImpl';
import AccountType from '@/store/modules/account/types/AccountType';
import AccountState from '@/store/modules/account/states/AccountState';

class AccountMutation implements AccountMutationImpl {
  [AccountType.SET_LOGIN_TOKEN] = (state: AccountState, data: string): void => {
    state.token = data;
    Cookie.set('token', data);
  }

  [AccountType.DELIETE_LOGIN_TOKEN] = (state: AccountState): void => {
    state.token = '';
    Cookie.remove('token');
  }
}

export default AccountMutation;
