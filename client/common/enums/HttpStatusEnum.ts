/**
 * HttpStatusEnum Http Status 상태에 대한 정리
 * @description 장애나 상태코드별로 해당 이넘을 통해 메세지 노출
 * @summary Message나 Error Page 영역에 사용
 * @version v1.0.0
 */

export default class HttpStatusEnum {
  readonly status: number = 404;
  readonly message: string = '현재 페이지를 이용할 수 없습니다.';
  readonly title: string = '404 NotFound';

  public static 400 = new HttpStatusEnum(400, '잘못된 요청입니다.', '400 Bad Request');
  public static 401 = new HttpStatusEnum(401, '리소스에 대한 권한이 없습니다.', '401 Unauthorized');
  public static 403 = new HttpStatusEnum(403, '요청에 대한 접근 권한이 없습니다.', '403 Forbidden');
  public static 404 = new HttpStatusEnum(404, '현재 페이지를 이용할 수 없습니다.', '404 NotFound');
  public static 500 = new HttpStatusEnum(500, '서버 에러가 발생하였습니다. 잠시 후에 다시 이용해주세요.', '500 Internal Server Error');
  public static 502 = new HttpStatusEnum(502, '해당 서버에 요청이 많아. 일시적인 에러가 발생하였습니다.', '502 Bad Gateway');
  public static 503 = new HttpStatusEnum(503, '해당 서버가 점검상태입니다. 잠시 후에 다시 이용해주세요.', '503 Service Unavailable');

  constructor(status: number, message: string, title: string) {
    this.status = status;
    this.message = message;
    this.title = title;
  }
}
