import { RootState, StoreModule } from '@/types/common';
import AccountState from '@/store/modules/account/states/AccountState';
import AccountAction from '@/store/modules/account/actions/AccountAction';
import AccountGetter from '@/store/modules/account/getters/AccountGetter';
import AccountMutation from '@/store/modules/account/mutations/AccountMutation';

const AccountStoreModule: StoreModule<AccountState, RootState> = {
  actions: { ...new AccountAction() },
  getters: { ...new AccountGetter() },
  mutations: { ...new AccountMutation() },
  state: new AccountState()
};

export default AccountStoreModule;
