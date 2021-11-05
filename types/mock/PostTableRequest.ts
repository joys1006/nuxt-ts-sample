import moment from 'moment';

export default class PostTableRequest {
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

  get writer(): string {
    return this._writer;
  }

  set writer(value: string) {
    this._writer = value;
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
  private _writer: string = '홍길동';
  private _createdAt: string = moment(new Date()).format('YYYY-MM-DD');
  private _updatedAt: string = moment(new Date()).format('YYYY-MM-DD');
}
