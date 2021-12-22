import { AxiosResponse } from 'axios';
import AccountType from '@/store/modules/account/types/AccountType';
import SignInRequest from '@/types/apis/request/user/SignInRequest';
import RegisterRequest from '@/types/apis/request/user/RegisterRequest';

interface AccountActionInterface {
  [AccountType.LOGIN](payload: SignInRequest): Promise<AxiosResponse<string>>;
  [AccountType.REGISTER](payload: RegisterRequest): Promise<AxiosResponse<string>>;
}

export default AccountActionInterface;
