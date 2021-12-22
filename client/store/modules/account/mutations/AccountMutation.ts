import AccountMutationImpl from '@/store/modules/account/mutations/AccountMutationImpl';
import AccountType from '@/store/modules/account/types/AccountType';
import SignInResponse from '@/types/apis/response/user/SignInResponse';
import AccountState from '@/store/modules/account/states/AccountState';
import CookieUtil from '@/common/utils/CookieUtil';

const cookieUtil = new CookieUtil();

class AccountMutation implements AccountMutationImpl {

  [AccountType.SET_LOGIN_TOKEN] = (state: AccountState, data: SignInResponse): void => {
    state.login = data;
    cookieUtil.setCookie('ACCESS_TOKEN', data.token, NaN);
  }
}

export default AccountMutation;
