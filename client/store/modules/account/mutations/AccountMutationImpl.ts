import { Modify } from '@/types/common';
import AccountType from '@/store/modules/account/types/AccountType';
import AccountMutationInterface from '@/store/modules/account/mutations/AccountMutationInterface';
import AccountState from '@/store/modules/account/states/AccountState';

type AccountMutationImpl = Modify<
  AccountMutationInterface,
  {
    [AccountType.SET_LOGIN_TOKEN](state: AccountState, data: string): void;
    [AccountType.DELIETE_LOGIN_TOKEN](state: AccountState): void;
  }
>;


export default AccountMutationImpl;
