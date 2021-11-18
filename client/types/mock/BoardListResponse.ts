import BoardResponse from '@/types/mock/BoardResponse';

export default class BoardListResponse {
  get list(): BoardResponse[] {
    return this._list;
  }

  set list(value: BoardResponse[]) {
    this._list = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  private _total!: number;
  private _list!: BoardResponse[];
}
