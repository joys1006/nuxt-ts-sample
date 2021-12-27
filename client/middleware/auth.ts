import { Store } from 'vuex';
import { Route } from 'vue-router';

export default function ({ route, store, redirect }: { route: Route, store: Store<any>, redirect: any }) {
  const token: string | null = store.state.AccountStoreModule.token;
  const whiteList = [
    '/account/login',
    '/account/register',
    '/account/find/id',
    '/account/find/password'
  ];

  // If the user is not authenticated
  if (!whiteList.includes(route.path)) {
    if (!token) return redirect('/account/login');
  } else if (token) return redirect('/');
}
