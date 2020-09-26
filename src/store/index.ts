import { createStore } from 'vuex';
import Api, { ISound } from '@/api';

export default createStore({
  state: {
    sounds: [] as ISound[],
  },
  mutations: {
    setSounds(state, sounds) {
      state.sounds = sounds;
    },
  },
  actions: {
    async getSounds(store) {
      const sounds = await Api.getSounds();
      store.commit('setSounds', sounds);
    },
  },
  modules: {
  },
});
