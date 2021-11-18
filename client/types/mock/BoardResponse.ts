export default class BoardResponse {
  get updatedAt(): string {
    return this._updatedAt;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get no(): number {
    return this._no;
  }

  set no(value: number) {
    this._no = value;
  }

  private _no!: number;
  private _title!: string;
  private _content!: string;
  private _author!: string;
  private _createdAt!: string;
  private _updatedAt!: string;
}
