import axios, {AxiosInstance} from 'axios';
import Cookie from 'js-cookie';
import { Vue } from 'nuxt-property-decorator';

export default class BaseService {
  protected http!: AxiosInstance;
  protected vue = new Vue();

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
          result = response.data;
        } else {
          const error = {
            status: status || 500,
            title: '에러',
            message: message || '잠시 후 다시 시도해주세요.'
          };
          result = Promise.reject(error);
        }

        return result;
      },
      (error: any) =>{
        if (error.response) {
          const { response } = error;
          const { status } = response;

          if (status === 403 || status === 401) {
            Cookie.remove('token');
            error = {
              status: Number(status),
              title: '로그인 상태 확인 요망',
              message: response.data.error.message
            };

            // 로그인 리다이렉팅
            this.vue.$router.push('/account/login')
              .then(() => {
                // 로그인 리다이렉팅 메세지
                this.vue.$message.error('로그인 상태가 정상적이지 않아, 로그인 페이지로 이동합니다.');
              });
          } else {
            error = response;
          }
        } else if (error.message.includes('timeout')) {
          error = {
            status: 408,
            title: '네트워크 연결 지연',
            message: '네트워크 연결 지연으로 인한 통신 요청 시간이 초과되었습니다. 잠시 후 다시 이용해주세요.'
          };
        } else if (error.message.includes('Network Error') >= 0) {
          error = {
            status: 503,
            title: '서버통신에러',
            message: 'API 서버에 일시적인 장애가 발생하였습니다.'
          };
        } else {
          error = {
            status: error.status || 500,
            title: error.title || '네트워크 연결이 원활하지 않습니다.',
            message: '잠시후 다시 이용해주세요.'
          };
        }

        return Promise.reject(error);

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
