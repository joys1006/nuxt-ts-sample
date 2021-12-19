import { AxiosResponse } from 'axios';
import BaseService from '@/services/apis/base.service';
import SignInRequest from '@/types/apis/request/user/SignInRequest';
import RegisterRequest from '@/types/apis/request/user/RegisterRequest';
import UnregisterRequest from '@/types/apis/request/user/UnregisterRequest';
import SignInResponse from '@/types/apis/response/user/SignInResponse';

export default class UserService extends BaseService {
  /**
   * 로그인 API
   * @param payload SignInRequest
   * @return Promise<AxiosResponse<string>> 토큰 값
   */
  public signIn(payload: SignInRequest): Promise<AxiosResponse<SignInResponse>> {
    return this.http.post("/v1/users/sign-in", payload);
  }

  /**
   * 회원가입 API
   * @param payload RegisterRequest
   * @return Promise<AxiosResponse<string>> 토큰 값
   */
  public register(payload: RegisterRequest): Promise<AxiosResponse<SignInResponse>> {
    return this.http.post("/v1/users/register", payload);
  }

  /**
   * 회원탈퇴 API
   * @param payload UnregisterRequest
   * @return Promise<AxiosResponse<string>> 성공 유/무
   */
  public unregister(payload: UnregisterRequest): Promise<AxiosResponse<string>> {
    return this.http.post("/v1/users/unregister", payload);
  }
}
