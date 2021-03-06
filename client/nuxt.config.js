
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-typescript-nuxt-sample',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  proxy: {
    // https://github.com/joys1006/springboot-sample-project
    "/v1": "http://localhost:8080",
  },
  plugins: [
    '@/plugins/antd-ui',
    '~/plugins/truncate'
  ],
  components: true,
  modules: [
    '@nuxtjs/axios'
  ],
  buildModules: [
    '@nuxtjs/composition-api/module',
    [
      'unplugin-auto-import/nuxt',
      {
        imports: ['@nuxtjs/composition-api'],
      },
    ],
    '@nuxtjs/style-resources',
    '@nuxtjs/proxy',
    '@nuxt/typescript-build'
  ],
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/sass/main.scss'
  ],
  loading: {
    color: 'blue',
    height: '3px',
    throttle: 0
  },
  router: {
    middleware: 'auth'
  }
};
