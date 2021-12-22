import AccountType from '@/store/modules/account/types/AccountType';

interface AccountGetterInterface {
  [AccountType.GET_LOGIN_TOKEN]: string;
}

export default AccountGetterInterface;
