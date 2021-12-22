import { Modify } from '@/types/common';
import AccountGetterInterface from '@/store/modules/account/getters/AccountGetterInterface';
import AccountType from '@/store/modules/account/types/AccountType';
import AccountState from '@/store/modules/account/states/AccountState';

type AccountGetterImpl = Modify<
  AccountGetterInterface,
  {
    [AccountType.GET_LOGIN_TOKEN](state: AccountState): string;
  }
>;

export default AccountGetterImpl;
