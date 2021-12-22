/**
 * Cookie/Storage Mixin에 대한 JS
 */
export default class CookieUtil {
  /**
   * 쿠키 저장 메소드
   * @param name {string} 쿠키 명
   * @param value {any} 쿠키 값
   * @param exp {number} 시간
   */
  public setCookie(name:string, value: any, exp:number) {
    const date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};Expires=${date.toUTCString()};path=/;`;
  }

  /**
   * 쿠키 저장된 값 조회 메소드
   * @param name {string} 쿠키 명
   */
  public getCookie(name:string) {
    const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return value ? value[2] : null;
  }

  /**
   * 쿠키 삭제 메소드
   * @param name {string} 쿠키 명
   */
  public deleteCookie(name:string) {
    const date: Date = new Date();
    date.setDate(date.getDate() - 5);
    document.cookie = `${name}='';Expires=${date.toUTCString()};path=/;`;
    if (this.getCookie(name)) {
      document.cookie = `${name}='';Expires=${date.toUTCString()};path=/;`;
    }
  }
}
