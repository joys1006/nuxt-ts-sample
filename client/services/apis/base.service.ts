import axios, {AxiosInstance} from 'axios';

export default class BaseService {
  protected http!: AxiosInstance;

  constructor() {
    this.http = this.axiosInterceptors();
    this.setup();
  }

  private setup() {
    // Request
    this.http.interceptors.request.use((config) => {
      config.baseURL = '';
      config.timeout = 60000;
      config.headers = {
        'Accept': 'application/json',
          'Content-Type': 'application/json'
      };
      return config;
    });
  }

  protected axiosInterceptors(): AxiosInstance {
    const _axios = axios.create();

    _axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        error = {
          status: 400,
          title: '에러',
          message: '잘못된 요청입니다.'
        };
        return Promise.reject(error);
      });

    _axios.interceptors.response.use(
      (response) => {
        const { data, status } = response;
        const { message } = data;
        let result = null;

        if (Number(status) === 200) {
          result = response;
        } else {
          const error = {
            status: status || 500,
            title: '에러',
            message: message || '잠시 후 다시 시도해주세요.'
          };
          result = Promise.reject(error);
        }

        return result;
      });

    return _axios;
  }

  /**
   * 파라미터 변환 컨버터
   * @param payload
   */
  protected parameterConverter(payload: Object): string {
    let params = '';
    // eslint-disable-next-line array-callback-return
    Object.entries(payload).map(([key, value]) => {
      const orignalKey = key.replace('_', '');
      params += `${orignalKey}=${value}&`;
    });
    return params;
  }

  /**
   * 파라미터 변환 컨버터
   * @param payload
   */
  protected bodyKeyConverter(payload: Object): Object {
    const body = new Map();

    Object.entries(payload).map(([key, value]) => {
      const orignalKey = key.replace('_', '');
      body.set(orignalKey, value);
    });

    return Array.from(
      body
    ).reduce(
      (o, [key, value]) => {
        // @ts-ignore
        o[key] = value;

        return o;
      },
      {}
    );
  }
}
