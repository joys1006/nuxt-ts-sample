import AccountType from '@/store/modules/account/types/AccountType';

interface AccountMutationInterface {
  [AccountType.SET_LOGIN_TOKEN](data: string): void;
  [AccountType.DELIETE_LOGIN_TOKEN](): void;
}

export default AccountMutationInterface;
