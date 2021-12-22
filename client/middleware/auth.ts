import { Store } from 'vuex';
import { Route } from 'vue-router';

export default function ({ route, store, redirect }: { route: Route, store: Store<any>, redirect: any }) {
  const token: string | null = store.state.AccountStoreModule.token;

  // If the user is not authenticated
  if (route.path !== '/account/login') {
    if (!token) return redirect('/account/login');
  } else if (token) return redirect('/');
}
