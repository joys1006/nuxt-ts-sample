import { Modify } from '@/types/common';
import AccountGetterInterface from '@/store/modules/account/getters/AccountGetterInterface';
import AccountType from '@/store/modules/account/types/AccountType';
import AccountState from '@/store/modules/account/states/AccountState';
import SignInResponse from '@/types/apis/response/user/SignInResponse';

type AccountGetterImpl = Modify<
  AccountGetterInterface,
  {
    [AccountType.LOGIN](state: AccountState): SignInResponse;
  }
>;

export default AccountGetterImpl;
