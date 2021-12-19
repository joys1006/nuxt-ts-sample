import AccountType from '@/store/modules/account/types/AccountType';
import SignInResponse from '@/types/apis/response/user/SignInResponse';

interface AccountMutationInterface {
  [AccountType.SET_LOGIN_TOKEN](data: SignInResponse): void;
}

export default AccountMutationInterface;
