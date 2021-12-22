export default class UnregisterRequest {
  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  private _userId!: string;
  private _password!: string;
}
