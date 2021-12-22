export default class SignInResponse {
  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  private _token!: string;
}
