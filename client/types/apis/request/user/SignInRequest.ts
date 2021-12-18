export default class SignInRequest {
  get password(): number {
    return this._password;
  }

  set password(value: number) {
    this._password = value;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  private _userId!: string;
  private _password!: number;
}
