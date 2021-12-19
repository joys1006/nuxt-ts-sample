import AccountType from '@/store/modules/account/types/AccountType';
import SignInResponse from '@/types/apis/response/user/SignInResponse';

interface AccountGetterInterface {
  [AccountType.LOGIN]: SignInResponse;
}

export default AccountGetterInterface;
