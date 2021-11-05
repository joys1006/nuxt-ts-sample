export default class GetTablesRequest {
  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get current(): number {
    return this._current;
  }

  set current(value: number) {
    this._current = value;
  }

  private _current = 1;
  private _size = 10;
}
