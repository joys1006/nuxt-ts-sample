import { Commit } from 'vuex';
import { Request } from 'http-proxy-middleware/dist/types';
import { RootState, StoreModule } from '@/types/common';
import AccountState from '@/store/modules/account/states/AccountState';
import AccountAction from '@/store/modules/account/actions/AccountAction';
import AccountGetter from '@/store/modules/account/getters/AccountGetter';
import AccountMutation from '@/store/modules/account/mutations/AccountMutation';
import AccountType from '@/store/modules/account/types/AccountType';

const cookieparser = process.server ? require('cookieparser') : undefined;

const AccountStoreModule: StoreModule<AccountState, RootState> = {
  actions: {
    nuxtServerInit({ commit }: { commit: Commit }, { req } : { req: Request }) {
      let token = null;
      if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie);
        try {
          token = parsed.token;
        } catch (err) {
          // No valid cookie found
        }
      }
      commit(AccountType.SET_LOGIN_TOKEN, token);
    },
    ...new AccountAction()
  },
  getters: { ...new AccountGetter() },
  mutations: { ...new AccountMutation() },
  state: new AccountState()
};

export default AccountStoreModule;
