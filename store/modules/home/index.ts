import { RootState, StoreModule } from '@/types/common';
import HomeState from '@/store/modules/home/states/HomeState';
import HomeMutation from '@/store/modules/home/mutations/HomeMutation';
import HomeGetter from '@/store/modules/home/getters/HomeGetter';
import HomeAction from '@/store/modules/home/actions/HomeAction';

const HomeStoreModule: StoreModule<HomeState, RootState> = {
  actions: { ...new HomeAction() },
  getters: { ...new HomeGetter() },
  mutations: { ...new HomeMutation() },
  state: new HomeState()
};

export default HomeStoreModule;
