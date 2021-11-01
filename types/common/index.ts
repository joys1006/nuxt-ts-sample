import { ActionTree, GetterTree, MutationTree } from 'vuex';

export type Dictionary<T> = { [key: string]: T };
export type Modify<T, R> = Omit<T, keyof R> & R;

export interface RootState {
  [key: string]: any;
}

export interface StoreModule<S, R> {
  state: RootState;
  actions: ActionTree<S, R>;
  getters: GetterTree<S, R>;
  mutations: MutationTree<S>;
}
